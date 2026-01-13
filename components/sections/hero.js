"use client";

// components/sections/hero.js
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const wrap = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14, // uzadı (0.08 -> 0.14)
      delayChildren: 0.25, // uzadı (0.05 -> 0.25)
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 }, // biraz daha aşağıdan gelsin
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.05, // uzadı (0.65 -> 1.05)
      ease: [0.22, 1, 0.36, 1], // daha premium easing
    },
  },
};

const watermark = {
  hidden: { opacity: 0, filter: "blur(10px)", scale: 1.06 },
  show: {
    opacity: 0.06,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 1.9, // uzadı (1.1 -> 1.9)
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden px-6 sm:px-12 lg:px-86">
      {/* Watermark UI/UX */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <motion.div
          className="select-none leading-[0.85]"
          variants={watermark}
          initial="hidden"
          animate="show"
        >
          <span className="text-[clamp(10rem,28vw,34rem)] font-medium">UI</span>
          <span className="text-[clamp(10rem,28vw,34rem)] font-medium">/</span>
          <span className="text-[clamp(10rem,28vw,34rem)] font-medium">UX</span>
        </motion.div>
      </div>

      {/* Center content */}
      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto text-center pt-3 pb-10 sm:py-12"
        variants={wrap}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={fadeUp}
          className="text-white/65 font-regular tracking-10p text-xsmall sm:text-small"
        >
          JR. UI DEVELOPER & DESIGNER
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="mt-6 tracking-7p leading-[0.95] text-[clamp(2.2rem,5.8vw,5.2rem)]"
        >
          UI DESIGNER & DEVELOPER
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-white/75 font-light leading-relaxed text-[clamp(1rem,1.6vw,1.25rem)]"
        >
          Junior software engineer focused on clean UI implementation,
          responsiveness, and detail-driven interfaces.
        </motion.p>

        <motion.div
          variants={fadeUp}
          transition={{ delay: 0.25 }} // CTA'lar biraz daha geç gelsin
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center rounded-xl bg-white text-black px-7 py-4 tracking-[0.25em] text-xs font-medium
                       transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            VIEW PROJECTS
          </motion.a>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="mailto:utkuerenbulut0@gmail.com"
              className="inline-flex items-center rounded-xl border border-white/20 px-7 py-4 tracking-[0.25em] text-xs text-white/90
                         transition hover:border-white/40 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              MAIL ME
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
