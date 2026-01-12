"use client";

import Marquee from "@/components/marquee";
import Navbar from "@/components/navbar";
import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import WorkExperience from "@/components/sections/workExperience";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      {/* Navbar hero'nun üstünde dursun */}
      <header className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </header>

      <main className="bg-black text-white">
        {/* FIRST SCREEN: Navbar + Hero + Marquee aynı ekranda */}
        <section
          className="
            min-h-0 sm:min-h-screen
 flex flex-col
            pt-24 sm:pt-28   /* navbar için üst boşluk */
          "
        >
          {/* Hero alanı */}
          <div className="flex-1 flex items-center justify-center">
            <Hero />
          </div>

          {/* Marquee: her zaman altta */}
          <div className="shrink-0">
            <Marquee />
          </div>
        </section>

        {/* diğer sectionlar */}
        <About />
        <WorkExperience />
        <Projects />
        <Contact />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
