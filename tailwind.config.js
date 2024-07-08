/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customBlack:'#383a4a',
        customGray:'#a1a2ab',
        secondary:'#3b3a4a'
      }
    },
  },
  plugins: [],
}