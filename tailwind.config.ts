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
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(100px, 1fr))',
      },
      gridColumn: {
        'span-13': 'span 13 / span 13',
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      }
    },
  },
  plugins: [],
} satisfies Config;
