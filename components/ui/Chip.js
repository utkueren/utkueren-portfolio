// components/ui/Chip.js
export default function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xxsmall sm:text-xsmall  tracking-wide text-white/80 backdrop-blur-sm">
      {children}
    </span>
  );
}
