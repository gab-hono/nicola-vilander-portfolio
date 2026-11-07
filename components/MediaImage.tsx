import Image from "next/image";
import type { ImageAsset } from "@/content/types";

type MediaImageProps = {
  image: ImageAsset | null;
  /** Shown in the placeholder while the photo is missing. */
  placeholderLabel: string;
  /** Sizing of the frame, e.g. "aspect-4/5 lg:aspect-video". */
  className: string;
  /** Rendered width hints for next/image. */
  sizes: string;
  /** Load immediately with high priority (hero / LCP image only). */
  eager?: boolean;
};

export function MediaImage({
  image,
  placeholderLabel,
  className,
  sizes,
  eager = false,
}: MediaImageProps) {
  if (!image) {
    return (
      <div
        className={`flex items-center justify-center border border-dashed border-muted/40 bg-surface p-6 text-center text-sm text-muted ${className}`}
      >
        Image: {placeholderLabel}
      </div>
    );
  }

  return (
    <figure className="flex flex-col gap-2">
      <div className={`relative overflow-hidden bg-surface ${className}`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          placeholder="blur"
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
          className="object-cover"
        />
      </div>
      {image.credit && (
        <figcaption className="text-[13px] text-muted">{image.credit}</figcaption>
      )}
    </figure>
  );
}