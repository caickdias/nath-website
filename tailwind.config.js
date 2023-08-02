/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-blue": "#93C9F5",
        "logo-light-blue": "#BDC9D2",
        "logo-dark-blue": "#5A7B96",
        "main-white": "#BDC9D2",
        "background": "#0F1010",
      },
      fontFamily: {
        'quattro': 'Quattrocento, serif',
        'quattro-sans': 'Quattrocento Sans, sans-serif'
      }
    },
  },
  plugins: [],
}