// components/ui/LogoFrame.js
import Image from "next/image";

export default function LogoFrame({ src, alt = "" }) {
  return (
    <div className="relative h-20 w-20 rounded-2xl border border-white/10 bg-white/5 p-1.5 backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
      {/* subtle glare */}
      <span
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/25 to-transparent opacity-60"
        aria-hidden
      />

      <div className="relative h-full w-full">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="56px" // container boyutu h-14 w-14 = 56px
            className="rounded-xl object-cover"
            priority={false}
          />
        ) : (
          <div className="grid h-full w-full place-items-center rounded-xl text-[10px] tracking-widest text-white/60">
            LOGO
          </div>
        )}
      </div>
    </div>
  );
}
