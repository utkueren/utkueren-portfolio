// components/sections/hero.js
import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden px-6 sm:px-12 lg:px-86">
      {/* Watermark UI/ */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="select-none leading-[0.85] opacity-[0.06]">
          <span className="text-[clamp(10rem,28vw,34rem)] font-medium">UI</span>
          <span className="text-[clamp(10rem,28vw,34rem)] font-medium">/</span>
          <span className="text-[clamp(10rem,28vw,34rem)] font-medium">UX</span>
        </div>
      </div>

      {/* Center content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center py-10 sm:py-12">
        <p className="text-white/65 font-regular tracking-10p text-xsmall sm:text-small">
          JR. UI DEVELOPER & DESIGNER
        </p>

        <h1 className="mt-6 tracking-7p leading-[0.95] text-[clamp(2.2rem,5.8vw,5.2rem)]">
          UI DESIGNER & DEVELOPER
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-white/75 font-light leading-relaxed text-[clamp(1rem,1.6vw,1.25rem)]">
          Junior software engineer focused on clean UI implementation,
          responsiveness, and detail-driven interfaces.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center rounded-xl bg-white text-black px-7 py-4 tracking-[0.25em] text-xs font-medium
                       transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            VIEW PROJECTS
          </a>

          <Link
            href="mailto:utkuerenbulut0@gmail.com"
            className="inline-flex items-center rounded-xl border border-white/20 px-7 py-4 tracking-[0.25em] text-xs text-white/90
                       transition hover:border-white/40 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            MAIL ME
          </Link>
        </div>
      </div>
    </section>
  );
}
