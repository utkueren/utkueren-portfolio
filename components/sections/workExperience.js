// components/sections/WorkExperience.js
import { motion } from "framer-motion";
import experiences from "../data/experiences";
import TimelineItem from "../ui/timelineItem";

export default function WorkExperience({
  title = "WORK EXPERIENCE",
  items = experiences,
}) {
  return (
    <section
      aria-label={title}
      className="relative font-josefin mx-auto max-w-6xl px-4 py-48 sm:px-6 lg:px-8"
    >
      <h2 className="mb-10 text-center text-2xl font-medium tracking-[0.35em] text-white/95 sm:text-3xl">
        {title}
      </h2>

      {/* Tek, sürekli timeline çizgisi */}
      <ol className="relative space-y-14">
        <span
          // left-6: li'lerdeki pl-12 ve 56px'lik LogoFrame ile hizalı (merkez)
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-px bg-white/40"
          aria-hidden
        />

        {items.map((item, i) => (
          <motion.div
            key={item.company + i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <TimelineItem item={item} />
          </motion.div>
        ))}
      </ol>
    </section>
  );
}
