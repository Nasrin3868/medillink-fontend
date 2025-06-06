/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"    
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
    colors:{
      pink:'#fda4af'
    },
    background:{
      'home':"url('./src/assets/images/home.jpeg')"
    },
  },
  plugins: [
    require('flowbite/plugin')  //flowbite plugin
  ],
}

