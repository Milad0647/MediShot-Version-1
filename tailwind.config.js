/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
        "4xl": "2560px",
      },
      colors: {
        CMPURPLE: "#3634A3",
        CMGRAY: "#26262B",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 100%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        gradient: "gradient 5s linear infinite",
      },
    },
  },
  plugins: [],
};
