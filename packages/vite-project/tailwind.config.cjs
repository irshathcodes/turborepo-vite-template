/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
    '../../shared/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        electric: '#db00ff',
        ribbon: '#0047ff',
      },
    },
  },
  plugins: [],
}
