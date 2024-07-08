/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mint: '#45BFA9',
        lightMint: '#A7D9D0', 
        myPink: '#D96C9F'
        lightPink: '#F2D0DD'
      }
    },
  },
  plugins: [],
}

