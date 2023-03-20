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
        primary: colors.yellow[500],
        secondary: colors.cyan[500],
        "light-bg": colors.gray[100],
        "dark-bg": colors.neutral[800],
        "dark-text": colors.neutral[100],
        "light-text": colors.gray[800],
      },
      boxShadow: ({ theme }) => ({
        "primary-button": `inset 0 0 0 2px ${theme("colors.primary")}`,
        "secondary-button": `inset 0 0 0 2px ${theme("colors.secondary")}`,
      }),
    },
  },
  plugins: [],
};
