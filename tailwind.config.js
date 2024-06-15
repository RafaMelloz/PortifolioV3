/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgColor: '#010f23',
        textColor: '#b1bcd5',
        titleColor: '#ccd6f6',
        primaryColor: '#57cbff'
      },
      height:{
        fullScreen: 'calc(100vh - 96px)'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        fira: ['Fira Code', 'monospace'],
        audioWide: ['Audiowide, sans-serif']
      },
    },
  },
  plugins: [],
}