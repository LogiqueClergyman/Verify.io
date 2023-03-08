/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#121829",
          "200": "#000910",
          "300": "rgba(0, 0, 0, 0.2)",
          "400": "rgba(0, 9, 16, 0.2)",
        },
        turquoise: { "100": "#38d9ba", "200": "rgba(56, 217, 186, 0)" },
        white: "#fff",
      },
      fontFamily: { "ibm-plex-sans": "'IBM Plex Sans'" },
      borderRadius: { base: "18px" },
    },
    fontSize: { base: "14px", lg: "18px", xl: "48px" },
  },
  corePlugins: { preflight: false },
};
