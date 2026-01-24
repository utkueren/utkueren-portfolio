"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function BackButton({ locale }) {
  const router = useRouter();

  const goBack = () => {
    // History varsa önce back
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
      return;
    }
    // Direkt URL ile geldiyse fallback
    router.push(`/${locale}#projects`);
  };

  return (
    <button
      type="button"
      onClick={goBack}
      className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-3
                 text-[11px] tracking-[0.35em] uppercase text-white/80
                 hover:bg-white/10 transition-colors"
      aria-label="Go back"
    >
      <span className="text-small leading-none">←</span>
      <span>Back</span>
    </button>
  );
}
