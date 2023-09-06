/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ui-green': '#29B588',
        'ui-dark-green' : '#1c9d74',
        'ui-black': '#312e2e',
        'ui-grey' : '#7a7979',
        'ui-green-grey' : '#eff5f3',
        'ui-purple' : '#1d0039'
      },
    },
  },
  plugins: [],
}

