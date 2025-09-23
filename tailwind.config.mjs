/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["var(--font-josefin)"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },

        mousedot: {
          "0%": { transform: "translate(-50%, 0)", opacity: ".2" },
          "20%": { opacity: "1" },
          "60%": { transform: "translate(-50%, 14px)", opacity: "1" },
          "100%": { transform: "translate(-50%, 0)", opacity: ".2" },
        },
      },
      animation: {
        marquee: "marquee 10s linear infinite",
        mousedot: "mousedot 1.6s ease-in-out infinite",
      },

      letterSpacing: {
        headerSpacing: "14px",
        menuSpacing: "6px",
      },
      lineHeight: {
        heroLine: "1em",
        heroLineAlt: "1.27em",
        heroLineUI: "1.5em",
      },

      fontWeight: {
        xxslim: "100",
        xslim: "200",
        slim: "300",
        regular: "400",
        medium: "500",
        semiBold: "600",
        bold: "700",
      },

      fontSize: {
        small: "1rem",
        small2: "1.3rem",
        medium: "1.6rem",
        medium2: "1.8rem",
        large: "2rem",
        large2: "2.3rem",
        xlarge: "2.5rem",
        "hero-xl": "clamp(2rem, 25vw, 28rem)", // UI/
        "hero-md": "clamp(1.5rem, 13vw, 20rem)", // DESIGNER
        "hero-sm": "clamp(1.5rem, 11.5vw, 19rem)", // DEVELOPER
      },

      colors: {
        primary: "#000000",
        secondary: "#ffffff",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
