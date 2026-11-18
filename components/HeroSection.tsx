import { HERO_ID } from "@/content/navigation";
import { site } from "@/content/site";
import { MediaImage } from "./MediaImage";

/** "Nícola Iris" + "Vilander-Gajardo": the surname never breaks at its hyphen. */
const nameParts = site.fullName.split(" ");
const SURNAME = nameParts.pop() ?? "";
const GIVEN_NAMES = nameParts.join(" ");

/**
 * Desktop: the hero fills the first screen (minus the page's 48px top padding and the same
 * space below), and the photo takes whatever height the name and roles leave, so both are
 * visible without scrolling. min-h keeps the photo usable on very short windows.
 * Tablet: a 4:3 photo instead of 4:5, so the name is still in the first screen.
 * Mobile: a 4:5 photo; the name scales with the screen (clamp) so "Vilander-Gajardo"
 * fits on one line down to a 320px screen.
 */
export function HeroSection() {
  return (
    <section
      id={HERO_ID}
      aria-label="Introduction"
      className="flex scroll-mt-6 flex-col gap-5 lg:h-[calc(100svh-6rem)] lg:min-h-[36rem] lg:scroll-mt-12 lg:gap-8"
    >
      <MediaImage
        image={site.heroImage}
        placeholderLabel="hero portrait"
        className="aspect-4/5 md:aspect-4/3 lg:aspect-auto lg:min-h-0 lg:flex-1"
        figureClassName="lg:min-h-0 lg:flex-1"
        sizes="(min-width: 1024px) calc(100vw - 344px), calc(100vw - 40px)"
        eager
      />

      <div className="flex flex-col gap-3 lg:gap-4">
        <h1 className="font-serif text-[clamp(2.25rem,11.2vw,2.75rem)] leading-[1.05] font-normal text-balance italic lg:text-[64px] min-[1440px]:text-[80px]">
          {GIVEN_NAMES} <span className="whitespace-nowrap">{SURNAME}</span>
        </h1>
        <p className="text-[15px] text-muted lg:text-lg">
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