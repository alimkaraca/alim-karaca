/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'radial-gradient(ellipse at bottom, #1b2735 60%, #090a0f 100%)',
      },
    },
  },
  plugins: [],
}

