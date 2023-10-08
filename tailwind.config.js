module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors:{
      primary:'#476',
      secondary:'#a88c2f',
      secondaryLighter:'#f2992c',
      main:' 	#4CBB17',
      sky:'#5C8EF2'
    },
    fontFamily:{
      sans: ['Roboto','sans-serif'],
      heading: ['Montserrat', 'sans-serif']
    }
    
  },
  },
  plugins: [],
}