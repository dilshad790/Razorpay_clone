/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        'deep-blue':'#02042a',
        'light-blue':'#0b72e7'
      },
      fonts:{
        'Mullish':'MulishVariable',
        'apple':' -apple-system'
        
      },
      backgroundImage: {
        'hero-pattern': "url('./assets/hero-shape.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      skew:{
        '15':'15',
        '16':'16'
      }
    },
  },
  plugins: [],
}

