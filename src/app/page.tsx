import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Sidebar } from "@/components/Sidebar";
import { SkillsSection } from "@/components/SkillsSection";
import { Spotlight } from "@/components/Spotlight";
import { StructuredData } from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Spotlight />

      <a
        href="#content"
        className="absolute left-0 top-0 z-50 -translate-y-full rounded-br bg-teal-300 px-4 py-2 text-sm font-bold text-slate-900 transition focus:translate-y-0"
      >
        Skip to content
      </a>

      <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Sidebar />

          <main id="content" className="pt-16 lg:w-[52%] lg:py-24">
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <SkillsSection />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}
