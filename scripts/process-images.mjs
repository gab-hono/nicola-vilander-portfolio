/**
 * Prepares Nícola's original photos for the web, outside the repo.
 *
 * For every image found (recursively) in the input folder it:
 *   - converts HEIC/HEIF to JPEG first (iPhone photos),
 *   - applies the EXIF orientation, then strips all metadata (incl. GPS),
 *   - resizes to MAX_EDGE px on the long edge (never upscales),
 *   - exports an sRGB progressive JPEG (mozjpeg, quality JPEG_QUALITY).
 *
 * It also writes a contact sheet (all thumbnails with their output names)
 * and a report.md with original size, output size and low-resolution flags.
 *
 * Usage:
 *   npm run images -- [inputDir] [outputDir]
 * Defaults: ../nicola-fotos-originales → ../nicola-fotos-web
 * Run it again whenever new photos arrive: the output folder is rebuilt.
 */
import { readdir, readFile, mkdir, rm, writeFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import heicConvert from "heic-convert";

const MAX_EDGE = 2400;
const JPEG_QUALITY = 80;
/** Below this long edge, a photo cannot fill a full-width block on a retina screen. */
const LOW_RES_EDGE = 1600;

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".tif", ".tiff", ".heic", ".heif"]);
const HEIC_EXTENSIONS = new Set([".heic", ".heif"]);

const SHEET_COLUMNS = 5;
const TILE = 360;
const LABEL_HEIGHT = 44;
const GAP = 16;
const SHEET_BACKGROUND = "#0a0a0a";

const repoRoot = fileURLToPath(new URL("..", import.meta.url));
const inputDir = path.resolve(process.argv[2] ?? path.join(repoRoot, "..", "nicola-fotos-originales"));
const outputDir = path.resolve(process.argv[3] ?? path.join(repoRoot, "..", "nicola-fotos-web"));

/** "ESCENA 2 A 10..jpg" → "escena-2-a-10"; "Pedagogy of the Affect" → "pedagogy-of-the-affect". */
function slugify(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function escapeXml(text) {
  return text.replace(/[<>&"']/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;" })[c]);
}

function formatKb(bytes) {
  return `${Math.round(bytes / 1024)} KB`;
}

async function findImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries
      .filter((entry) => !entry.name.startsWith("."))
      .map(async (entry) => {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) return findImages(fullPath);
        return IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase()) ? [fullPath] : [];
      }),
  );
  return files.flat().sort((a, b) => a.localeCompare(b));
}

/** Returns something sharp can read: the file path, or a JPEG buffer for HEIC. */
async function readSource(file) {
  if (!HEIC_EXTENSIONS.has(path.extname(file).toLowerCase())) return file;
  const buffer = await readFile(file);
  return Buffer.from(await heicConvert({ buffer, format: "JPEG", quality: 1 }));
}

async function processImage(file, usedNames) {
  // Group = the folder the photo is in (the project), "root" if it is loose in the input folder.
  const parent = path.dirname(file);
  const group = parent === inputDir ? "root" : slugify(path.basename(parent));

  // Two originals can slugify to the same name ("ESCENA 2 A 10.jpg" / "ESCENA 2 A 10..jpg").
  const base = slugify(path.parse(file).name) || "image";
  let name = base;
  for (let i = 2; usedNames.has(`${group}/${name}`); i += 1) name = `${base}-${i}`;
  usedNames.add(`${group}/${name}`);

  const source = await readSource(file);
  const image = sharp(source, { failOn: "none" }).rotate();
  const { width = 0, height = 0 } = await image.metadata();
  // metadata() reports the stored size; swap it when the EXIF orientation rotates by 90°.
  const { orientation = 1 } = await sharp(source, { failOn: "none" }).metadata();
  const [origWidth, origHeight] = orientation >= 5 ? [height, width] : [width, height];

  const relativeOut = path.join(group, `${name}.jpg`);
  const outFile = path.join(outputDir, relativeOut);
  await mkdir(path.dirname(outFile), { recursive: true });

  const info = await image
    .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: "inside", withoutEnlargement: true })
    .toColorspace("srgb")
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true, progressive: true })
    .toFile(outFile);

  const originalBytes = (await stat(file)).size;
  return {
    original: path.relative(inputDir, file),
    output: relativeOut.split(path.sep).join("/"),
    outFile,
    origWidth,
    origHeight,
    width: info.width,
    height: info.height,
    originalBytes,
    outputBytes: info.size,
    lowRes: Math.max(origWidth, origHeight) < LOW_RES_EDGE,
  };
}

