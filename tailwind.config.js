/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '70/30': '70% 28%'
      },
      screens: {
        xsm: "500px"
      }
    },
  },
  plugins: [],
}

