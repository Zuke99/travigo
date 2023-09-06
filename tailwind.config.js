/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ui-green': '#29B588',
        'ui-black': '#312e2e',
        'ui-grey' : '#7a7979',
        'ui-green-grey' : '#eff5f3'
      },
    },
  },
  plugins: [],
}

