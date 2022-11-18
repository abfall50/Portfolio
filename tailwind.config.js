/** @type {import('tailwindcss').Config} */
module.exports = {
  /** Dark Mode */
  /*darkMode: "class",*/
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violet1: "#17151f",
        violet2: "#1c172b",
        violet3: "#251e40",
        violet4: "#2c2250",
        violet5: "#32275f",
        violet6: "#392c72",
        violet7: "#443592",
        violet8: "#5842c3",
        violet9: "#6e56cf",
        violet10: "#7c66dc",
        violet11: "#9e8cfc",
        violet12: "#f1eefe",
      },
    },
  },
  plugins: [],
};
