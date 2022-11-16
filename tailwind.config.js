/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#B3192B",
        'secondary': "#DCE0D9",
        'tertiary': "#5873C6",
        'bg': "#1C2951"
      }
    },
  },
  plugins: [],
}
