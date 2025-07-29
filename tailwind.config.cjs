/**
 * Tailwind CSS configuration for the SmartMatch UI overhaul.
 *
 * This configuration extends the default theme with the palette and
 * typography defined in Style Tile Option A (Warm & Inclusive).  Colour
 * tokens are provided as semantic names so you can reference them
 * throughout the components without hard coding hex values.  Fonts are
 * defined for headings and body text, matching the Poppins and Roboto
 * families imported in index.html.
 */
module.exports = {
  content: [
    './index.html',
    './App.jsx',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B102B',
        secondary: '#2D6A4F',
        accent: '#FBC02D',
        neutralLight: '#F7F7F7',
        neutralDark: '#666666',
      },
      fontFamily: {
        // Primary font pairings.  Provide both camelCase and kebab-case
        // aliases so classes like `font-heading` still work.
        fontHeading: ['Poppins', 'sans-serif'],
        fontBody: ['Roboto', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};