import { projects } from "@/content/projects";
import { ProjectArticle } from "./ProjectArticle";

export function WorksSection() {
  return (
    <section
      id="works"
      className="flex scroll-mt-6 flex-col gap-16 lg:scroll-mt-12 lg:gap-24"
    >
      <div className="flex flex-col gap-6 lg:gap-8">
        <h2 className="font-serif text-[40px] leading-tight font-normal italic lg:text-[56px]">
          Works
        </h2>

        <nav aria-label="Works index">
          <ol className="border-t border-line">
            {projects.map((project) => (
              <li key={project.slug} className="border-b border-line">
                <a
                  href={`#${project.slug}`}
                  className="flex min-h-11 items-baseline justify-between gap-4 py-3 hover:text-accent motion-safe:transition-colors lg:gap-6 lg:py-3.5"
                >
                  <span className="font-serif text-lg italic lg:text-2xl">
                    {project.title}
                  </span>
                  <span className="shrink-0 text-[13px] whitespace-nowrap text-muted lg:text-[15px]">
                    {project.years}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>

      <div className="flex flex-col gap-16 lg:gap-24">
        {projects.map((project) => (
          <ProjectArticle key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}