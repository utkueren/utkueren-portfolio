"use client";

import { useI18n } from "@/app/i18n/i18nProvider";

export default function ResumeButton() {
  const { locale } = useI18n();

  const resumeHref =
    locale === "tr" ? "/resume/cv-tr.pdf" : "/resume/cv-en.pdf";

  return (
    <a
      href={resumeHref}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 px-6 py-3 text-small tracking-[0.35em] font-extraLight hover:bg-white/10 transition"
    >
      {locale === "tr" ? "ÖZGEÇMİŞ" : "RESUME"}
    </a>
  );
}
