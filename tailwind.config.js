/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "450px",
      // => @media (min-width: 640px) { ... }

      md: "547px",

      lg: "768px",

      xl: "1024px",
      // => @media (min-width: 1024px) { ... }

      "2xl": "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        primary: "#202225",
        secondary: "#5865f2",
        blue: {
          450: "#5F99F7",
          grey: {
            900: "#202225",
            800: "#2f316",
            700: "#36393f",
            600: "#4f545c",
            400: "#d4d7dc",
            300: "#e3f5e8",
            200: "#ebedef",
            100: "#f2f3fF",
          },
        },
      },
    },
  },
  plugins: [],
};
