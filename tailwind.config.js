/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const outlined = require("./components/Rumi/plugins/outlined");
const solid = require("./components/Rumi/plugins/solid");

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
  plugins: [outlined, solid],
};
