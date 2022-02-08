module.exports = {
  content: [],
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: "Lato, Arial, sans-serif",
      },
      colors: {
        blue: {
          100: "#1d303e",
          200: "#27414a",
          300: "#365154",
          400: "#49625e",
        },
        grey: {
          100: "#5f7268",
          200: "#657663",
          300: "#6f795d",
          400: "#7e7a57",
          500: "#856d41",
        },
        red: {
          100: "#905c32",
          200: "#9a472f",
          300: "#a12b39",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
