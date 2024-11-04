/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        silver: {
          dark: '#A8BFC9',
          light: '#DBE8ED',
        },
        navy: {
          dark: '#1A2A33',
          semidark: '#1F3641',
        },
        blue: {
          light: '#31C3BD',
          hover: '#65E9E4',
        },
        yellow: {
          light: '#F2B137',
          hover: '#FFC860',
        },
      },
    },
    fontFamily: {
      sans: ['Outfit', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      base: [
        '0.875rem',
        {
          lineHeight: '1.1',
          letterSpacing: '0.88px',
          fontWeight: 500,
        },
      ],
      sm: [
        '1rem',
        {
          letterSpacing: '1px',
          fontWeight: 700,
        },
      ],
      md: [
        '1.25rem',
        {
          letterSpacing: '1.25px',
          fontWeight: 700,
        },
      ],
      lg: [
        '1.5rem',
        {
          letterSpacing: '1.5px',
          fontWeight: 700,
        },
      ],
      xl: [
        '2.5rem',
        {
          letterSpacing: '2.5px',
          fontWeight: 700,
        },
      ],
    },
  },
  plugins: [],
};
