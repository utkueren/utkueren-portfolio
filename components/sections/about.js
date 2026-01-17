"use client";

import React from "react";
import ResumeButton from "@/components/ResumeButton";
import { motion } from "framer-motion";
import { useI18n } from "@/app/i18n/i18nProvider";

/* Daha yavaş blur → netleşme */
const revealBlur = {
  hidden: {
    opacity: 0,
    y: 22,
    filter: "blur(16px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

export default function About() {
  const { t } = useI18n();

  return (
    <motion.section
      id="about"
      className="min-h-0 sm:min-h-screen flex flex-col items-center justify-center gap-10 px-6 sm:mt-0 mt-20"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      style={{ willChange: "transform, filter, opacity" }}
    >
      <motion.div
        className="flex flex-col max-w-5xl text-center"
        variants={stagger}
      >
        <motion.h4
          variants={revealBlur}
          className="text-xmedium sm:text-medium font-regular"
        >
          {t("about.title", "Jr. UI Developer & Designer")}
        </motion.h4>

        <motion.p
          variants={revealBlur}
          className="mt-8 text-small sm:text-xmedium font-extralight leading-relaxed"
        >
          {t(
            "about.description",
            "Junior software engineer with UI project experience, problem solving skills, and a proven track record of meaningful contributions. Mostly focused on testing, bugs, vulnerabilities, and updates.",
          )}
        </motion.p>
      </motion.div>

      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 14,
            filter: "blur(12px)",
          },
          show: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
              duration: 1.55,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        style={{ willChange: "transform, filter, opacity" }}
      >
        <ResumeButton />
      </motion.div>
    </motion.section>
  );
}
