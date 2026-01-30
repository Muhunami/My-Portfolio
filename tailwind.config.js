const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "brand-blue": "var(--color-blue)",
        "brand-red": "var(--color-red)",
        "text-primary": "var(--color-text)",
        "text-muted": "var(--color-text-muted)",
        surface: "var(--color-surface)",
        "surface-strong": "var(--color-surface-strong)",
        line: "var(--color-line)",
      },
      fontFamily: {
        body: ["var(--font-body)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-display)", ...defaultTheme.fontFamily.serif],
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        glow: "var(--shadow-glow)",
      },
    },
  },
  plugins: [],
};
