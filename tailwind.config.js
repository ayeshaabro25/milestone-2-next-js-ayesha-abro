/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          400: '#f1c40f',
        },
        gray: {
          800: '#2d3436',
          700: '#333',
          900: '#1c1c1e',
        },
      },
    },
  },
  plugins: [],
};
