/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT')
module.exports = withMT({
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Projenizin kaynak dosyaları
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}', // flowbite içerik yolu
  ],
  theme: {
    extend: {
      display: ['group-hover'],
      backgroundImage: {
        'hero-bg': "url('/images/herobg.jpg')",
      },
      screens: {
        '1366x768': { 'raw': '(width: 1366px) and (height: 768px)' },}
    },
  },
  plugins: [
    require('flowbite/plugin'), // flowbite eklentisini dahil edin
  ],
})
