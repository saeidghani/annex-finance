module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Avenir', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '1rem',
        lg: '1rem',
        xl: '1rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#FF9800',
        primaryDark: '#C97629',
        fadeBlack: '#101016',
        secondary: '#5F5F5F',
        gray: '#717579',
        red: '#fd5353',
        darkRed: '#FF0000',
        green: '#3ab67a',
        blue: '#03254C',
        darkBlue: '#140E38',
        darkerBlue: '#101016',
        fadeBlue: '#071625',
      },
      fontSize: {
        24: '24px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      opacity: {},
      spacing: {
        13: '3.25rem',
        17: '4.25rem',
        18: '4.5rem',
        19: '4.75rem',
        21: '5.25rem',
        22: '5.5rem',
        24: '6rem',
        26: '6.5rem',
        36: '9rem',
        200: '50rem',
        240: '60rem',
        280: '70rem',
        300: '75rem',
        320: '80rem',
        360: '90rem',
        400: '100rem',
        '50px': '50px',
        '58px': '58px',
        '150px': '150px',
        '26px': '26px',
        '22px': '22px',
      },
      maxWidth: {
        650: '650px',
        350: '350px',
      },
      maxHeight: { 55: '55px' },
      screens: {},
      lineHeight: {
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
