/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkPurple: '#0D0A2C',
        lightPurple: '#462DE5',
        gradientStart: '#6A11CB',
        gradientEnd: '#2575FC',
      },
    },
  },
  plugins: [],
}
