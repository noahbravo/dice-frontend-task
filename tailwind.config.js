module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-color': '#000000',
        'light-container-color': '#E6E6E6',
        'dark-container-color': '#333333',
        'darken-container-color': '#212121',
        'text-color': '#ffffff',
        'accent-color': '#3C74FF',
        'darken-accent-color': '#315FD2'
      },
      maxWidth: {
        'screen-2xl': '1144px',
        'screen-3xl': '1536px'
      }
    },
    fontFamily: {
      primary: "'Favorit', Helvetica, Arial, sans-serif"
    },
    fontSize: {
      'font-sm': '0.875rem' /* 14px */,
      'font-base': '1rem' /* 16px */,
      'font-lg': '1.5rem' /* 24px */,
      'font-xl': '1.75rem' /* 28px */,
      'font-2xl': '2rem' /* 32px */
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
