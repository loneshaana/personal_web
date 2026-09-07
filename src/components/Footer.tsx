import { site } from "@/content";

export function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>
        Want to talk?{" "}
        <a
          href={`mailto:${site.email}`}
          className="focus-ring rounded-sm font-medium text-slate-300 underline decoration-slate-600 underline-offset-4 transition-colors hover:text-teal-300 hover:decoration-teal-300"
        >
          {site.email}
        </a>
      </p>
      <p className="mt-4">
        Built with Next.js and Tailwind CSS, hosted on GitHub Pages. Design inspired
        by{" "}
        <a
          href="https://brittanychiang.com"
          target="_blank"
          rel="noreferrer noopener"
          className="focus-ring rounded-sm text-slate-400 underline decoration-slate-700 underline-offset-4 hover:text-teal-300"
        >
          Brittany Chiang
        </a>
        .
      </p>
      <p className="mt-2">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  );
}
