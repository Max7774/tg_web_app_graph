/** @type {import('tailwindcss').Config} */
const twColors = require("tailwindcss/colors");
// var(--tg-theme-hint-color)
const colors = {
  transparent: twColors.transparent,
  black: "#2E3239",
  gray: "#b5b5b5",
  white: twColors.white,
  primary: "#FFBF00",
  secondary: "#F2F2F5",
  "bg-color": "var(--tg-theme-bg-color)",
  "bg-color-s": "#CFCFCF",
  aqua: "#268697",
  green: twColors.green[400],
  red: twColors.red[400],
  purple: "#6931e0",
  blue: "#2e33bf",
  darkShadow: "rgba(255, 255, 255, 0.1)",
  lightShadow: "rgba(0, 0, 0, 0.1)",
  mainText: "var(--tg-theme-text-color)",
};

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "600px",
      laptop: "1024px",
      desktop: "1280px",
    },
    colors,
    extend: {
      boxShadow: {
        "telegram-light":
          "0 4px 6px -1px var(--tg-shadow-light), 0 2px 4px -2px var(--tg-shadow-light)",
        "telegram-dark":
          "0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -2px rgba(255, 255, 255, 0.1)",
      },
      fontSize: {
        xs: "0.82rem",
        sm: "0.98rem",
        base: "1.15rem",
        lg: "1.22rem",
        xl: "1.36rem",
        "1.5xl": "1.5rem",
        "2xl": "1.725rem",
        "3xl": "2.155rem",
        "4xl": "2.58rem",
        "5xl": "3.45rem",
        "6xl": "4.3rem",
        "7xl": "5.17rem",
        "8xl": "6.9rem",
        "9xl": "9.2rem",
      },
      zIndex: {
        1: 1,
        2: 2,
        3: 3,
      },
      keyframes: {
        animationOpacity: {
          from: { opacity: 0.2 },
          to: { opacity: 1 },
        },
        scaleIn: {
          "0%": {
            opacity: 0,
            transform: "scale(0.9)",
          },
          "50%": {
            opacity: 0.3,
          },
          "100%": {
            opacity: 1,
            transform: "scale(1)",
          },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        opacity: "animationOpacity .5s ease-in-out",
        scaleIn: "scaleIn .35s ease-in-out",
        slideInLeft: "slideInLeft 1s ease-out",
        slideInRight: "slideInRight 1s ease-out",
        slideInUp: "slideInUp 1s ease-out",
      },
    },
  },
  plugins: [],
};
