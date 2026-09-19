/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // EB Garamond for titles only; Inter carries all body text.
        serif: ["var(--font-display)", "EB Garamond", "Iowan Old Style", "Palatino", "Georgia", "serif"],
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          DEFAULT: "#111110",
          soft: "#4A4A45",
          mute: "#6E6E67",
          faint: "#96968E",
          line: "#E4E4E0",
          hair: "#EFEFEC",
        },
        // White and cool neutrals. No beige.
        paper: {
          DEFAULT: "#FFFFFF",
          soft: "#F7F7F5",
          deep: "#EDEDEA",
        },
        brand: {
          50: "#FAF3F4",
          100: "#F2E2E4",
          200: "#E3C3C7",
          300: "#CE9199",
          400: "#B15F6C",
          500: "#8E3546",
          600: "#752335",
          700: "#5E1A28",
          800: "#47131E",
          900: "#2F0C14",
        },
        moss: {
          50: "#F2F5F2",
          100: "#E0E9E2",
          200: "#C0D2C5",
          300: "#93B29C",
          400: "#628C71",
          500: "#3F6B50",
          600: "#2F543E",
          700: "#254331",
          800: "#1B3124",
          900: "#132319",
        },
        bin: {
          green: "#2E7D46",
          blue: "#1F5FA8",
          red: "#B3261E",
          yellow: "#B8860B",
          black: "#2B2B2B",
        },
      },
      opacity: Object.fromEntries(
        Array.from({ length: 101 }, (_, i) => [i, (i / 100).toString()])
      ),
      maxWidth: { content: "74rem", prose: "44rem" },
      boxShadow: {
        card: "0 1px 2px rgba(17,17,16,0.04), 0 8px 24px -14px rgba(17,17,16,0.16)",
        lift: "0 2px 4px rgba(17,17,16,0.05), 0 18px 40px -18px rgba(17,17,16,0.24)",
      },
      keyframes: {
        fadeUp: { "0%": { opacity: "0", transform: "translateY(12px)" }, "100%": { opacity: "1", transform: "none" } },
      },
      animation: { fadeUp: "fadeUp .6s cubic-bezier(.22,.68,.36,1) both" },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
