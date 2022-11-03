// const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
   ],
   theme: {
      extend: {
         colors: {
            primary: '#fe5f0a',
            bog: '#fe5f0a',
            'bog-hover': '#ff7c37',
            fb: 'rgb(57, 117, 234)',
            'fb-hover': 'rgba(57, 117, 234, 0.88)',
            google: '#0F9D58',
         },
      },
   },
   plugins: [require('daisyui')],
   daisyui: {
      themes: [
         {
            light: {
               ...require('daisyui/src/colors/themes')['[data-theme=light]'],

               // button colors
               primary: '#000',
               'primary-focus': '#333333',
               secondary: '#fff',
               'secondary-focus': '#eee',
               'secondary-content': '#000',
               // /.
               '--border-btn': 0,
            },
         },
      ],
   },
};
