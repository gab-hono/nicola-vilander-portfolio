/**
 * Renders a content string, setting the parts wrapped in _underscores_ in italics
 * (work titles). Kept deliberately tiny: no other markup is supported.
 */
export function RichText({ text }: { text: string }) {
  // split with a capture group alternates plain and italic parts: [plain, italic, plain, …]
  const parts = text.split(/_([^_]+)_/);

  return parts.map((part, index) =>
    index % 2 === 1 ? <em key={index}>{part}</em> : part,
  );
}