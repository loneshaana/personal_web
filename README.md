# anwarulhaq.dev

Personal portfolio for **Anwar ul Haq** — Senior Software Engineer at Microsoft.

Built with Next.js (App Router), TypeScript, and Tailwind CSS. Statically
exported, zero runtime data fetching, hosted on GitHub Pages without a Node.js server.

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
`site.resumeHref` somewhere else. Local public-file URLs must retain the
`${basePath}` prefix so they work under a GitHub Pages repository subpath.

### Change the accent colour

The accent is Tailwind's `teal-300`. Find-and-replace `teal-300` / `teal-400`
across `src/components/`, and update the RGB in `src/components/Spotlight.tsx`.

---

## Deployment URLs

The GitHub Pages workflow reads the site's URL from GitHub and supplies these
build-time variables automatically; no repository secrets are needed:

| Variable | Example for a project site | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://USERNAME.github.io/REPOSITORY` | Full canonical, Open Graph, JSON-LD, sitemap, and robots URL |
| `NEXT_PUBLIC_BASE_PATH` | `/REPOSITORY` | Prefix for scripts, styles, fonts, favicon, navigation, and the resume PDF |

User sites (`USERNAME.github.io`) and custom domains use an empty base path.
Locally, the defaults are `http://localhost:3000` and an empty base path.
If you have an old `.env.local`, remove any Vercel-era `NEXT_PUBLIC_SITE_URL`
override before local development, or update it for the new site.

---

## Commands

```bash
npm run dev     # dev server at http://localhost:3000
npm run build   # export the production site to out/
npm run lint    # eslint
```

The production output is static HTML, CSS, JavaScript, and public assets in
`out/`. Preview it with any static file server; `next start` is not supported
with static export. To reproduce a project-site build locally, set both URL
variables above before running `npm run build`, and serve `out/` at that same
base path.

## Deploy to GitHub Pages

1. Create or choose a GitHub repository and push this project to its default
   branch. Use a public repository on GitHub Free; private repositories need
   a plan that supports GitHub Pages.
2. In the repository, open **Settings > Pages > Build and deployment** and
   select **GitHub Actions** as the source.
3. Open **Actions > Deploy portfolio to GitHub Pages > Run workflow**, selecting
   the default branch. Later pushes to the default branch deploy automatically
   (whether it is named `main`, `master`, or something else).
4. Open the published URL shown by the `github-pages` deployment or Settings >
   Pages. A project repository normally publishes at
   `https://USERNAME.github.io/REPOSITORY/`; a repository named
   `USERNAME.github.io` publishes at `https://USERNAME.github.io/`.

The workflow in `.github/workflows/deploy-pages.yml` installs locked dependencies,
lints, exports the site, and publishes `out/` through GitHub's Pages deployment
actions. No `gh-pages` branch or committed build output is needed.

### Moving an existing custom domain from Vercel

First confirm the GitHub Pages site works at its default address. Then configure
the domain in **Settings > Pages > Custom domain**, update the domain's DNS using
[GitHub's custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site),
and rerun the workflow so URLs and asset paths match the custom domain. Enable
**Enforce HTTPS** once GitHub has provisioned its certificate.

Keep the existing Vercel deployment until the new site and DNS are working.
Then disconnect Vercel's automatic deployments or remove the old project if it
is no longer needed. This repository change does not change DNS or delete the
existing Vercel deployment.

### Static hosting limitations

GitHub Pages cannot run API routes, Server Actions, server-side rendering,
Next.js image optimization, or custom HTTP response headers. Images are
configured as unoptimized, and the former Next.js response-header configuration
has been removed because Pages does not apply it. The portfolio does not need
a runtime server; `robots.txt` and `sitemap.xml` are generated at build time.

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
