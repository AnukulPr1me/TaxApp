/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:['poppins']
      },
      colors:{
        primary_green:"#7bed9f",
        secondary_green:"#15803D"
      }
    },
  },
  plugins: [],
}

