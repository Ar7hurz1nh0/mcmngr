/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "font-color": "#051006",
        "background-color": "#f7fdf8",
        "primary-color": "#4dcb5e",
        "secondary-color": "#e0f6e2",
        "accent-color": "#195721",
        "font-color/dark": "#f7fdf8",
        "background-color/dark": "#051006",
        "primary-color/dark": "#4dcb5e",
        "secondary-color/dark": "#0e3011",
        "accent-color/dark": "#41c853",
      },
    },
  },
  plugins: [],
};
