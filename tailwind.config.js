// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        domine: ['Domine', 'serif'], // 👈 Add your Google font here
      },
    },
  },
  plugins: [],
}
