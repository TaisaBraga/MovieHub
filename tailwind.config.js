/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        literata: ['"Literata"', 'serif'],
      },
      keyframes: {
        shine: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "pulse-glow": {
          "0%, 100%": { textShadow: "0 0 10px #d15f02, 0 0 20px #d15f02" },
          "50%": { textShadow: "0 0 30px #ff7a00, 0 0 60px #ff7a00" },
        },
      },
      animation: {
        shine: "shine 1.8s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
