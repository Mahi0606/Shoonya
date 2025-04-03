/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './public/index.html',
  ],
  theme: {
    extend: {
      backgroundColor: {
        darkCyan: '#004d40',
      },  
    },
  },
  plugins: [],
}