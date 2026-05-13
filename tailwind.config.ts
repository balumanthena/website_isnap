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
        enterprise: {
          text: "#0B1020",
          "text-muted": "#5B6475",
          bg: "#F7F8F4",
          "bg-alt": "#F4F5F1",
          surface: "rgba(255,255,255,0.82)", // 0.82 as requested
          green: "#73D978", // Specific green requested
          "green-deep": "#4CB86A",
          border: "rgba(15,23,42,.06)", // 0.06 border
          shadow: "rgba(15,23,42,.04)", // 0.04 shadow
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-satoshi)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "0 8px 20px rgba(15,23,42,.04)",
        "enterprise-card": "0 8px 20px rgba(15,23,42,.04)",
        "enterprise-nav": "0 4px 16px rgba(15,23,42,.02)",
      },
      letterSpacing: {
        hero: "-0.05em",
        institutional: "0.08em",
      },
      lineHeight: {
        hero: "0.94", // 0.94 as requested
      },
      borderRadius: {
        enterprise: "16px", // 16px maximum as requested
        button: "14px",
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
};

export default config;
