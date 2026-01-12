import React from "react";
import Image from "next/image";
import projects from "../data/projectsData";

export default function Projects() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-[90rem] px-4">
        <h2 className="mb-16 text-center text-xmedium sm:text-medium font-medium tracking-[0.35em] text-white/95">
          PROJECTS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-12">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group relative rounded-2xl overflow-hidden bg-[#1A1A1A] 
                         shadow-[0_10px_30px_rgba(0,0,0,0.35)] 
                         w-[90%] max-w-xs mx-auto sm:w-full"
            >
              {/* Görsel */}
              <div className="relative aspect-[24/12] w-full">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMjIyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPTEgaGVpZ2h0PTE+PC9zdmc+"
                />
              </div>

              {/* Alt panel */}
              <div className="relative">
                <div className="px-4 py-2">
                  <h3 className="text-center text-xsmall tracking-[0.35em]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-center font-light text-xxsmall tracking-[0.25em] text-white/70">
                    {p.subtitle}
                  </p>
                </div>
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
          ))}
        </div>
      </div>
    </section>
  );
}
