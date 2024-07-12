/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'radial-gradient(ellipse at bottom, #1b2735 60%, #090a0f 100%)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.1s ease-in-out',
        fadeOut: 'fadeOut 0.1s ease-in-out',
      },
    },
  },
  plugins: [],
}

