/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const contrast = require("./components/Rumi/plugins/contrast");
const base = require("./components/Rumi/plugins/base");
const color = require("./components/Rumi/plugins/color");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.teal,
        light: colors.zinc,
        dark: colors.slate,
      },
    },
  },
  plugins: [contrast, base, color],
};
