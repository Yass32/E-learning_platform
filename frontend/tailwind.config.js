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
        ink: {
          950: '#0A0821',
          900: '#0D0A2C',
          800: '#161238',
          700: '#211B4E',
          600: '#2E2668',
        },
        cloud: '#F2F0F4',
        mist: '#B9B2CC',
        surface: '#F6F4FB',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(225, 29, 72, 0.25)',
      },
    },
  },
  plugins: [],
}
