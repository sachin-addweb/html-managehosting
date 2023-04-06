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
          primery: {
            normal: '#ee5372',
            darker: '#d2506d',
            darkest: '#e83157',
            lighter: '#fed7de',
            lightest: '#fef6f8',
            bold: '#df163e',
          },
          secondary: {
            dark: "#404d62",
            blue: "#48b3ff",
            'dark-bule': "#309ff0",
            'textbox-border': "#d3d3d3", 
          },
          ternary: {
            white: '#f8f8fe',
            'light-pink': '#d4d4f3',
            'lighter-pink': "#f3f3ff",
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
            'grey - 900': '#212529',
        }

      },
      boxShadow: {
        'shadow-nav': '0 2px 2px hsla(0,0%,92.5%,0.8)',
        'shadow-panel': '0 2 px 4 px rgba(157, 161, 164, 0.2)',
        'shadow-nav': '0 2 px 2 px hsla(0, 0 % , 92.5 % , 0.8)',
        'shadow-mobile': '2 px 2 px 4 px rgba(157, 161, 164, 0.2)',
        'shadow-raised-hover': '0 5 px 10 px rgba(0, 0, 0, 0.1)',
        'shadow-toggle': '0 0 2 px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'sm-laptop': '4px'
      },
      fontSize: {
        fsm: '13px',
      },
      minWidth: {
        '140': '140px'
      },
      transitionProperty: {
        easy : ".3s ease-in-out",
      }

    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    // ...
  ],
  mode: 'jit',
  separator: '_',
};