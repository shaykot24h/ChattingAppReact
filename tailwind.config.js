/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#11175D',
        'custom-black': '#000000',
        'button-color': '#5F35F5',
    },
  },
  fontFamily: {
    'Nunito': ['Nunito', 'sans-serif',],
    'Open Sans': ['Open Sans', 'sans-serif',],
  }
},
  plugins: [],
};

