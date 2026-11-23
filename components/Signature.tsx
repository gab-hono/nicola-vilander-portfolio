import type { CSSProperties } from "react";

/**
 * Nícola's handwritten name (public/signature.svg, viewBox 567×220) drawn as a CSS mask,
 * like the menu squiggle: the file is downloaded once and cached, and the colour comes
 * from bg-current, so it follows the text colour of wherever it is placed.
 */
const SIGNATURE_MASK: CSSProperties = {
  aspectRatio: "567 / 220",
  maskImage: "url(/signature.svg)",
  maskSize: "contain",
  maskRepeat: "no-repeat",
  maskPosition: "left center",
  WebkitMaskImage: "url(/signature.svg)",
  WebkitMaskSize: "contain",
  WebkitMaskRepeat: "no-repeat",
  WebkitMaskPosition: "left center",
};

type SignatureProps = {
  /** Text read by screen readers and search engines in place of the drawing. */
  label: string;
  /** Width utilities; the height follows from the drawing's proportions. */
  className: string;
};

export function Signature({ label, className }: SignatureProps) {
  return (
    <>
      <span className="sr-only">{label}</span>
      <span aria-hidden="true" style={SIGNATURE_MASK} className={`block bg-current ${className}`} />
    </>
  );
}
