module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      backgroundImage: {
        'FullF': "url('/img/futuroveg.png')",
        'Veganesa': "url('/imageProductos/veganesa.jpg')",

        
      }
    },

    fontFamily: { 

      'rale': ['Raleway', 'sans-serif'],
      'sourceSans': ['Source Sans Pro', 'sans-serif'],
      'Kaushan': ['Kaushan script', 'cursive']
      

    }

  },
  plugins: [],
}