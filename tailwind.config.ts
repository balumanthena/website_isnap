import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F0FDF4",
          100: "#DCFCE7",
          200: "#BBF7D0",
          500: "#22C55E",
          600: "#16A34A",
          700: "#15803D",
          900: "#14532D"
        },
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["var(--font-kuenstler)", "Kuenstler 480 BT Roman", "Kuenstler 480 BT", "Kuenstler", "serif"],
        body: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      spacing: {
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        6: "1.5rem",
        8: "2rem",
        12: "3rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem"
      },
      borderRadius: {
        md: "0.5rem",
        xl: "0.75rem",
        pill: "1.25rem",
        "2xl": "1.125rem",
        "3xl": "1.5rem"
      }
    }
  },
  plugins: []
};

export default config;
