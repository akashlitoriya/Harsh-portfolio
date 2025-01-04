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
      animation: {
        'infinite-scroll-horizontal': 'infinite-scroll-horizontal 20s linear infinite',
        'infinite-scroll-vertical': 'infinite-scroll-vertical 20s linear infinite'
      },
      keyframes:{
        'infinite-scroll-horizontal':{
          to: {
            transform: 'translateX(calc(-50% - 6px))' //6px is half of gap we have set for ul that contains all review cards
          }
        },
        'infinite-scroll-vertical':{
          to:{
            transform: 'translateY(calc(-50% - 6px))'
          }
        }
      }
    },
  },
  plugins: [],
};
