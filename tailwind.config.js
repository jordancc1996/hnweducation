/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f4',
          100: '#dcf2e4',
          200: '#bce5cd',
          300: '#8dd1ab',
          400: '#57b582',
          500: '#2c5530',
          600: '#1a3320',
          700: '#15291a',
          800: '#112015',
          900: '#0d1a11',
        },
        gold: {
          50: '#fefdf8',
          100: '#fdf9e7',
          200: '#faf2c4',
          300: '#f6e896',
          400: '#f0d968',
          500: '#c4a962',
          600: '#a68b47',
          700: '#8a6f3a',
          800: '#6f5730',
          900: '#5a4527',
        }
      },
      fontFamily: {
        'bodoni': ['Bodoni Moda', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

