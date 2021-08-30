module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "2xl": "1400",
        "3xl": "1600",
        "4xl": "1900"
      }
    },
    container: {
      center: true,
      padding: '6rem'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
