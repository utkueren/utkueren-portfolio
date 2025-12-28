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
      {/* Navbar akışı itmesin, hero'nun üstünde dursun */}
      <header className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </header>

      <main className="bg-black text-white">
        {/* İlk ekran: Hero + Tape */}
        <section className="relative min-h-screen overflow-hidden">
          <Hero />
          <div className="absolute bottom-0 left-0 w-full z-10">
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
