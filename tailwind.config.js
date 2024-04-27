/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Orbitron", "sans-serif"],
        secondary: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#FFC500",
      },
    },
  },
  plugins: [],
};
