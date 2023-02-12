/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Rubik"],
      },
    },
  },
  daisyui: {
    themes: [
      "light, dark",
      {
        myTheme: {},
      },
    ],
  },
  plugins: [require("daisyui")],
};
