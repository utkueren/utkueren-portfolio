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
      spacing: {
        86: "86px",
        "hero-nudge": "6px",
        "slash-nudge": "10px",
      },
      lineHeight: {
        // hero için özel line-height tokenları
        "hero-ui": "0.85",
        "hero-word": "0.90",

        // istersen genel scale
        tight: "0.95",
        snug: "1.05",
        normal: "1.2",
      },

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
        "7p": "0.07em",
        "10p": "0.10em",
        "45p": "0.45em",
      },

      // lineHeight: {
      //   heroLine: "1em",
      //   heroLineAlt: "1.27em",
      //   heroLineUI: "1.5em",
      // },

      fontWeight: {
        extraLight: "200",
        light: "300",
        regular: "400",
        medium: "500",
        semiBold: "600",
        bold: "700",
      },
      fontSize: {
        xsmall: "1rem", //16px
        small: "1.2rem", //19px
        xmedium: "1.7rem", //27px
        medium: "2rem", //32px
        large: "3.2rem", //51px
        xlarge: "9rem", //144px
        xxlarge: "20rem", //320px
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
