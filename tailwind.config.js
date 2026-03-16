/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1783F0",
        primaryLight: "#3CA8F0",

        secondary: "#34F061",
        secondaryLight: "#BAEF30",

        dark: "#1F2937",
        light: "#F8FAFC"
      }
    },
  },
  plugins: [],
}