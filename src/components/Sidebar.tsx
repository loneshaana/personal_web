"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems, site } from "@/content";
import { socialIcons } from "./icons";

function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string>(ids[0]);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export function Sidebar() {
  const ids = navItems.map((item) => item.id);
  const active = useActiveSection(ids);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
          <Link href="/" className="focus-ring rounded-sm hover:text-teal-300">
            {site.name}
          </Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          {site.role} at {site.company}
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate-400">
          {site.tagline}
        </p>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    className="group focus-ring flex items-center py-3"
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span
                      className={`mr-4 h-px transition-all duration-200 motion-reduce:transition-none ${
                        isActive
                          ? "w-16 bg-slate-200"
                          : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
                      }`}
                    />
                    <span
                      className={`text-xs font-bold tracking-widest uppercase transition-colors duration-200 motion-reduce:transition-none ${
                        isActive
                          ? "text-slate-200"
                          : "text-slate-500 group-hover:text-slate-200"
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <ul
        className="mt-8 flex items-center gap-5 lg:mt-0"
        aria-label="Social media"
      >
        {site.socials.map((social) => {
          const Icon = socialIcons[social.icon];
          return (
            <li key={social.label}>
              <a
                href={social.href}
                target={social.icon === "mail" ? undefined : "_blank"}
                rel="noreferrer noopener"
                className="focus-ring block rounded-sm text-slate-400 transition-colors hover:text-teal-300"
              >
                <span className="sr-only">{social.label}</span>
                <Icon className="h-6 w-6" />
              </a>
            </li>
          );
        })}
        <li>
          <a
            href={site.resumeHref}
            target="_blank"
            rel="noreferrer noopener"
            className="focus-ring rounded-sm text-sm font-semibold text-slate-300 underline decoration-slate-600 decoration-1 underline-offset-4 transition-colors hover:text-teal-300 hover:decoration-teal-300"
          >
            Résumé
          </a>
        </li>
      </ul>
    </header>
  );
}
