/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1B2A4A",
        indigo: {
          DEFAULT: "#2F4B7C",
          dark: "#213A5C",
          light: "#4C6FA3",
        },
        cotton: "#F7F2E7",
        paper: "#FFFDF8",
        marigold: {
          DEFAULT: "#E8974A",
          dark: "#C97A31",
        },
        rope: "#CBBB9C",
        leaf: "#52734D",
      },
      fontFamily: {
        display: ["Newsreader", "serif"],
        body: ["Manrope", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      keyframes: {
        sway: {
          "0%, 100%": { transform: "rotate(-1.5deg)" },
          "50%": { transform: "rotate(1.5deg)" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        sway: "sway 6s ease-in-out infinite",
        rise: "rise 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};
