/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        paper: "#fdfaf6", // Warm off-white paper
        ink: "#18181b", // Sharpie black
        primary: {
          light: "#ff8787",
          DEFAULT: "#ff6b6b", // Pastel Red
          dark: "#fa5252",
        },
        secondary: {
          light: "#79ebe1",
          DEFAULT: "#4ecdc4", // Pastel Teal
          dark: "#3db9b0",
        },
        accent: {
          DEFAULT: "#ffeaa7", // Highlighter Yellow
          glow: "#fdcb6e",
        },
        dark: {
          bg: "#18181b",
          card: "#27272a",
          text: "#f4f4f5",
          muted: "#a1a1aa",
        },
        wc: {
          blue: "#16b8f3",
          rose: "#f783ac",
          teal: "#20c997",
          yellow: "#fab005",
          violet: "#9775fa",
          orange: "#ffa94d",
        },
      },
      fontFamily: {
        sans: ['"Outfit"', "sans-serif"],
        heading: ['"Outfit"', "sans-serif"],
        cursive: ['"Patrick Hand"', "cursive"],
      },
      boxShadow: {
        hard: "4px 4px 0px 0px #18181b",
        "hard-sm": "2px 2px 0px 0px #18181b",
        "hard-xl": "8px 8px 0px 0px #18181b",
      },
      borderRadius: {
        hand: "255px 15px 225px 15px / 15px 225px 15px 255px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      keyframes: {
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        slideDown: "slideDown 0.3s ease-out forwards",
        fadeIn: "fadeIn 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
