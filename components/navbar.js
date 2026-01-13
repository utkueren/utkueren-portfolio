"use client";

import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const close = () => setIsOpen(false);

  const scrollToId = (id) => (e) => {
    e?.preventDefault?.();

    const el = document.getElementById(id);
    if (!el) {
      console.log("[scrollToId] Element yok:", id);
      return;
    }

    const navH = navRef.current?.offsetHeight ?? 0;
    const currentY =
      (document.scrollingElement || document.documentElement).scrollTop || 0;

    const y = el.getBoundingClientRect().top + currentY - navH;

    (document.scrollingElement || document.documentElement).scrollTo({
      top: y,
      behavior: "smooth",
    });

    window.history?.pushState?.(null, "", `#${id}`);
    close();
  };

  // ESC ile kapat + body scroll lock
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  // Hash ile açılış (örn: /#projects) -> otomatik scroll
  useEffect(() => {
    const hash = window.location.hash?.replace("#", "");
    if (!hash) return;

    // DOM yerleşsin diye küçük gecikme
    setTimeout(() => {
      const el = document.getElementById(hash);
      if (!el) return;
      const navH = navRef.current?.offsetHeight ?? 0;
      const y = el.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top: y, behavior: "smooth" });
    }, 60);
  }, []);

  // Section reveal (fade-in) animasyonu
  useEffect(() => {
    // data-reveal olanları al (önerilen)
    const targets = Array.from(document.querySelectorAll("[data-reveal]"));

    // Eğer data-reveal yoksa, id’lere göre de fallback yap
    if (targets.length === 0) {
      ["about", "projects", "works", "contact"].forEach((id) => {
        const el = document.getElementById(id);
        if (el) targets.push(el);
      });
    }

    if (!targets.length) return;

    // Başlangıç state (bir kez)
    targets.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(14px)";
      el.style.transition = "opacity 700ms ease, transform 700ms ease";
      el.style.willChange = "opacity, transform";
    });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const el = en.target;
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          obs.unobserve(el); // bir kere animasyon
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <nav
      ref={navRef}
      className="relative bg-black shadow-[0_1px_0_rgba(255,255,255,0.06)]"
    >
      <div className="container mx-auto flex items-center justify-between py-3 sm:py-4 pt-4 sm:pt-8 px-6 sm:px-86">
        {/* Logo */}
        <div className="text-medium font-regular tracking-45p text-white">
          <a href="#" aria-label="Homepage" onClick={(e) => e.preventDefault()}>
            UTKUEREN
          </a>
        </div>

        {/* Desktop Links (lg ve üstü) */}
        <div className="hidden lg:flex space-x-12">
          <a
            href="#about"
            onClick={scrollToId("about")}
            className="text-white text-small tracking-10p font-light"
          >
            ABOUT
          </a>
          <a
            href="#works"
            onClick={scrollToId("works")}
            className="text-white text-small tracking-10p font-light"
          >
            WORKS
          </a>
          <a
            href="#projects"
            onClick={scrollToId("projects")}
            className="text-white text-small tracking-10p font-light"
          >
            PROJECTS
          </a>
          <a
            href="#contact"
            onClick={scrollToId("contact")}
            className="text-white text-small tracking-10p font-light"
          >
            CONTACT
          </a>
        </div>

        {/* Hamburger (lg altı) */}
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            aria-expanded={isOpen}
            className="text-white/80 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white/30 rounded-md p-2"
            onClick={() => setIsOpen(true)}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Overlay + Drawer */}
      <div
        className={[
          "lg:hidden fixed inset-0 z-[60]",
          isOpen ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
      >
        {/* Overlay */}
        <button
          aria-label="Close Menu"
          onClick={close}
          className={[
            "absolute inset-0 transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0",
          ].join(" ")}
          style={{ background: "rgba(0,0,0,0.55)" }}
        />

        {/* Drawer panel */}
        <aside
          className={[
            "absolute right-0 top-0 h-full w-[86%] max-w-sm",
            "bg-black",
            "border-l border-white/10",
            "shadow-[0_10px_40px_rgba(0,0,0,0.55)]",
            "transition-transform duration-300 ease-out",
            isOpen ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
          role="dialog"
          aria-modal="true"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 pt-6 pb-4">
            <span className="text-small tracking-10p text-white/70">MENU</span>
            <button
              aria-label="Close"
              onClick={close}
              className="p-2 rounded-md text-white/80 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                {/* X icon FIX */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            </button>
          </div>

          {/* Links */}
          <div className="px-6 py-6 space-y-5">
            <a
              href="#about"
              onClick={scrollToId("about")}
              className="block text-white/90 tracking-[0.25em] text-xsmall font-light py-3 border-b border-white/10 hover:text-white transition"
            >
              ABOUT
            </a>
            <a
              href="#projects"
              onClick={scrollToId("projects")}
              className="block text-white/90 tracking-[0.25em] text-xsmall font-light py-3 border-b border-white/10 hover:text-white transition"
            >
              PROJECTS
            </a>
            <a
              href="#works"
              onClick={scrollToId("works")}
              className="block text-white/90 tracking-[0.25em] text-xsmall font-light py-3 border-b border-white/10 hover:text-white transition"
            >
              WORKS
            </a>
            <a
              href="#contact"
              onClick={scrollToId("contact")}
              className="block text-white/90 tracking-[0.25em] text-xsmall font-light py-3 border-b border-white/10 hover:text-white transition"
            >
              CONTACT
            </a>
          </div>
        </aside>
      </div>
    </nav>
  );
};

export default Navbar;
