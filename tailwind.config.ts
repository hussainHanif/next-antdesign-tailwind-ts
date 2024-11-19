import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#441151',
        secondary: '#EE85B5',
        violet: '#883677',
        congo: '##FF958C',
        success: '#5FC790',
        warning: '#FFA600',
        danger: '#FF5630',
        dark: '#2E3A44',
        info: '#1CA7EC',
        black: '#2E3A44',
        grey1: '#A0AABF',
        grey2: '#C0C6D4',
        grey3: '#E3E8F1',
        light: '#F9FBFC',
        white: '#FFF'
      },
    },
  },
  plugins: [],
} satisfies Config;
