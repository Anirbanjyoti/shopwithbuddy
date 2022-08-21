/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        partstheme: {
          primary: "#617000",
          secondary: "#C7B340",
          accent: "#F9CCCC",
          // neutral: "#3d4451",
          neutral: "#ECEEF0",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}