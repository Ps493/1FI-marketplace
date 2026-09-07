/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // 1Fi brand: primary purple from 1fi.in theme-color meta tag
        brand: {
          50: '#F4EEFC',
          100: '#E6D9F8',
          200: '#CDB3F1',
          300: '#AE85E7',
          400: '#8E56DC',
          500: '#6C28D9', // core brand purple
          600: '#5A20B5',
          700: '#481991',
          800: '#36126D',
          900: '#240C49',
        },
        ink: {
          900: '#14121A',
          700: '#302B3B',
          500: '#635C70',
          300: '#A29CAE',
          100: '#E7E3EE',
        },
        surface: '#FFFFFF',
        canvas: '#F7F5FB',
        success: '#1E9E6B',
        danger: '#D8433C',
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(20,18,26,0.06), 0 4px 16px rgba(20,18,26,0.06)',
        sheet: '0 -8px 30px rgba(20,18,26,0.16)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
};
