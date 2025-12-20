/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        paper: '#fffdf5', // Warm white paper
        ink: '#18181b', // Sharpie black
        primary: {
          light: '#ff8787',
          DEFAULT: '#ff6b6b', // Pastel Red
          dark: '#fa5252',
        },
        secondary: {
          light: '#79ebe1',
          DEFAULT: '#4ecdc4', // Pastel Teal
          dark: '#3db9b0',
        },
        accent: {
          DEFAULT: '#ffeaa7', // Highlighter Yellow
          glow: '#fdcb6e',
        },
        dark: {
          bg: '#18181b',
          card: '#27272a',
          text: '#f4f4f5',
          muted: '#a1a1aa',
        }
      },
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif'],
        heading: ['"Patrick Hand"', 'cursive'],
      },
      boxShadow: {
        'hard': '4px 4px 0px 0px #18181b',
        'hard-sm': '2px 2px 0px 0px #18181b',
        'hard-xl': '8px 8px 0px 0px #18181b',
      },
      borderRadius: {
        'hand': '255px 15px 225px 15px / 15px 225px 15px 255px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
