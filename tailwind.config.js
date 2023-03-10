const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-bg": colors.gray[100],
        "dark-bg": colors.neutral[800],
        "dark-text": colors.neutral[300],
        "light-text": colors.gray[800],
        "header-text": colors.gray[300],
      },
    },
  },
  plugins: [],
};
