/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    screens: {
      xl: { max: "1920px" },
      lg: { max: "1680px" },
      md: { max: "1079px" },
      sm: { max: "759px" },
    },
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    fontSize: {
      sm: "16px",
      base: "20px",
      xl: "30px",
      "2xl": "40px",
      "3xl": "48px",
      "4xl": "64px",
    },
    colors: {
      transparent: "transparent",

      "content-primary-light": "#000",
      "content-secondary-light": "#000",
      "content-primary-dark": "#FFF",
      "content-secondary-dark": "#b1b1b1",
      "content-tertiary-dark": "#FFF",

      "background-light": "#fff",
      "background-dark": "#000",

      "stroke-light": "#00000014",
      "stroke-dark": "#DFDFDF0F",

      "accent-brand": "#CBEE4C",
      "accent-yellow": "#CBEE4C",
      "accent-orange": "#F2994A",
      "accent-green": "#219653",
      "accent-red": "#FF6B6B",
      "accent-pink": "#F0C3D2",
      "accent-blue": "#56CCF2",
      "accent-purple": "#9B51E0",

      "base-white": "#FFF",
      "base-black": "#000",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)"],
        special: ["var(--font-kyiv-sans)"],
      },
    },
  },
  plugins: [
    // Or with a custom prefix:
    require("@headlessui/tailwindcss")({ prefix: "ui" }),
  ],
};
