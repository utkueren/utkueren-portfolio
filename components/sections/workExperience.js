// components/sections/WorkExperience.js
import { motion } from "framer-motion";
import experiences from "../data/experiences";
import TimelineItem from "../ui/timelineItem";

export default function WorkExperience({ items = experiences }) {
  return (
    <section className="relative font-josefin mx-auto max-w-6xl px-4 py-48 sm:px-6 lg:px-8">
      <h2 className="mb-16 text-center text-large2 font-medium tracking-[0.35em] text-white/95">
        WORK EXPERIENCE
      </h2>

      <ol className="relative space-y-32">
        {items.map((item, i) => (
          <motion.div
            key={item.company + i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <span
              className="pointer-events-none h-5/6 absolute left-[5.5rem] sm:left-[6.5rem] -z-10 top-0 bottom-0 w-px bg-white/15"
              aria-hidden
            />
            <TimelineItem item={item} />
          </motion.div>
        ))}
      </ol>
    </section>
  );
}
