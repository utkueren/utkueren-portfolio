// components/Contact.js
import Link from "next/link";

export default function Contact({
  email = "utkuerenbulut0@gmail.com",
  message = "If you'd like to work together or just want to say 'Hi,' don't hesitate to drop me an email!",
  buttonText = "MAIL ME",
  className = "flex justify-around font-josefin text-small sm:text-small2 ",
  maxWidth = "max-w-full",
}) {
  return (
    <div
      className={[
        "relative rounded-2xl bg-[#1A1A1A] text-white",
        "px-6 sm:px-10 py-6 sm:py-8",
        "shadow-[0_10px_30px_rgba(0,0,0,0.35)]",
        "mx-auto",
        maxWidth,
        "flex items-center justify-between gap-6",
        className,
      ].join(" ")}
    >
      {/* dekoratif çerçeve/parıltı */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5"
        aria-hidden
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-40"
        style={{
          background:
            "radial-gradient(120% 80% at 0% 0%, rgba(255,255,255,.06), transparent 60%)",
        }}
      />

      {/* Metin */}
      <p className="flex-1 text-white/90 leading-relaxed text-small sm:text-large2 max-w-3xl whitespace-normal">
        {message}
      </p>

      {/* Buton */}
      <Link
        href={`mailto:${email}`}
        aria-label={`Send an email to ${email}`}
        className="flex-shrink-0 inline-flex items-center rounded-xl bg-white text-black px-6 py-5 sm:px-12 sm:py-6 tracking-[0.35em] font-medium
                   transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
      >
        {buttonText}
      </Link>
    </div>
  );
}
