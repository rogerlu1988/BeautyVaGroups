module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: {
          DEFAULT: '#000000', // Black
          light: '#222222',
          dark: '#000000',
        },
        secondary: {
          DEFAULT: '#ffffff', // White
          light: '#f5f5f5',
          dark: '#cccccc',
        },
        accent: {
          DEFAULT: '#e60023', // Sephora red
          light: '#ff385c',
        },
        muted: {
          DEFAULT: '#f6f6f6',
        },
      },
      borderRadius: {
        'xl': '1rem',
      },
    },
  },
  plugins: [],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
