import type { Video } from "@/content/types";

const EMBED_URL: Record<Video["provider"], (id: string) => string> = {
  youtube: (id) => `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}`,
  vimeo: (id) => `https://player.vimeo.com/video/${encodeURIComponent(id)}?dnt=1`,
};

export function VideoEmbed({ video }: { video: Video }) {
  return (
    <figure className="flex flex-col gap-2">
      <div className="relative aspect-video overflow-hidden bg-surface">
        <iframe
          src={EMBED_URL[video.provider](video.id)}
          title={video.title}
          loading="lazy"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
      <figcaption className="text-[13px] text-muted">{video.title}</figcaption>
    </figure>
  );
}