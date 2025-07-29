/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './App.jsx',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        /**
         * Primary palette derived from Style Tile Option A – Warm & Inclusive.
         * Use these semantic names rather than hard‑coding hex values in your components.
         */
        primary: '#8B102B',
        secondary: '#2D6A4F',
        accent: '#FBC02D',
        neutralLight: '#F7F7F7',
        neutralDark: '#666666',
      },
      fontFamily: {
        /**
         * Font families correspond to the suggested pairings: Poppins for headings and Roboto for body text.
         * See index.html for the font imports.
         */
        heading: ['Poppins', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};