/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F9F5FF',
          500: '#9E77ED',
          700: '#6941C6'
        }
      }
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
}