async function buildContactSheet(results) {
  const rows = Math.ceil(results.length / SHEET_COLUMNS);
  const cellHeight = TILE + LABEL_HEIGHT;
  const width = GAP + SHEET_COLUMNS * (TILE + GAP);
  const height = GAP + rows * (cellHeight + GAP);

  const layers = [];
  for (const [index, result] of results.entries()) {
    const left = GAP + (index % SHEET_COLUMNS) * (TILE + GAP);
    const top = GAP + Math.floor(index / SHEET_COLUMNS) * (cellHeight + GAP);
    const thumb = await sharp(result.outFile)
      .resize({ width: TILE, height: TILE, fit: "contain", background: SHEET_BACKGROUND })
      .toBuffer();
    const flag = result.lowRes ? " · LOW RES" : "";
    const label = Buffer.from(
      `<svg width="${TILE}" height="${LABEL_HEIGHT}" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="17" font-family="sans-serif" font-size="14" fill="#ece8e1">${escapeXml(result.output)}</text>
        <text x="0" y="36" font-family="sans-serif" font-size="13" fill="${result.lowRes ? "#ff2a36" : "#a39e96"}">${result.origWidth}×${result.origHeight}${flag}</text>
      </svg>`,
    );
    layers.push({ input: thumb, left, top }, { input: label, left, top: top + TILE + 4 });
  }

  const sheetFile = path.join(outputDir, "contact-sheet.jpg");
  await sharp({ create: { width, height, channels: 3, background: SHEET_BACKGROUND } })
    .composite(layers)
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(sheetFile);
  return sheetFile;
}

async function writeReport(results, failures) {
  const lines = [
    "# Processed photos",
    "",
    `Source: ${inputDir}`,
    `Max long edge: ${MAX_EDGE} px · JPEG quality ${JPEG_QUALITY} · metadata stripped`,
    "",
    "| Output | Original | Original size | Output size | Weight |",
    "| --- | --- | --- | --- | --- |",
    ...results.map(
      (r) =>
        `| ${r.output}${r.lowRes ? " ⚠️ low res" : ""} | ${r.original} | ${r.origWidth}×${r.origHeight} | ${r.width}×${r.height} | ${formatKb(r.originalBytes)} → ${formatKb(r.outputBytes)} |`,
    ),
  ];
  if (failures.length > 0) {
    lines.push("", "## Failed", "", ...failures.map((f) => `- ${f.original}: ${f.error}`));
  }
  const reportFile = path.join(outputDir, "report.md");
  await writeFile(reportFile, `${lines.join("\n")}\n`);
  return reportFile;
}

async function main() {
  const files = await findImages(inputDir);
  if (files.length === 0) {
    console.error(`No images found in ${inputDir}`);
    process.exit(1);
  }

  await rm(outputDir, { recursive: true, force: true });
  await mkdir(outputDir, { recursive: true });

  const usedNames = new Set();
  const results = [];
  const failures = [];
  // Sequential on purpose: 20 MB originals decoded in parallel can exhaust memory.
  for (const file of files) {
    const original = path.relative(inputDir, file);
    try {
      const result = await processImage(file, usedNames);
      results.push(result);
      console.log(`✓ ${original} → ${result.output} (${formatKb(result.outputBytes)})${result.lowRes ? "  ⚠️ low res" : ""}`);
    } catch (error) {
      failures.push({ original, error: error instanceof Error ? error.message : String(error) });
      console.error(`✗ ${original}: ${failures.at(-1).error}`);
    }
  }

  if (results.length > 0) await buildContactSheet(results);
  const reportFile = await writeReport(results, failures);

  const before = results.reduce((sum, r) => sum + r.originalBytes, 0);
  const after = results.reduce((sum, r) => sum + r.outputBytes, 0);
  console.log(
    `\n${results.length} processed, ${failures.length} failed, ${results.filter((r) => r.lowRes).length} low res.`,
  );
  console.log(`Total weight: ${formatKb(before)} → ${formatKb(after)}`);
  console.log(`Output: ${outputDir}\nReport: ${reportFile}`);
  if (failures.length > 0) process.exit(1);
}

await main();