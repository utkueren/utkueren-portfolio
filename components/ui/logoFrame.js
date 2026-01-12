// components/ui/LogoFrame.js
import Image from "next/image";

export default function LogoFrame({
  src,
  alt = "",
  children,
  size = "md", // md | sm
}) {
  const sizes = {
    md: "h-20 w-20", // default (timeline vs)
    mdx: "h-16 w16",
    sm: "h-12 w-12", // footer için
  };

  return (
    <div
      className={`relative ${sizes[size]} rounded-2xl border border-white/10 bg-white/5 p-1.5 backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]`}
    >
      <span
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/25 to-transparent opacity-60"
        aria-hidden
      />

      <div className="relative h-full w-full rounded-xl">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="80px"
            className="rounded-xl object-contain"
          />
        ) : (
          children
        )}
      </div>
    </div>
  );
}
