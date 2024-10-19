/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      scrollbar: {
        DEFAULT: {
          width: "80px",
          backgroundColor: "transparent",
          borderRadius: "100px",
          "&-thumb": {
            backgroundColor: "#ccc",
            borderRadius: "120px",
          },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
