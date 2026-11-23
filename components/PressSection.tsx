import { press } from "@/content/press";

export function PressSection() {
  if (press.length === 0) return null;

  return (
    <section
      id="press"
      className="flex scroll-mt-6 flex-col gap-6 lg:scroll-mt-12 lg:gap-8"
    >
      <h2 className="font-serif text-[40px] leading-tight font-normal lg:text-[56px]">
        Press
      </h2>

      <ul className="flex flex-col border-t border-line">
        {press.map((item) => (
          <li key={item.url} className="border-b border-line">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-1 py-4 hover:text-accent motion-safe:transition-colors lg:flex-row lg:items-baseline lg:justify-between lg:gap-8"
            >
              <span>
                <span lang={item.lang}>{item.title}</span>
                {item.translation && (
                  <span className="text-muted"> ({item.translation})</span>
                )}
              </span>
              <span className="text-[13px] text-muted lg:max-w-[40%] lg:shrink-0 lg:text-right lg:text-[15px]">
                {item.outlet}
                {item.date ? `, ${item.date}` : ""}{" "}
                <span aria-hidden="true">↗</span>
              </span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}