/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F9F5FF",
          100: "#F4EBFF",
          500: "#9E77ED",
          600: "#7F56D9",
          700: "#6941C6",
        },
        success: {
          50: "#ECFDF3",
          700: "#027A48",
        },
      },
      screens: {
        "3xl": "1912px",
      },
      boxShadow: {
        xs: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        "3xl":
          "10.87081px 10.87081px 21.74162px -1.35885px rgba(16, 24, 40, 0.08), 21.74162px 21.74162px 43.48325px -2.7177px rgba(16, 24, 40, 0.20)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
