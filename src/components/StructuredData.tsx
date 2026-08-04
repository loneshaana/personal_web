import { experience, site, skills } from "@/content";

/** JSON-LD Person schema so search engines and AI crawlers parse the profile correctly. */
export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    email: `mailto:${site.email}`,
    url: site.siteUrl,
    description: site.tagline,
    address: { "@type": "PostalAddress", addressCountry: site.location },
    sameAs: site.socials
      .filter((social) => social.icon !== "mail")
      .map((social) => social.href),
    worksFor: { "@type": "Organization", name: site.company },
    alumniOf: experience
      .slice(1)
      .map((role) => ({ "@type": "Organization", name: role.company })),
    knowsAbout: skills.flatMap((group) => group.items),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
