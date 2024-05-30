/** @type {import('tailwindcss').Config} */
export default {
  // content: [],
  // theme: {
  //   extend: {},
  // },
  // plugins: [],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#333333",
        secondary: "#767676",
        tertiary: "#414141",
        highlight: "#04DDB2",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
    },
    screens: {
      xs: "504px",
      ss: "620px",
      sm: "728px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

