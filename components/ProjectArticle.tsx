import type { Project } from "@/content/types";
import { MediaImage } from "./MediaImage";
import { VideoEmbed } from "./VideoEmbed";

const FULL_COLUMN_SIZES =
  "(min-width: 1024px) calc(100vw - 344px), calc(100vw - 40px)";

/** Gallery: 2 columns inside half of the desktop content column. */
const GALLERY_SIZES =
  "(min-width: 1024px) calc((100vw - 344px - 64px - 16px) / 4), calc((100vw - 40px - 12px) / 2)";

export function ProjectArticle({ project }: { project: Project }) {
  const { slug, title, years, role, description, leadImage, gallery, videos, credits } =
    project;

  const hasMedia = gallery.length > 0 || videos.length > 0;
  const titleId = `${slug}-title`;

  const creditsLine = credits && (
    <p className="text-[13px] text-muted">{credits}</p>
  );

  return (
    <article
      id={slug}
      aria-labelledby={titleId}
      className="flex scroll-mt-6 flex-col gap-6 border-t border-line pt-10 lg:scroll-mt-12 lg:gap-8 lg:pt-12"
    >
      <header className="flex flex-col gap-2 lg:flex-row lg:flex-wrap lg:items-baseline lg:justify-between lg:gap-4">
        <h3
          id={titleId}
          className="font-serif text-[30px] leading-[1.15] font-normal italic lg:text-[44px] lg:leading-[1.1]"
        >
          {title}
        </h3>
        <p className="text-[13px] tracking-[0.06em] text-muted lg:text-[15px]">
          {years}
          {role && ` · ${role}`}
        </p>
      </header>

      <MediaImage
        image={leadImage}
        placeholderLabel={`lead image, ${title}`}
        className="aspect-4/3 lg:aspect-video"
        sizes={FULL_COLUMN_SIZES}
      />

      {hasMedia ? (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start lg:gap-16">
          <p>{description}</p>
          <div className="flex flex-col gap-4">
            {gallery.length > 0 && (
              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                {gallery.map((image) => (
                  <MediaImage
                    key={image.src.src}
                    image={image}
                    placeholderLabel={image.alt}
                    className="aspect-4/3"
                    sizes={GALLERY_SIZES}
                  />
                ))}
              </div>
            )}
            {videos.map((video) => (
              <VideoEmbed key={`${video.provider}-${video.id}`} video={video} />
            ))}
            {creditsLine}
          </div>
        </div>
      ) : (
        <div className="flex max-w-prose flex-col gap-4">
          <p>{description}</p>
          {creditsLine}
        </div>
      )}
    </article>
  );
}