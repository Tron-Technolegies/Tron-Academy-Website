/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      extra: "1450px",
      //=> @media (min-width: 640px) { ... }
    },
    extend: {
      colors: {
        primary: "#A23CC6",
        hoverPrimary: "#CA90F2",
        lightPrimary: "#F4E3FA",
      },
      keyframes: {
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInBottom: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInTop: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        slideInLeft: "slideInLeft 1s ease-out forwards",
        slideInRight: "slideInRight 1s ease-out forwards",
        slideInBottom: "slideInBottom 1s ease-out forwards",
        slideInTop: "slideInTop 0.3s ease-out forwards",
      },
      dropShadow: {
        navlink: "0px 0px 2px rgba(202, 144, 242, 0.5)",
      },
    },
  },
  plugins: [],
};
