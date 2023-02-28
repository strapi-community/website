/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        defaultcol: "#4a43a7",
        secondary: "#f0f0ff",
        defaultBg: "#e2e8f0",
        bgForm: "#1a154e",
        formBtn: "#8c4bff"
      }
    },
  },
  plugins: [],
}