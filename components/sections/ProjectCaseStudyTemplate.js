// components/sections/ProjectCaseStudyTemplate.jsx
import React from "react";
import Image from "next/image";

export default function ProjectCaseStudyTemplate({
  locale,
  title,
  subtitle,
  logoSrc,
  hero,
  meta,
  blocks,
}) {
  return (
    <main className="mx-auto max-w-[90rem] px-6 sm:px-12 lg:px-86 py-24">
      {/* HERO */}
      <header className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">
        <div className="max-w-3xl">
          <div className="text-xs tracking-[0.35em] text-white/50 uppercase">
            {subtitle}
          </div>

          <h1 className="mt-4 text-3xl sm:text-5xl font-medium tracking-[0.08em] text-white/95">
            {title}
          </h1>

          {/* küçük logo göstermek istersen */}
          {!!logoSrc && (
            <div className="mt-8 relative h-14 w-44 opacity-90">
              <Image
                src={logoSrc}
                alt={title}
                fill
                className="object-contain"
              />
            </div>
          )}
        </div>

        {/* META (sağ kolon) */}
        <aside className="rounded-2xl border border-white/10 bg-white/5 p-6 h-fit">
          <div className="text-xs tracking-[0.35em] text-white/60 uppercase">
            {locale === "tr" ? "Proje Bilgisi" : "Project Info"}
          </div>

          <div className="mt-6 space-y-5 text-sm text-white/75">
            {meta?.year && (
              <div>
                <div className="text-[11px] tracking-[0.35em] uppercase text-white/45">
                  {locale === "tr" ? "Yıl" : "Year"}
                </div>
                <div className="mt-1">{meta.year}</div>
              </div>
            )}

            {meta?.role && (
              <div>
                <div className="text-[11px] tracking-[0.35em] uppercase text-white/45">
                  {locale === "tr" ? "Rol" : "Role"}
                </div>
                <div className="mt-1">{meta.role}</div>
              </div>
            )}

            {meta?.client && (
              <div>
                <div className="text-[11px] tracking-[0.35em] uppercase text-white/45">
                  {locale === "tr" ? "Müşteri" : "Client"}
                </div>
                <div className="mt-1">{meta.client}</div>
              </div>
            )}

            {!!meta?.tools?.length && (
              <div>
                <div className="text-[11px] tracking-[0.35em] uppercase text-white/45">
                  {locale === "tr" ? "Araçlar" : "Tools"}
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {meta.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-[0.2em] uppercase text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>
      </header>

      {/* COVER */}
      {!!hero?.cover && (
        <section className="mt-14">
          <div className="relative aspect-[16/7] overflow-hidden rounded-2xl bg-white/5">
            <Image
              src={hero.cover}
              alt={hero.coverAlt || title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 92vw, 80vw"
              priority
            />
          </div>
        </section>
      )}

      {/* CONTENT FLOW (blocks) */}
      <section className="mt-16 max-w-3xl">
        <div className="space-y-10">
          {(blocks || []).map((b, idx) => {
            if (b.type === "heading") {
              return (
                <h2
                  key={idx}
                  className="text-sm tracking-[0.35em] uppercase text-white/85"
                >
                  {b.value}
                </h2>
              );
            }

            if (b.type === "text") {
              return (
                <p key={idx} className="text-white/70 leading-relaxed">
                  {b.value}
                </p>
              );
            }

            if (b.type === "image") {
              return (
                <figure key={idx} className="space-y-3">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-white/5">
                    <Image
                      src={b.src}
                      alt={b.alt || title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 92vw, 60vw"
                    />
                  </div>
                  {!!b.caption && (
                    <figcaption className="text-xs text-white/45 tracking-[0.08em]">
                      {b.caption}
                    </figcaption>
                  )}
                </figure>
              );
            }

            if (b.type === "quote") {
              return (
                <blockquote
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80"
                >
                  <div className="text-lg leading-relaxed">{b.value}</div>
                  {!!b.by && (
                    <div className="mt-4 text-xs tracking-[0.35em] uppercase text-white/50">
                      {b.by}
                    </div>
                  )}
                </blockquote>
              );
            }

            // bilinmeyen block tipi
            return null;
          })}
        </div>
      </section>
    </main>
  );
}
