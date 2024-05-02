/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mazzard: ['Mazzard', 'sans-serif'],
        ethnocentric:['Ethnocentric','sans-serif']
      },

    },
  },
  plugins: [],
}