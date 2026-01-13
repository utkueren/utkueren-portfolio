import { motion } from "framer-motion";
import experiences from "../data/experiences";
import TimelineItem from "../ui/timelineItem";

export default function WorkExperience({ items = experiences }) {
  return (
    <section
      id="works"
      data-reveal
      className="relative mx-auto max-w-6xl px-4 py-48 sm:px-6 lg:px-8"
    >
      <h2 className="mb-16 text-center text-xmedium sm:text-medium font-medium tracking-[0.35em] text-white/95">
        WORK EXPERIENCE
      </h2>

      <ol className="relative space-y-32">
        {/* ONE vertical line for the whole timeline */}
        <span
          className="pointer-events-none absolute left-[2.5rem] sm:left-[6.5rem] top-0 h-[85%] z-0 w-[2px] bg-white/25"
          aria-hidden="true"
        />

        {items.map((item, i) => (
          <motion.li
            key={item.company + i}
            className="relative z-10"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <TimelineItem item={item} />
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
