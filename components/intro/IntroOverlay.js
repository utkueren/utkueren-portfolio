"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "intro_seen_v1";

export default function IntroOverlay({ label = "UTKUEREN" }) {
  const reduceMotion = useReducedMotion();
  const [show, setShow] = useState(false);

  const lines = useMemo(() => [label, label, label], [label]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // prefers-reduced-motion => hiç göstermeyelim
    if (reduceMotion) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      return;
    }

    const seen = sessionStorage.getItem(STORAGE_KEY) === "1";
    if (seen) return;

    setShow(true);

    // scroll lock
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // otomatik kapanış (istersen süreyi uzat/kısalt)
    const t = window.setTimeout(() => {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setShow(false);
    }, 1200);

    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = prevOverflow;
    };
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black text-white"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
          }}
          onClick={() => {
            sessionStorage.setItem(STORAGE_KEY, "1");
            setShow(false);
          }}
        >
          {/* Hafif “ışık / vignette” hissi (çok az, premium) */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/5" />
          </div>

          <div className="relative flex h-full items-center justify-center px-6">
            <motion.div
              className="select-none text-center leading-[0.85]"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08 } },
              }}
            >
              {lines.map((t, i) => (
                <motion.div
                  key={i}
                  className="text-[clamp(3.2rem,10vw,8.5rem)] font-semibold tracking-tight"
                  variants={{
                    hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
                    show: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                >
                  {t}
                </motion.div>
              ))}

              <motion.div
                className="mt-6 text-xs tracking-[0.35em] text-white/70"
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.5, duration: 0.4 },
                }}
              >
                PRODUCT DESIGNER & DEVELOPER
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
