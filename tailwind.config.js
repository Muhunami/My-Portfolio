const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#152a4a",
        "brand-blue-dark": "#0d1b33",
        "brand-red": "#b31e2d",
        "off-white": "#f7f7fb",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        soft: "0 16px 32px -24px rgba(13, 27, 51, 0.35)",
      },
    },
  },
  plugins: [],
};
