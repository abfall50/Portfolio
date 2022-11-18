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
        primary: "#B3192B",
        secondary: "#DCE0D9",
        tertiary: "#5873C6",
        bg: "#1C2951",
        purple1: "#1b141d",
        purple2: "#221527",
        purple3: "#301a3a",
        purple4: "#3a1e48",
        purple5: "#432155",
        purple6: "#4e2667",
        purple7: "#5f2d84",
        purple8: "#7938b2",
        purple9: "#8e4ec6",
        purple10: "#9d5bd2",
        purple11: "#bf7af0",
        purple12: "#f7ecfc",
      },
    },
  },
  plugins: [],
};
