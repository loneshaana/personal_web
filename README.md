# anwarulhaq.dev

Personal portfolio for **Anwar ul Haq** — Senior Software Engineer at Microsoft.

Built with Next.js (App Router), TypeScript, and Tailwind CSS. Statically
rendered, zero runtime data fetching, deploys anywhere that runs Next.

---

## Editing content

**You should almost never need to touch a component.** All copy lives in
`src/content/`, typed against `src/content/types.ts` so TypeScript catches a
mistake before the build does.

| File | What it controls |
| --- | --- |
| `src/content/site.ts` | Name, role, tagline, About paragraphs, social links, résumé path, nav items |
| `src/content/experience.ts` | Work history (newest first) |
| `src/content/projects.ts` | Featured projects + the "More things I've built" archive |
| `src/content/skills.ts` | Skill groups, awards/certifications, education |

### Add a job

Prepend an object to the array in `src/content/experience.ts`:

```ts
{
  company: "New Co",
  title: "Staff Engineer",
  start: "Jan 2027",
  end: "Present",
  href: "https://newco.com",        // optional — renders an external link
  highlights: ["Did the thing.", "Did the other thing."],
  stack: ["Go", "Kubernetes"],
}
```

### Add a project

Add an object to `src/content/projects.ts`:

```ts
{
  title: "Thing I Built",
  org: "Microsoft",                  // optional
  period: "2026",
  description: "One or two sentences on the problem and the approach.",
  impact: "The measurable outcome.", // optional — renders in the accent colour
  stack: ["C#", "Azure"],
  links: [{ label: "GitHub", href: "https://..." }],   // optional
  featured: true,                    // true = large card, false/omit = archive list
}
```

Featured projects render as full cards at the top; everything else drops into
the compact archive list. Reordering the array reorders the page.

### Add a nav section

1. Add `{ id: "writing", label: "Writing" }` to `navItems` in `site.ts`.
2. Create the section component and render it in `src/app/page.tsx` inside a
   matching `<Section id="writing" title="Writing">`.

The sidebar scroll-spy picks it up automatically — it observes whatever ids are
listed in `navItems`.

### Replace the résumé

Drop the new PDF at `public/AnwarUlHaq-Resume.pdf` (keep the filename), or point
`site.resumeHref` somewhere else.

### Change the accent colour

The accent is Tailwind's `teal-300`. Find-and-replace `teal-300` / `teal-400`
across `src/components/`, and update the RGB in `src/components/Spotlight.tsx`.

---

## Before you deploy

Update `site.siteUrl` in `src/content/site.ts` to the real domain. It drives
canonical URLs, Open Graph tags, `robots.txt`, and `sitemap.xml`.

---

## Commands

```bash
npm run dev     # dev server at http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Deploy

Push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new).
No environment variables, no configuration — every route is static.

---

## Architecture notes

- `src/app/page.tsx` — composes the sections; the only layout file.
- `src/app/layout.tsx` — fonts (Inter + JetBrains Mono) and SEO metadata.
- `src/components/Sidebar.tsx` — client component; an `IntersectionObserver`
  scroll-spy drives the active nav state.
- `src/components/Spotlight.tsx` — client component; cursor glow, automatically
  disabled on touch devices and under `prefers-reduced-motion`.
- `src/components/StructuredData.tsx` — JSON-LD `Person` schema generated from
  the content files, so it stays in sync for free.

Accessibility: skip link, semantic landmarks, visible focus rings,
`aria-current` on the active nav item, and all motion gated behind
`prefers-reduced-motion`.

Design inspired by [brittanychiang.com](https://brittanychiang.com).
