"use client";

import Chip from "@/components/ui/Chip";
import LogoFrame from "./logoFrame";
import { useI18n } from "@/app/i18n/i18nProvider";

export default function TimelineItem({ item }) {
  const { t } = useI18n();

  const role = item.i18nKey ? t(`${item.i18nKey}.role`, item.role) : item.role;
  const employmentType = item.i18nKey
    ? t(`${item.i18nKey}.employmentType`, item.employmentType)
    : item.employmentType;
  const summary = item.i18nKey
    ? t(`${item.i18nKey}.summary`, item.summary)
    : item.summary;

  return (
    <div className="relative pl-0 sm:pl-16">
      <div className="flex items-start gap-4">
        {/* LOGO + halo */}
        <div className="relative z-10">
          <span
            className={`pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-br ${
              item.accent ?? "from-slate-600 to-slate-400"
            } opacity-30 blur`}
            aria-hidden="true"
          />
          <LogoFrame src={item.logo} alt={item.company} />
        </div>

        {/* CONTENT */}
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-small sm:text-xmedium font-medium text-white/95">
              {item.company}
            </h3>
            {employmentType && <Chip>{employmentType}</Chip>}
          </div>

          <p className="mt-1 text-small sm:text-xmedium font-slim text-white/90">
            {role}
          </p>

          <p className="mt-0.5 text-xsmall uppercase tracking-[0.25em] text-white/60">
            {item.start} – {item.end}
          </p>

          <p className="mt-3 max-w-3xl text-xsmall sm:text-small font-extraLight leading-relaxed text-white/80">
            {summary}
          </p>
        </div>
      </div>
    </div>
  );
}
