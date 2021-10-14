const colors = require('./resources/js/colors');

module.exports = {
    purge: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
          colors: {
              'gray-legal': '#EEEEEE'
          }
      },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: colors.white,
            yellow: colors.yellow,
            red: colors.red,
            gray: colors.trueGray,
            purple: colors.purple,
            indigo: colors.indigo,
            blue: colors.blue,
            pink: colors.pink,
            green: colors.green,
        }
    },
    variants: {
      extend: {},
    },
    plugins: [],
};
