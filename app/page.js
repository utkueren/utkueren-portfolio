"use client"; // Bu satır eklendi

import Marquee from "@/components/marquee";
import Image from "next/image";
import React, { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className="bg-primary shadow-md">
        <nav className="container mx-auto flex items-center justify-between py-4 px-2">
          {/* Logo */}
          <div className="text-large font-regular tracking-headerSpacing text-white">
            <a href="#" aria-label="Homepage">
              UTKUEREN
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-12">
            <a
              href="#about"
              className="text-white text-medium tracking-menuSpacing font-slim"
            >
              ABOUT
            </a>
            <a
              href="#projects"
              className="text-white text-medium tracking-menuSpacing font-slim"
            >
              PROJECTS
            </a>
            <a
              href="#works"
              className="text-white text-medium tracking-menuSpacing font-slim"
            >
              WORKS
            </a>
            <a
              href="#contact"
              className="text-white text-medium tracking-menuSpacing font-slim"
            >
              CONTACT
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              aria-label="Open Menu"
              className="text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
              <div className="flex flex-col items-center space-y-4 py-4">
                <a
                  href="#about"
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  ABOUT
                </a>
                <a
                  href="#projects"
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  PROJECTS
                </a>
                <a
                  href="#works"
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  WORKS
                </a>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  CONTACT
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main>
        <div className="flex flex-row align-middle justify-center">
          <div className="text-xxxlarge flex flex-row leading-heroLine">
            <h1 className="leading-heroLineUI">UI</h1>
            <h1 className="leading-heroLineAlt">/</h1>
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-xxlarge leading-heroLine">
              <h1>DESIGNER</h1>
            </div>
            <div className="text-xxlargealt leading-heroLine">
              <h1>DEVELOPER</h1>
            </div>
          </div>
        </div>
        <Marquee />
      </main>
    </>
  );
}
