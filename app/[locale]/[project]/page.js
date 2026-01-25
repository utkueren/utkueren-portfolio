// app/[locale]/[project]/page.js
import { notFound } from "next/navigation";
import { locales, defaultLocale } from "@/app/i18n/config";
import { getDictionary } from "@/app/i18n/getDictionary";
import {
  getAllProjectIds,
  getProjectById,
} from "@/components/data/projects.helpers";

import ProjectHero from "@/components/sections/ProjectHero";

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

  const project = getProjectById(params.project);
  if (!project) return notFound();

  return <ProjectHero project={project} />;
}
