module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-color': '#121212',
        'light-container-color': '#E6E6E6',
        'dark-container-color': '#333333',
        'text-color': '#ffffff',
        'accent-color': '#3C74FF'
      }
    },
    fontFamily: {
      primary: "'Favorit', Helvetica, Arial, sans-serif"
    },
    typeScale: {
      'text-sm': '0.875rem' /* 14px */,
      'text-base': '1rem' /* 16px */,
      'text-lg': '1.5rem' /* 24px */,
      'text-xl': '1.75rem' /* 28px */,
      'text-2xl': '2rem' /* 32px */
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
