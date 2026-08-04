import { awards, education, skills } from "@/content";
import { Section } from "./Section";
import { Tag } from "./Tag";

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills">
      <dl className="space-y-6">
        {skills.map((group) => (
          <div key={group.category} className="grid gap-2 sm:grid-cols-8">
            <dt className="text-xs font-semibold tracking-wide text-slate-500 uppercase sm:col-span-2 sm:pt-1.5">
              {group.category}
            </dt>
            <dd className="sm:col-span-6">
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        <div>
          <h3 className="mb-3 text-xs font-bold tracking-widest text-slate-400 uppercase">
            Awards &amp; Certifications
          </h3>
          <ul className="space-y-3">
            {awards.map((award) => (
              <li key={award.title}>
                <p className="text-sm font-medium text-slate-200">
                  {award.title}
                </p>
                <p className="text-xs text-slate-500">
                  {award.issuer}
                  {award.year ? ` · ${award.year}` : ""}
                </p>
                {award.description ? (
                  <p className="mt-1 text-sm text-slate-400">
                    {award.description}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-xs font-bold tracking-widest text-slate-400 uppercase">
            Education
          </h3>
          <ul className="space-y-3">
            {education.map((entry) => (
              <li key={`${entry.degree}-${entry.field}`}>
                <p className="text-sm font-medium text-slate-200">
                  {entry.degree} · {entry.field}
                </p>
                {entry.detail ? (
                  <p className="text-xs text-slate-500">{entry.detail}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
