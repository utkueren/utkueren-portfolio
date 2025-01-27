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
      animation: {
        marquee: "marquee 10s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
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
        slim: "300",
        regular: "400",
        medium: "500",
        semiBold: "600",
        bold: "700",
      },

      fontSize: {
        small: "1rem",
        medium: "1.6rem",
        large: "2rem",
        xlarge: "2.5rem",
        xxlarge: "15rem",
        xxlargealt: "13rem",
        xxxlarge: "30rem",

        xxxlargealt: "25rem",
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
