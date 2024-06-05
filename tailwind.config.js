const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        
        satoshi: ['Satoshi', 'sans-serif']
      },
      
        transitionProperty: ['hover', 'focus'],
      
    },
    display: ['responsive', 'active', 'group-hover', 'max'],
    
  },
  plugins: [],
  corePlugins: {
   
  },
})

