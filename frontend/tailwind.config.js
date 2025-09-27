/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
        fontFamily: {
        allison: ["Allison", "cursive"],
        lora: ["Lora", "serif"],
        cormorant: ["Cormorant Garamond", "serif"],
    },
    colors: {
      blush: '#F8C8DC',
      rose: '#FF007F',
      burgundy: '#800020',
      ivory: '#FFFFF0',
      champagne: '#F7E7CE',
      lavender: '#E6E6FA',
    },
  },
  plugins: [],
}
}
;
