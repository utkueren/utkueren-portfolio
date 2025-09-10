import React from "react";

const ResumeButton = () => {
  return (
    <section class=" flex items-stretch justify-center bg-black">
      <a
        href="../public/CV.pdf"
        class="group inline-flex items-center gap-3 
           rounded-full border-2 border-white/80 text-white 
           px-8 py-3 sm:px-10 sm:py-4 
           [font-size:clamp(1rem,2vw,1.5rem)]
           transition-all duration-300 
           hover:border-white hover:bg-white/10 
           focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
      >
        <span class="tracking-wide font-slim">RESUME</span>
        <svg
          className="w-[1.2em] h-[1.2em] transition-transform duration-300 group-hover:translate-y-0.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <path d="M7 10l5 5 5-5" />
          <path d="M12 15V3" />
        </svg>
      </a>
    </section>
  );
};

export default ResumeButton;
