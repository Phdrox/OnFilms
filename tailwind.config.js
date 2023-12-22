/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'primary':['Libre Baskerville']
    },
    screens:{
      'phone':{'min':'320px','max':'480px'},
      'tablet':{'min':'481px','max':'1024px'},
      'desktop':'1024px'
    },
    extend: {},
  },
  plugins: [],
}

