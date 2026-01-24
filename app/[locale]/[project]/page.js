// app/[locale]/[project]/page.js
import { notFound } from "next/navigation";

import { locales, defaultLocale } from "@/app/i18n/config";
import { getDictionary } from "@/app/i18n/getDictionary";
import {
  getAllProjectIds,
  getProjectById,
} from "@/components/data/projects.helpers";

import BackButton from "@/components/ui/backButton";

export function generateStaticParams() {
  const ids = getAllProjectIds();
  return locales.flatMap((locale) =>
    ids.map((project) => ({ locale, project })),
  );
}

export async function generateMetadata(props) {
  const params = await props.params;

  const locale = locales.includes(params.locale)
    ? params.locale
    : defaultLocale;
  const project = getProjectById(params.project);
  if (!project) return {};

  const dict = await getDictionary(locale);
  const projectsTitle = dict?.projects?.title || "Projects";

  return {
    title: `${project.title} | ${projectsTitle} | Utku Eren`,
    description: project.subtitle || "",
  };
}

export default async function ProjectDetailPage(props) {
  const params = await props.params;

  const locale = locales.includes(params.locale)
    ? params.locale
    : defaultLocale;
  const project = getProjectById(params.project);
  if (!project) return notFound();

  return (
    <main className="mx-auto max-w-[90rem] px-6 sm:px-12 lg:px-86 py-24">
      {/* Back */}
      <div className="mb-14">
        <BackButton locale={locale} />
      </div>

      {/* Skeleton header */}
      <header className="max-w-3xl">
        <div className="text-xs tracking-[0.35em] text-white/50 uppercase">
          {project.subtitle}
        </div>

        <h1 className="mt-4 text-3xl sm:text-5xl font-medium tracking-[0.08em] text-white/95">
          {project.title}
        </h1>

        <p className="mt-6 text-sm sm:text-base leading-relaxed text-white/70">
          {locale === "tr"
            ? "Bu sayfa yakında proje detaylarıyla güncellenecek."
            : "This page will be updated with the full case study soon."}
        </p>
      </header>

      {/* Skeleton content */}
      <section className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="text-xs tracking-[0.35em] text-white/60 uppercase">
          {locale === "tr" ? "İçerik" : "Content"}
        </div>

        <div className="mt-6 space-y-3 text-white/70">
          <div className="h-3 w-[70%] rounded bg-white/10" />
          <div className="h-3 w-[90%] rounded bg-white/10" />
          <div className="h-3 w-[60%] rounded bg-white/10" />
        </div>
      </section>
    </main>
  );
}
