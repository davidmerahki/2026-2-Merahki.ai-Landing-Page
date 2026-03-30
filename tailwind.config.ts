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
