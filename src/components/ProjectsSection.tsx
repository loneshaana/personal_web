import { projects } from "@/content";
import { ArrowUpRightIcon } from "./icons";
import { Section } from "./Section";
import { TagList } from "./Tag";

export function ProjectsSection() {
  const featured = projects.filter((project) => project.featured);
  const archive = projects.filter((project) => !project.featured);

  return (
    <Section id="projects" title="Projects">
      <ol className="group/list">
        {featured.map((project) => (
          <li key={project.title} className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

              <header className="z-10 mb-2 mt-1 text-xs font-semibold tracking-wide text-slate-500 uppercase sm:col-span-2">
                {project.period}
              </header>

              <div className="z-10 sm:col-span-6">
                <h3 className="text-base font-medium leading-snug text-slate-200">
                  {project.title}
                  {project.org ? (
                    <span className="block text-sm font-normal text-slate-500">
                      {project.org}
                    </span>
                  ) : null}
                </h3>

                <p className="mt-2 text-sm leading-normal text-slate-400">
                  {project.description}
                </p>

                {project.impact ? (
                  <p className="mt-2 text-sm leading-normal font-medium text-teal-300/90">
                    {project.impact}
                  </p>
                ) : null}

                {project.links?.length ? (
                  <ul className="mt-3 flex flex-wrap gap-4">
                    {project.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="focus-ring group/link inline-flex items-center rounded-sm text-sm font-medium text-slate-300 hover:text-teal-300"
                        >
                          {link.label}
                          <ArrowUpRightIcon className="ml-1 h-3.5 w-3.5 shrink-0 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 motion-reduce:transition-none" />
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}

                <TagList items={project.stack} />
              </div>
            </div>
          </li>
        ))}
      </ol>

      {archive.length ? (
        <div className="mt-4">
          <h3 className="mb-4 text-xs font-bold tracking-widest text-slate-400 uppercase">
            More things I&apos;ve built
          </h3>
          <ul className="divide-y divide-slate-800 border-t border-slate-800">
            {archive.map((project) => (
              <li
                key={project.title}
                className="grid gap-1 py-4 sm:grid-cols-8 sm:gap-4"
              >
                <div className="text-xs font-semibold tracking-wide text-slate-500 uppercase sm:col-span-2 sm:pt-0.5">
                  {project.period}
                </div>
                <div className="sm:col-span-6">
                  <p className="text-sm font-medium text-slate-200">
                    {project.title}
                    {project.org ? (
                      <span className="font-normal text-slate-500">
                        {" "}
                        · {project.org}
                      </span>
                    ) : null}
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    {project.description}
                  </p>
                  <p className="mt-2 font-mono text-xs text-slate-500">
                    {project.stack.join(" · ")}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </Section>
  );
}
