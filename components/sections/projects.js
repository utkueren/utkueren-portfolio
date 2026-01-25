"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import projects from "../data/projectsData";
import { useI18n } from "@/app/i18n/i18nProvider";

export default function Projects() {
  const { t, locale } = useI18n();
  const l = locale || "en";

  return (
    <section id="projects" data-reveal className="py-16 sm:py-24">
      <div className="mx-auto max-w-[90rem] px-4">
        <h2 className="mb-16 text-center text-medium font-medium tracking-[0.35em] text-white/95">
          {t("projects.title", "PROJECTS")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-12">
          {projects.map((p) => {
            const subtitle = p.i18nKey
              ? t(`${p.i18nKey}.subtitle`, p.subtitle)
              : p.subtitle;

            const href = `/${l}/${p.id}`;

            return (
              <Link
                key={p.id}
                href={href}
                aria-label={`${p.title} project detail`}
                className="block w-[90%] max-w-xs mx-auto sm:w-full"
              >
                <article
                  className="group relative rounded-2xl overflow-hidden bg-[#1A1A1A]
                             shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                >
                  {/* Görsel */}
                  <div className="relative aspect-[24/12] w-full overflow-hidden cursor-pointer">
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMjIyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPTEgaGVpZ2h0PTE+PC9zdmc+"
                    />

                    {/* Hover overlay CTA – AKTİF */}
                    <div
                      className="absolute inset-0 flex items-center justify-center
                                 bg-black/45 backdrop-blur-[2px]
                                 opacity-0 group-hover:opacity-100
                                 transition-opacity duration-300"
                    >
                      <span
                        className="text-[11px] tracking-[0.45em] text-white
                                   border border-white/30 px-6 py-3 rounded-xl
                                   bg-white/5 cursor-pointer select-none"
                      >
                        {t("projects.viewCase", "VIEW CASE")}
                      </span>
                    </div>
                  </div>

                  {/* Alt panel */}
                  <div className="relative px-4 py-2 cursor-pointer">
                    <h3 className="text-center text-xsmall tracking-[0.35em]">
                      {p.title}
                    </h3>

                    <p className="mt-2 text-center font-light text-xxsmall tracking-[0.25em] text-white/70">
                      {subtitle}
                    </p>
                  </div>

                  {/* Hover glow */}
                  <div className="pointer-events-none absolute inset-0" />
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0
                               group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      boxShadow: "inset 0 0 120px rgba(255,255,255,0.04)",
                    }}
                  />
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
