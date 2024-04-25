/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FE8C00',
        secondary: '#EDEDED',
        background: '#FFFFFF',
        text:'#101010',
        tex2t: '#878787',
      },
      fontFamily: {
        Black: 'Merriweather-Black',
        BlackItalic: 'Merriweather-BlackItalic',
        Bold: 'Merriweather-Bold',
        BoldItalic: 'Merriweather-BoldItalic',
        Italic: 'Merriweather-Italic',
        Light: 'Merriweather-Light',
        LightItalic: 'Merriweather-LightItalic',
        Regular: 'Merriweather-Regular',
      },
    },
    plugins: [],
  },
};
