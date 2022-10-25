/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#1a8917",
        "primary-dark": "#0f730c"
      },
      fontFamily: {
        sans: ["Roboto", "sans-sarif"]
      }
    },
  },
  plugins: [],
}
