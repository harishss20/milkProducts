/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    " 'node_modules/flowbite-react/lib/esm/**/*.js'",
    flowbite.content(),
  ],
  theme: {
    extend: {
      animation: {
        "reveal-left-to-right": "reveal-left-to-right 1s ease-out forwards",
      },
      keyframes: {
        "reveal-left-to-right": {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
      },
      colors: {
        "alice-blue": "#F0F8FF",
        "thick-blue": "#4169E1",
      },
    },
  },
  plugins: [require("flowbite/plugin"), flowbite.plugin()],
};
