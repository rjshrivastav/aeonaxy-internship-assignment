/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'm':{'max':"640px"}
    }
  },
  plugins: [require("@tailwindcss/forms")],
}