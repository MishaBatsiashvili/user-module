/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#fe5f0a',
        'bog': '#fe5f0a',
        'fb': '#3975EA',
        'google': '#0F9D58',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#5F9DF7',
          'primary-focus': '#1746A2',
        },
      }
    ],
  }
};
