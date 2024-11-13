/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:['poppins']
      },
      colors:{
        primary_green:"#7bed9f",
        secondary_green:"#15803D"
      },
      boxShadow: {
        'primary-green': '0 4px 6px rgba(0, 128, 0, 0.3)', // Adjust RGBA to fit the primary green color
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

