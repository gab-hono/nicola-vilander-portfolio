import { about } from "@/content/about";
import type { AboutBlock } from "@/content/types";
import { MediaImage } from "./MediaImage";

/** Half of the desktop content column (content width minus the 64px grid gap). */
const HALF_COLUMN_SIZES =
  "(min-width: 1024px) calc((100vw - 344px - 64px) / 2), calc(100vw - 40px)";

const blockTitle = "font-serif text-[26px] leading-tight font-normal italic lg:text-[32px]";

function TextBlock({ block }: { block: AboutBlock }) {
  return (
    <div className="flex flex-col gap-5">
      <h3 className={blockTitle}>{block.title}</h3>
      <p>{block.body}</p>
      {block.credits && <p className="text-[13px] text-muted">{block.credits}</p>}
    </div>
  );
}

/*
 * Every grid declares grid-cols-1 on mobile: an implicit grid track is "auto" and can grow
 * past the screen with its widest item; repeat(1, minmax(0, 1fr)) caps it to the container.
 */
export function AboutSection() {
  const { bio, bioImage, linesOfInquiry, practice, research, press } = about;

  return (
    <section
      id="about"
      className="flex scroll-mt-6 flex-col gap-12 lg:scroll-mt-12 lg:gap-16"
    >
      <h2 className="font-serif text-[40px] leading-tight font-normal italic lg:text-[56px]">
        About
      </h2>

      {/* Bio + image */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start lg:gap-16">
        <p className="text-lg leading-[1.55] lg:text-[21px]">{bio}</p>
        <MediaImage
          image={bioImage}
          placeholderLabel="still from Action is Overtaken"
          className="aspect-4/3"
          sizes={HALF_COLUMN_SIZES}
        />
      </div>

      {/* Lines of inquiry */}
      <div className="flex flex-col gap-4">
        <h3 className="text-[13px] font-medium tracking-[0.14em] text-muted uppercase">
          Lines of inquiry
        </h3>
        <ul className="flex flex-wrap font-serif text-[21px] leading-[1.45] italic lg:text-[28px]">
          {linesOfInquiry.map((line, index) => (
            <li key={line}>
              {line}
              {index < linesOfInquiry.length - 1 && (
                <span aria-hidden="true" className="px-2">
                  ·
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Operatic & Vocal Practice: image left, text right */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start lg:gap-16">
        <MediaImage
          image={practice.image}
          placeholderLabel="Nícola singing (Pam Berry)"
          className="aspect-4/5"
          sizes={HALF_COLUMN_SIZES}
        />
        <TextBlock block={practice} />
      </div>

      {/* Research & Networks + Press */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div className="flex flex-col gap-8">
          {research.image && (
            <MediaImage
              image={research.image}
              placeholderLabel="research"
              className="aspect-4/3"
              sizes={HALF_COLUMN_SIZES}
            />
          )}
          <TextBlock block={research} />
        </div>

        {press.length > 0 && (
          <div className="flex flex-col gap-5">
            <h3 className={blockTitle}>Press</h3>
            <ul className="flex flex-col border-t border-line">
              {press.map((item) => (
                <li key={item.url} className="border-b border-line">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between gap-4 py-4 hover:text-accent motion-safe:transition-colors"
                  >
                    <span>{item.title}</span>
                    <span className="shrink-0 text-muted">
                      {item.outlet}
                      {item.date ? `, ${item.date}` : ""}{" "}
                      <span aria-hidden="true">↗</span>
                    </span>
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}