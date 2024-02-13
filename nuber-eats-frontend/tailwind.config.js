const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        lime: colors.lime,
      },
    },
  },
  plugins: [],
};
