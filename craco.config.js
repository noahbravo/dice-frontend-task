module.exports = {
  babel: {
    type: 'extends',
    presets: ['@emotion/babel-preset-css-prop']
  },
  style: {
    postOptions: {
      plugins: [require('tailwindcss'), require('autoprefixer')]
    }
  }
}
