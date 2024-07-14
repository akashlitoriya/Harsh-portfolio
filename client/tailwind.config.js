/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"]
      },
      colors: {
        backdrop: "#151515",
        text_secondary: "#2D2D2D",
        blue_primary: "#0F33FF"
      },
      
    },
  },
  plugins: [],
};
