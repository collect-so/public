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
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    fontSize: {
      sm: "16px",
      base: "20px",
      xl: "24px",
      "2xl": "36px",
      "3xl": "48px",
      "4xl": "64px",
    },
    colors: {
      transparent: "transparent",

      "content-primary-light": "#4C4C4C",
      "content-secondary-light": "#606060",
      "content-primary-dark": "#FFF",
      "content-secondary-dark": "#D8D8D8",

      "background-light": "#fffffd",
      "background-dark": "#263238",

      "stroke-light": "#00000014",
      "stroke-dark": "#DFDFDF0F",

      "accent-brand": "#3f81ff",
      "accent-yellow": "#F4B000",
      "accent-green": "#00A07A",
      "accent-red": "#FF586D",
      "accent-blue": "#3F81FF",

      "base-white": "#FFF",
      "base-black": "#000",
    },
    extend: {},
  },
  plugins: [],
};
