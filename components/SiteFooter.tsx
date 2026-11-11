import { site } from "@/content/site";

/** Year of publication. Update it by hand if the site is republished in a new year. */
const COPYRIGHT_YEAR = 2026;

/** Credit agreed with Nícola: "Site by Gabriel Hono", linking to his portfolio. */
const SITE_CREDIT = {
  label: "Gabriel Hono",
  url: "https://www.gabrielhono.com",
};

export function SiteFooter() {
  return (
    <footer className="px-5 lg:pr-16 lg:pl-70">
      <div className="flex flex-col gap-2 border-t border-line py-10 text-[13px] text-muted lg:flex-row lg:justify-between lg:gap-4 lg:py-12">
        <p>
          © {COPYRIGHT_YEAR} {site.name}
        </p>
        <p>
          Site by{" "}
          <a
            href={SITE_CREDIT.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-1 underline-offset-4 hover:text-foreground motion-safe:transition-colors"
          >
            {SITE_CREDIT.label}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>
      </div>
    </footer>
  );
}