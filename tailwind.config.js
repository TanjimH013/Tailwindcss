/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge:["./dist/**/*.{html,js}"],
  darkMode: "media", // or "media" or "class"
  content: ["./dist/**/*.{html,js}"],
   
  theme: {
    extend: {},
  },
  variants:{
    extend: {},
  },
  
  plugins: [],
}
