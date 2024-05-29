/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          Scissors: "hsl(39, 89%, 49%)",
          Paper: "hsl(230, 89%, 62%)",
          Rock: "hsl(349, 71%, 52%)",
        },
        Neutral: {
          Dark: "hsl(229, 25%, 31%)",
          Score: "hsl(229, 64%, 46%)",
          Header: "hsl(217, 16%, 45%)",
        },
        Background: "hsl(214, 47%, 23%)",
      },
    },
  },
  plugins: [],
};
