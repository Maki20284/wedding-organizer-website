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
  },
  plugins: [],
}
}
;
