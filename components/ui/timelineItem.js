// components/ui/TimelineItem.js
import Chip from "@/components/ui/Chip";
import LogoFrame from "./logoFrame";
export default function TimelineItem({ item }) {
  return (
    <li className="relative pl-12 sm:pl-16">
      <div className="flex items-start gap-4">
        {/* LOGO + marka halo */}
        <div className="relative">
          <span
            className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${
              item.accent ?? "from-slate-600 to-slate-400"
            } opacity-30 blur`}
            aria-hidden
          />
          <LogoFrame src={item.logo} alt={item.company} />
        </div>

        {/* CONTENT */}
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-medium font-medium text-white/95">
              {item.company}
            </h3>
            {item.employmentType && <Chip>{item.employmentType}</Chip>}
          </div>

          <p className="mt-1 text-medium font-slim  text-white/90">
            {item.role}
          </p>

          <p className="mt-0.5 text-small uppercase tracking-[0.25em] text-white/60">
            {item.start} – {item.end}
          </p>

          <p className="mt-3 max-w-3xl text-small font-slim leading-relaxed text-white/80">
            {item.summary}
          </p>
        </div>
      </div>
    </li>
  );
}
