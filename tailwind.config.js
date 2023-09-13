/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#3498db",
        "blue-light": "#f3f9fd",
        "blue-extralight": "##f7fbfe",
        gray: {
          1: "#111111",
          2: "#222222",
          4: "#444444",
          5: "#555555",
          6: "#5e5e5e",
          7: "#484848",
          8: "#888888",
          9: "#f6f6f6",
          10: "#aaaaaa",
        },
      },
      animation: {
        "up-down": "up-down 2s ease-in-out infinite alternate-reverse both",
      },
      keyframes: {
        "up-down": {
          "0%": { transform: "translateY(10px)" },
          "100%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
