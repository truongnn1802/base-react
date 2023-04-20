module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: '#1B73E8'
      }
    }
  },
  plugins: [require('tw-elements/dist/plugin')]
}
