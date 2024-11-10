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
          darker: '#6B8997',
        },
        navy: {
          dark: '#1A2A33',
          semidark: '#1F3641',
          darker: '#10212A',
        },
        blue: {
          light: '#31C3BD',
          hover: '#65E9E4',
          dark: '#118C87',
        },
        yellow: {
          light: '#F2B137',
          hover: '#FFC860',
          dark: '#CC8B13',
        },
      },
      boxShadow: {
        inner: 'inset 0 -8px 0 0',
        'inner-sm': 'inset 0 -4px 0 0',
      },
    },
    fontFamily: {
      sans: ['Outfit', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      xs: [
        '0.75rem',
        {
          lineHeight: '1.1',
          letterSpacing: '0.88px',
          fontWeight: 500,
        },
      ],
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
    borderRadius: {
      sm: '0.3125rem',
      md: '0.625rem',
      lg: '0.9375rem',
    },
    screens: {
      sm: '520px',
    },
  },
  plugins: [],
};
