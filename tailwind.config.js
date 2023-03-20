/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main": "#131124"
      },
      boxShadow: {
        "inner-lg":"inset 0 4px 6px 4px 0 rgb(0 0 0 / 0.1)",
        "inner-xl":"inset 0 10px 15x 6px 0 rgb(0 0 0 / 0.1)",
      }
    },
  },
  plugins: [],
}
