const { check } = require("prettier");
const options = require("./config"); //options from config.js
const colors = require('tailwindcss/colors')

const allPlugins = {
  typography: require("@tailwindcss/typography"),
  forms: require("@tailwindcss/forms"),
  containerQueries: require("@tailwindcss/container-queries"),
};

const plugins = Object.keys(allPlugins)
  .filter((k) => options.plugins[k])
  .map((k) => {
    if (k in options.plugins && options.plugins[k]) {
      return allPlugins[k];
    }
  });

module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: '15px',
      },
      fontFamily : {
        'heading' : ["Lato"] ,
        'pera' : ["Fira Sans"],
      },
      maxHeight: (theme) => ({
        ...theme('spacing'),
        55: '55px',
      }),
      margin: {
        '-25': '-25%',
      },
      transitionDuration: {
        3000: '3000ms',
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/src/assets/images/banner1.jpg')",
        'hero-pattern-2': "linear-gradient(to right bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/src/assets/images/banner2.jpg')",
        'checkbox' : "url('../img/check.svg')",
        'radio' : "url('../img/radio.svg')",
        'circle': "url('../img/circle.svg')",
        'white-circle' : "url('../img/checked-white.svg')",
        'blue-circle' : "url('../img/blue-circle.svg')" 
      },
      backgroundPosition: {
         'left-center' : 'left center' ,
         'right-center' : 'right center'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.slate,
        green: colors.emerald,
        purple: colors.violet,
        yellow: colors.amber,
        pink: colors.fuchsia,
        primary: {
          'blue': '#03588c',
          'blue-shade-1': '#03619a',
          'blue-shade-2': '#046aa9',
          'blue-shade-3': '#0475ba',
          'blue-shade-4': '#0481cd',
          'blue-shade-5': '#037EE6',
          'blue-shade-6': '#ECF6FF',
          'blue-shade-7': '#024670',
          'yellow': '#f2e205',
          'yellow-shade-1': '#dacb05',
          'yellow-shade-2': '#c4b704',
          'yellow-shade-3': '#b0a504',
          'yellow-shade-4': '#9f9403',
        },
        secondary: {
          'black': '#2c2c2c',
          'black-shade-1': '#353535',
          'black-shade-2': '#3f3f3f',
          'black-shade-3': '#4c4c4c',
          'black-shade-4': '#5b5b5b',
          'black-shade-5': '#3c3c3c',
          'black-shade-6': '#817A7A',
          'black-shade-7': '#141414',
          'black-shade-8': '#333333',
          'white': '#ffffff',
          'white-shade-1': '#f5f5f5',
          'white-shade-2': '#e6e6e6',
          'white-shade-3': '#cfcfcf',
          'white-shade-4': '#bababa',
          'white-shade-5': '#a7a7a7',
          'white-shade-6': '#f9f9f9',
          'white-shade-7': '#efefef',
          'white-shade-8': '#d6d6d6',
          'white-shade-9': '#F2F2F2',

        },
        ternary: {
          white: '#f8f8fe',
          'light-pink': '#d4d4f3',
          'lighter-pink': "#f3f3ff",
          'disable': '#e5e5e5',
          'alert-red': '#d12727',
        },
        text: {
          '200': "#aaa",
          '300': "#999",
          '400': "#222",
          '500': "#777",
          '700': "#444",
          '900': "#333",
          'tertiary-hover': '#e4e5e6',
          'grey-100': '#fff',
          'grey-200': '#fcfcfc',
          'grey-300': '#f9fafc',
          'grey-400': '#f5f5f5',
          'grey-500': '#f2f4f6',
          'grey-600': '#eaeaea',
          'grey-700': '#dfdfdf',
          'grey-800': '#bbb',
          'grey-900': '#212529',
          'light' : 'rgba(0,0,0,.125)',
        }

      },
      boxShadow: {
        'shadow-nav': 'inset 2px 1px 4px rgba(0, 0, 0, 0.25)',
        'shadow-panel': '0 2 px 4 px rgba(157, 161, 164, 0.2)',
        'shadow-nav': '0 2 px 2 px hsla(0, 0 % , 92.5 % , 0.8)',
        'shadow-mobile': '2 px 2 px 4 px rgba(157, 161, 164, 0.2)',
        'shadow-raised-hover': '0 5 px 10 px rgba(0, 0, 0, 0.1)',
        'shadow-toggle': '0 0 2 px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'round': '10px 0',
        '60' : '60px',
      },
      minWidth: {
        '120': '120px'
      },
      width: {
        '300' : '300px',
        'w-calc-300' : 'calc(100% - 300px)',
      },
      spacing : {
        '300' : '300px',
        '54': '235px',
      },
      transitionProperty: {
        easy: ".3s ease-in-out",
      },
      borderWidth: {
        '1': '1px',
      },
      screens : {
        'small-desktop' : '1440px',
        'tablet-potrait': '1280px',
        'tablet': '1024px',
        'mobile': '767px',
        'small-mobile' : '576px',
      },
      position: {
        'unset' : 'unset'
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
    // ...
  ],
  mode: 'jit',
  separator: '_',
};