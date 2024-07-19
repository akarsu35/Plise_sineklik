/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT')
module.exports = withMT({
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Projenizin kaynak dosyaları
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}', // flowbite içerik yolu
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'), // flowbite eklentisini dahil edin
  ],
})

