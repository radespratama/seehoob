/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: ({ colors }) => ({
      transparent: colors.transparent,
      white: colors.white,
      gray: { ...colors.gray, 950: "#111111" },
      sky: colors.sky,
      blue: colors.blue,
      yellow: colors.yellow,
    }),
    fontFamily: {
      sans: ["Sen"],
    },
  },
  plugins: [],
};
