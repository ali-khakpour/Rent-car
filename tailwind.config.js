/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#3563E9",
      secondary: "#90A3BF",
      information: "#54A6FF",
      txtColor: "#1A202C",
    },
    screens: {
      small: "320px",
      medium: "370px",
      large: "425px",
      md: "768px",
      lg: "1024px",
      '2xl': "1280px",
      largeLaptop: "1440px",
    },
  },
  plugins: [],
};
