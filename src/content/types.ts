export type Social = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
};

export type SiteConfig = {
  name: string;
  role: string;
  company: string;
  tagline: string;
  location: string;
  email: string;
  resumeHref: string;
  siteUrl: string;
  about: string[];
  socials: Social[];
};

export type Experience = {
  company: string;
  title: string;
  start: string;
  end: string;
  href?: string;
  highlights: string[];
  stack: string[];
};

export type Project = {
  title: string;
  org?: string;
  period?: string;
  description: string;
  impact?: string;
  stack: string[];
  links?: { label: string; href: string }[];
  featured?: boolean;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Award = {
  title: string;
  issuer: string;
  year?: string;
  description?: string;
};

export type Education = {
  degree: string;
  field: string;
  detail?: string;
};
