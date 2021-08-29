const colors = require('tailwindcss/colors')

module.exports = {
  // jit doesn't work with xwind 0.8.0
  // enable when this issue is resolved
  // https://github.com/Arthie/xwind/issues/30
  //mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors,
    },
  },
  variants: {},
  plugins: [require('tailwindcss-filters')],
  xwind: {
    mode: 'objectstyles',
  },
}
