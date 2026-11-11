import { site } from "@/content/site";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="flex scroll-mt-6 flex-col gap-8 border-t border-line pt-12 lg:scroll-mt-12 lg:gap-10"
    >
      <h2 className="font-serif text-[40px] leading-tight font-normal italic lg:text-[56px]">
        Contact
      </h2>

      <ul className="flex flex-col gap-2">
        <li>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex min-h-11 items-center font-serif text-[22px] leading-tight [overflow-wrap:anywhere] text-accent italic decoration-1 underline-offset-[6px] hover:underline lg:text-4xl"
          >
            {site.email}
          </a>
        </li>
        <li>
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 hover:text-accent motion-safe:transition-colors lg:text-xl"
          >
            LinkedIn
            <span aria-hidden="true">↗</span>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </li>
      </ul>
    </section>
  );
}