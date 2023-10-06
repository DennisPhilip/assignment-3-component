/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      backgroundImage:{
        'hero-image': "url('./src/components/sj.jpg')",
      }  
    },
  },
  plugins: [],
}