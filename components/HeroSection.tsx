import { HERO_ID } from "@/content/navigation";
import { site } from "@/content/site";
import { MediaImage } from "./MediaImage";

export function HeroSection() {
  return (
    <section
      id={HERO_ID}
      aria-label="Introduction"
      className="flex scroll-mt-6 flex-col gap-5 lg:scroll-mt-12 lg:gap-8"
    >
      <MediaImage
        image={site.heroImage}
        placeholderLabel="hero portrait"
        className="aspect-4/5 lg:aspect-video"
        sizes="(min-width: 1024px) calc(100vw - 344px), calc(100vw - 40px)"
        eager
      />

      <div className="flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:items-end lg:justify-between lg:gap-6">
        <h1 className="font-serif text-[44px] leading-[1.05] font-normal text-balance italic lg:text-[80px]">
          {site.fullName}
        </h1>
        <p className="text-[15px] text-muted lg:max-w-90 lg:text-right lg:text-base">
          {site.roles.map((role) => (
            <span key={role} className="block">
              {role}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}