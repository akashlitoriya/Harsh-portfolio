/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"]
      },
      colors: {
        backdrop: "#222831",
        text_secondary: "#2D2D2D",
        blue_primary: "#0F33FF",
        cyan_primary: "#00ADB5",
        cream_primary: "#EEEEEE",
        secondary_background: "#393E46",
        glowing_pink: "#F10086"
      },
      
    },
  },
  plugins: [],
}

