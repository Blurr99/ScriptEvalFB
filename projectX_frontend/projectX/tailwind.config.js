/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "marquee": 'marquee 25s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.9, 0.1) 5',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' },
        }
      },
    
      colors: {
        
        secondary: {
          lightblue:'#CDFAEA',
          lightyellow:'#FFCF96',
          lightorange:'#FF8080',
          lightenglishblue:'#6c8da4',
          darkEnglishblue:'#46627b',
          400:'#000000',
        },
        vercomp: {
          yellow:'#F9F7C9',
          green:'#D5F0C1',
          darkgreen:'#AAD9BB',
          ultradarkgreen:'#80BCBD',
      },
     
      boxShadow: {
        card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'
      }
    },
   
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ['Poppins', "sans-serif"],
        empyrean: "Empyrean" ,
        saveur:'Saveur',
        saveurround:'Saveurround',
        metro:'Metro',
        bluesprits:'BlueSprits',
        bluesprit2:'BlueSpiritsAl',
        bright:'Bright',
        upstroke:'Ustroke',
        starifedemo:'StarifeDemo',
        norwesters:'Norwesters',
        // Add more custom font families as needed
      },
  },
  plugins: [],
}
};
