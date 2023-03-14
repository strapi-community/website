/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        primary:"#4945ff",
        title:"#212067",
        title1:"#171693",
        text:"#344b80",
        darkCard:"#121214",
        darkBg:"#0c0c0d"
      },
      screens:{
        xs:"380px"
      },
      zIndex:{
        550:"550",
        600:"600"
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'), 
    plugin(function({ addVariant }) {
      addVariant('children', '&>*')
    })
  ],
}
