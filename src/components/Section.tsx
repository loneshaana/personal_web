import type { ReactNode } from "react";

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-label={title}
      className="scroll-mt-16 pb-16 md:pb-24 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-6 w-screen bg-slate-950/75 px-6 py-4 backdrop-blur-sm md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold tracking-widest text-slate-200 uppercase">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
