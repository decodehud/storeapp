/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins, sans-serif",
      },
      colors: {
        "Marian-blue": "#314899",
        "Raisin-black": "#231F20",
        White: "#ffffff",
        Black: "#000000",
        Silver: "#C2C2C2",
        "Dim-gray": "#737373",
        "Floral-white": "F8F4EC",
        Bone: "#E8E0D0",
        "White-smoke": "#F3F3F3",
        Seasalt: "#FAFAFA",
        Periwinkle: "#C7DBFF",
        "Violet-blue": "#4243B1",
        "Violet-blue-2": "#3738A6",
        Aquamarine: "#B2FCE4",
        Red: "#DF1B41",
      },
    },
  },
  plugins: [],
};
