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
          100: '#F4EBFF',
          500: '#9E77ED',
          600: '#7F56D9',
          700: '#6941C6'
        }
      },
      boxShadow: {
        xs: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)'
      }
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
}