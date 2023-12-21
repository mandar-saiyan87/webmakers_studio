/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Satoshi font added to tailwind
        'satoshi': ['Satoshi', 'sans-serif']
      }
    },
  },
  plugins: [],
}

