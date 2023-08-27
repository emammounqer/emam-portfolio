/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00fff0",
        section: "#17bebb",
        bg: "#2f6690",
        assent: "#a14a76",
      },
    },
  },
  plugins: [],
};
