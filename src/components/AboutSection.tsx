import { site } from "@/content";
import { Section } from "./Section";

export function AboutSection() {
  return (
    <Section id="about" title="About">
      <div className="space-y-4 text-slate-400">
        {site.about.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
