/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      primary: {
        DEFAULT: '#38bdf8',
        focus: '#09a8ec',
        content: '#002b3d',
      },
      secondary: {
        DEFAULT: '#818cf8',
        focus: '#5162f5',
        content: '03093a',
      },
      accent: {
        DEFAULT: '#f471b5',
        focus: '#f1419c',
        content: '#39041f',
      },
      neutral: {
        DEFAULT: '#1e293b',
        focus: '#273449',
        content: '#b3ccf5',
      },
      base: {
        100: '#0f1729',
        200: '#0e1525',
        300: '#0c1322',
        content: '#b3c5ef',
      },
      info: {
        DEFAULT: '#0ca6e9',
        content: '#ccf0ff',
      },
      success: {
        DEFAULT: '#2bd4bd',
        content: '#00332c',
      },
      warning: {
        DEFAULT: '#f4c152',
        content: '#422d00',
      },
      error: {
        DEFAULT: '#fb6f84',
        content: '#47000b',
      },
    },
    extend: {},
  },
  plugins: [],
};
