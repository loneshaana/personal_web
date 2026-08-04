import { experience, site } from "@/content";
import { ArrowUpRightIcon } from "./icons";
import { Section } from "./Section";
import { TagList } from "./Tag";

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <ol className="group/list">
        {experience.map((role) => (
          <li key={`${role.company}-${role.start}`} className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

              <header
                className="z-10 mb-2 mt-1 text-xs font-semibold tracking-wide text-slate-500 uppercase sm:col-span-2"
                aria-label={`${role.start} to ${role.end}`}
              >
                {role.start} — {role.end}
              </header>

              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  {role.href ? (
                    <a
                      href={role.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="focus-ring inline-flex items-baseline rounded-sm text-base font-medium leading-tight text-slate-200 hover:text-teal-300 group/link"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden md:-inset-x-6 md:-inset-y-4 lg:block" />
                      <span>
                        {role.title} · {role.company}
                        <ArrowUpRightIcon className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none" />
                      </span>
                    </a>
                  ) : (
                    <span className="text-base">
                      {role.title} · {role.company}
                    </span>
                  )}
                </h3>

                <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-normal text-slate-400 marker:text-slate-600">
                  {role.highlights.map((highlight) => (
                    <li key={highlight.slice(0, 40)}>{highlight}</li>
                  ))}
                </ul>

                <TagList items={role.stack} />
              </div>
            </div>
          </li>
        ))}
      </ol>

      <a
        href={site.resumeHref}
        target="_blank"
        rel="noreferrer noopener"
        className="focus-ring group/link inline-flex items-baseline rounded-sm text-base font-semibold text-slate-200 hover:text-teal-300"
      >
        View Full Résumé
        <ArrowUpRightIcon className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none" />
      </a>
    </Section>
  );
}
