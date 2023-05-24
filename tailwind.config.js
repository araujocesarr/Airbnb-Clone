/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xxl: "1440px",
    },
    fontFamily: {
      sans: ["Poppins", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        "light-gray": "#918e9b",
      },
      boxShadow: {
        1: "0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
