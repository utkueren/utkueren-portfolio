"use client"; // Bu satır eklendi

import Marquee from "@/components/marquee";
import Navbar from "@/components/navbar";
import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import WorkExperience from "@/components/sections/workExperience";
import Projects from "@/components/sections/projects";
import Image from "next/image";
import React, { useState } from "react";

export default function Home() {
  return (
    <>
      <header className="bg-primary shadow-md">
        <Navbar />
      </header>

      <main>
        <Hero />
        <Marquee />
        <About />
        <WorkExperience title="WORK EXPERIENCE" />
        <Projects />
      </main>
    </>
  );
}
