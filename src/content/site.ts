import type { SiteConfig } from "./types";

export const site: SiteConfig = {
  name: "Anwar ul Haq",
  role: "Senior Software Engineer",
  company: "Microsoft",
  tagline:
    "I build cloud-native, distributed backend systems on Azure — platform engineering, orchestration services, and enterprise infrastructure at scale.",
  location: "India",
  email: "anwarulhaq2017@outlook.com",
  resumeHref: "/AnwarUlHaq-Resume.pdf",
  siteUrl: "https://anwarulhaq.dev",

  about: [
    "I'm a software engineer with 8 years of experience designing and running backend platforms that other engineers depend on. Most of my work lives in the unglamorous, high-stakes layer: orchestration services, provisioning pipelines, signing infrastructure, and the automation that keeps them safe to change.",
    "Today I'm a Senior Software Engineer 2 at Microsoft, where I led the migration of Windows driver signing workflows onto a centralized Azure platform that processes submissions from OEMs and IHVs including Intel, AMD, NVIDIA, Dell, HP, and Qualcomm. Much of that work was about earning confidence — shadow validation, regression detection, and end-to-end coverage so a mission-critical system could change without fear.",
    "Before Microsoft I built host provisioning and lifecycle orchestration at Goldman Sachs, and a real-time competitive intelligence platform at Traveloka. Lately I've been building AI systems — RAG pipelines and agents with Semantic Kernel — that take real operational toil off engineers' plates.",
    "Outside of shipping, I mentor engineers, run design reviews, and occasionally win a hackathon.",
  ],

  socials: [
    { label: "GitHub", href: "https://github.com/loneshaana", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/anwar-ul-haq",
      icon: "linkedin",
    },
    {
      label: "Email",
      href: "mailto:anwarulhaq2017@outlook.com",
      icon: "mail",
    },
  ],
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
] as const;
