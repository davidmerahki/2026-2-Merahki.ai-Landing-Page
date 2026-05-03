import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#000000",
        deep: "#0a0010",
        "glow-indigo": "#3b1fc1",
        "glow-rust": "#c14a1f",
        "accent-peach": "#f4a27a",
        "accent-purple": "#a855f7",
        "accent-blue": "#3b82f6",
        "accent-pink": "#ec4899",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        xs:   ["clamp(0.75rem, 0.7rem + 0.25vw, 0.8125rem)",   { lineHeight: "1.6" }],
        sm:   ["clamp(0.875rem, 0.83rem + 0.25vw, 0.9375rem)",  { lineHeight: "1.6" }],
        base: ["clamp(1rem, 0.95rem + 0.25vw, 1.125rem)",       { lineHeight: "1.6" }],
        lg:   ["clamp(1.125rem, 1rem + 0.5vw, 1.25rem)",        { lineHeight: "1.6" }],
        xl:   ["clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)",       { lineHeight: "1.35" }],
        "2xl": ["clamp(1.5rem, 1.25rem + 1vw, 1.875rem)",       { lineHeight: "1.35" }],
        "3xl": ["clamp(1.75rem, 1.4rem + 1.5vw, 2.25rem)",      { lineHeight: "1.2" }],
        "4xl": ["clamp(2rem, 1.5rem + 2vw, 3rem)",              { lineHeight: "1.2" }],
        "5xl": ["clamp(2.25rem, 1.6rem + 2.5vw, 3.75rem)",      { lineHeight: "1.1" }],
      },
      backgroundImage: {
        "gradient-peach-purple": "linear-gradient(90deg, #f4a27a, #a855f7)",
        "gradient-blue-pink": "linear-gradient(90deg, #3b82f6, #ec4899)",
        "gradient-purple-blue": "linear-gradient(135deg, #a855f7, #3b82f6)",
      },
      animation: {
        "scroll-left": "scrollLeft 30s linear infinite",
        "scroll-right": "scrollRight 30s linear infinite",
      },
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
