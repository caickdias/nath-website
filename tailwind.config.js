/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "logo-light-blue": "#BDC9D2",
        "logo-dark-blue": "#5A7B96"
      }
    },
  },
  plugins: [],
}