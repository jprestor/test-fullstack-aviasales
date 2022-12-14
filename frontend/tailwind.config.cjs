/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  corePlugins: {
    container: false,
  },
  content: [
    './index.html',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/App.tsx',
  ],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          maxWidth: '994px',
          margin: '0 auto',
          padding: '0 40px',
          '@screen lg': {
            padding: '0 20px',
          },
        },
      });
    }),
  ],
};
