const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [require('postcss-import'),require('tailwindcss/nesting'),tailwindcss('./tailwind.config.cjs'), autoprefixer],
};