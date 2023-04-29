/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce-slow 4s ease-in-out infinite',
      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(20px)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

