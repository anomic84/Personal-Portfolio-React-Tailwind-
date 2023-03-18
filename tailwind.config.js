/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1550px',
        '4xl': '1920px',
      },
      fontFamily: {
        'climate': 'Climate Crisis, cursive',
        'manrope': 'Manrope, sans-serif'
      },
      // backgroundImage: {
      //   'gradientbg': 'radial-gradient(circle_at_left, var(--tw-gradient-stops))',
      // },
      colors: {
        gradienttext1: 'linear-gradient(89.97deg, #530E1A 1.84%, #af5963 102.67%)',
        gradienttext2: 'linear-gradient(121.57deg, #FFFFFF 18.77%, #d8bfbf 60.15%)',
        gradientbar: 'linear-gradient(103.22deg, #530E1A -13.86%, #af5963 99.55%)',
        whitebg: '#C1C6BF',
        sctext: '#530E1A',
        scred: '#530E1A',
        scredhover: '#8c2436',
        scwhite: '#C1C6BF',
        scwhitehover: '#BEBD7E',
        projcolor: '#9cc9e3',
        iconbg: '#212d45'
      },
    },
  },
  plugins: [],
}
