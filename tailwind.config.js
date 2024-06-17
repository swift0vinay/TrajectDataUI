/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navbar_bg: "#273745",
        button_bg: "#216550",
        light_red: "#f7ac9b",
        light_green: "#d1e0d9",
        light_yellow: "#f9cf8f",
        font_bg: "#cccccc"
      }
    },
  },
  plugins: [],
};


// blue: #273745
// green: #216550
// light red : #f7ac9b
// light green : #d1e0d9
// light yellow: #f9cf8f