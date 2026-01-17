import Link from "next/link";
import { useI18n } from "@/app/i18n/i18nProvider";

const ROWS = 3;

function MarqueeRow({ text, reverse = false, opacityClass = "opacity-20" }) {
  // translateX(-50%) animasyonu için içerik en az 2 kez tekrar etmeli
  const items = Array.from({ length: 12 });

  return (
    <div className="overflow-hidden">
      <div
        className={[
          "flex whitespace-nowrap gap-16",
          reverse
            ? "animate-marquee [animation-direction:reverse]"
            : "animate-marquee",
          "will-change-transform",
          opacityClass,
        ].join(" ")}
      >
        {items.map((_, i) => (
          <span
            key={i}
            className="text-[clamp(2.5rem,6vw,5.5rem)] font-light tracking-[0.18em] text-white"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Contact() {
  const { t } = useI18n();

  return (
    <section
      id="contact"
      data-reveal
      className="relative overflow-hidden bg-black py-24 sm:py-32"
    >
      {/* Arkaplan marquee */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 flex flex-col justify-center gap-10">
          <MarqueeRow
            text={t("contact.marquee", "CONTACT@UTKUEREN.DEV")}
            opacityClass="opacity-[0.12]"
          />
          <MarqueeRow
            text={t("contact.marquee", "CONTACT@UTKUEREN.DEV")}
            reverse
            opacityClass="opacity-[0.10]"
          />
          <MarqueeRow
            text={t("contact.marquee", "CONTACT@UTKUEREN.DEV")}
            opacityClass="opacity-[0.08]"
          />
        </div>

        {/* hafif vignette / soft fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
      </div>

      {/* Ön içerik */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-16 text-center text-medium font-medium tracking-[0.35em] text-white/95">
          {t("contact.title", "CONTACT")}
        </h2>

        <div className="mx-auto max-w-4xl rounded-2xl bg-[#1A1A1A]/70 backdrop-blur-md border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)] px-6 sm:px-10 py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-8">
          <p className="text-white/90 font-light leading-relaxed text-small sm:text-xmedium sm:text-start text-center max-w-3xl">
            {t(
              "contact.description",
              "If you'd like to work together or just want to say hi, don't hesitate to drop me an email!",
            )}
          </p>

          <Link
            href="mailto:contact@utkueren.dev"
            className="inline-flex items-center rounded-xl bg-white text-black whitespace-nowrap px-8 py-5 tracking-[0.35em] font-medium transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            {t("contact.cta", "MAIL ME")}
          </Link>
        </div>
      </div>
    </section>
  );
}
