/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#140a05',
          900: '#1a0e08',
          800: '#221710',
          700: '#2a1810',
          600: '#3d2817',
          500: '#5a3a23',
        },
        cream: {
          50:  '#f7ecd2',
          100: '#f4e8d0',
          200: '#e8d5b7',
          300: '#d4b896',
          400: '#c9a87c',
          500: '#a58559',
        },
        gold: {
          400: '#d4b56b',
          500: '#c9a559',
          600: '#a8893f',
        },
      },
      fontFamily: {
        heading: ['"Jim Nightshade"', 'cursive'],
        body: ['"Google Sans Flex"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'spin-slow': 'spin 24s linear infinite',
        'flicker': 'flicker 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [],
}
