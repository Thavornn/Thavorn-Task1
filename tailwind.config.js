// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "pages/*.tsx",
    "pages/**/*.tsx",
    "src/ui/**/*.tsx",
    "src/ui/**/**/*.tsx",
  ],
  theme: {
    container: {
      center: true,
    },
    // Replace your standalone `breakpoints` block with this:
    screens: {
      // “xs” will apply styles at max-width: 430px and below
      xs: { max: "430px" },

      // your other breakpoints (min-width)
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1536px",

      // you can still extend or override
      // 2xls: "1535px",
    },
    extend: {
      height: {
        sm: "50px",
      },
      /* …all your other extend values… */
    },
    fontFamily: {
      sans1: ["Archivo", "sans-serif"],
      mono1: ["IBM Plex Mono", "monospace"],
    },
  },
  darkMode: false,
  plugins: [require("tw-elements/dist/plugin")],
};
