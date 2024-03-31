/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        marcellus: ['Marcellus SC', 'serif'],
        oswald : ['Oswald', 'sans-serif']
      },
      
        transitionProperty: ['hover', 'focus'],
      
    },
    
  },
  plugins: [],
}

