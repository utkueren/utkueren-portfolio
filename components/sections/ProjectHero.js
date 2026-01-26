"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

export default function ProjectHero({ project }) {
  const router = useRouter();
  const params = useParams();
  const locale = params?.locale || "en";

  const fold = project?.caseStudy?.fold || {};
  const media = fold.media || { type: "gallery", items: [] };

  const marqueeText = fold.marqueeText || `PROJECT → ${project.title}`;
  const title = fold.heroTitle || project.title;
  const desc = fold.description || "";

  const meta = fold.meta || {};
  const credits = Array.isArray(meta.credits) ? meta.credits : [];

  const [active, setActive] = useState(0);
  const galleryItems = useMemo(() => media.items || [], [media.items]);
  const activeItem = galleryItems[active];

  const close = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
      return;
    }
    router.push(`/${locale}#projects`);
  };

  // ESC ile kapatma
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  return (
    <section className="relative min-h-screen lg:h-[100svh] bg-black text-white">
      {/* Marquee + Back */}
      <div className="relative border-y border-white/10">
        {/* Back (marquee içine gömülü) */}
        {/* <button
          type="button"
          onClick={close}
          className="absolute left-6 top-1/2 z-10 -translate-y-1/2
                     flex items-center gap-3 text-xs tracking-[0.35em] uppercase
                     text-white/50 hover:text-white/90 transition"
          aria-label="Go back"
        >
          <span className="text-base leading-none">←</span>
          <span>BACK</span>
        </button> */}

        {/* Marquee */}
        <div className="overflow-hidden">
          <div className="flex w-[200%] whitespace-nowrap animate-ProjectsMarquee">
            <div className="w-1/2 py-4 pl-32 text-2xl sm:text-3xl font-semibold tracking-[0.14em]">
              <span className="opacity-95">{marqueeText}</span>&nbsp;&nbsp;
              <span className="opacity-95">{marqueeText}</span>&nbsp;&nbsp;
              <span className="opacity-95">{marqueeText}</span>&nbsp;&nbsp;
              <span className="opacity-95">{marqueeText}</span>&nbsp;&nbsp;
              <span className="opacity-95">{marqueeText}</span>&nbsp;&nbsp;
              <span className="opacity-95">{marqueeText}</span>&nbsp;&nbsp;
              <span className="opacity-95">{marqueeText}</span>&nbsp;&nbsp;
              <span className="opacity-95">{marqueeText}</span>&nbsp;&nbsp;
              <span className="opacity-95">{marqueeText}</span>&nbsp;&nbsp;
              <span className="opacity-95">{marqueeText}</span>&nbsp;&nbsp;
              <span className="opacity-95">{marqueeText}</span>&nbsp;&nbsp;
              <span className="opacity-95">{marqueeText}</span>&nbsp;&nbsp;
            </div>
          </div>
        </div>
      </div>

      {/* Content (fills remaining height) */}
      <div className="lg:h-[calc(100svh-72px)]">
        <div className="mx-auto max-w-[90rem] px-6 sm:px-12 lg:px-86 h-full py-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-8 lg:h-full">
            {/* LEFT: media */}
            <div className="relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden min-h-[260px] sm:min-h-[320px] lg:h-full">
              {media.type === "video" && media.videoSrc ? (
                <video
                  className="h-full w-full object-cover"
                  src={media.videoSrc}
                  poster={media.poster || undefined}
                  muted
                  playsInline
                  autoPlay
                  loop
                />
              ) : media.type === "image" && media.imageSrc ? (
                <Image
                  src={media.imageSrc}
                  alt={media.imageAlt || title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  priority
                />
              ) : media.type === "gallery" && galleryItems.length ? (
                <Image
                  src={activeItem.src}
                  alt={activeItem.alt || title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  priority
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center text-white/50 text-xs tracking-[0.35em] uppercase">
                  Media coming soon
                </div>
              )}

              {/* Gallery thumbs */}
              {media.type === "gallery" && galleryItems.length > 1 ? (
                <div className="absolute bottom-3 left-3 right-3 flex gap-2 overflow-x-auto">
                  {galleryItems.slice(0, 8).map((it, i) => (
                    <button
                      key={it.src}
                      type="button"
                      onClick={() => setActive(i)}
                      className={`relative h-10 w-14 flex-none overflow-hidden rounded-lg border transition
                        ${
                          i === active
                            ? "border-white/60"
                            : "border-white/15 opacity-80 hover:opacity-100"
                        }`}
                      aria-label={`Open image ${i + 1}`}
                    >
                      <Image
                        src={it.src}
                        alt={it.alt || title}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              ) : null}
            </div>

            {/* RIGHT: info + meta (no scroll, clamps) */}
            <div className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 lg:p-8 overflow-hidden">
              <div className="text-xs tracking-[0.35em] text-white/55 uppercase">
                {project.subtitle}
              </div>

              <h1 className="mt-3 text-xmedium sm:text-medium font-semibold tracking-[0.1em] leading-[0.95]">
                {title}
              </h1>

              {!!desc && (
                <p className=" mt-4 text-small font-light leading-relaxed text-white/75">
                  {desc}
                </p>
              )}

              <div className="mt-auto pt-6 grid grid-cols-[110px_1fr] gap-y-3 text-xs">
                <Label>YEAR:</Label>
                <Value>{meta.year || "—"}</Value>

                <Label>SERVICE:</Label>
                <Value>{meta.service || "—"}</Value>

                <Label>CLIENT:</Label>
                <Value>{meta.client || "—"}</Value>

                <Label>CREDITS:</Label>
                <Value>
                  {credits.length ? (
                    <div className="space-y-1">
                      {credits.slice(0, 4).map((c) => (
                        <div key={c} className="text-white/75">
                          {c}
                        </div>
                      ))}
                    </div>
                  ) : (
                    "—"
                  )}
                </Value>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Label({ children }) {
  return (
    <div className="text-white/55 tracking-[0.28em] uppercase">{children}</div>
  );
}
function Value({ children }) {
  return <div className="text-white/85">{children}</div>;
}
