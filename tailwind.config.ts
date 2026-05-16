import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm':  '480px',   // mobile landscape
      'md':  '768px',   // tablet portrait
      'lg':  '1024px',  // tablet landscape / laptop
      'xl':  '1280px',  // desktop
      '2xl': '1440px',  // wide desktop
    },
    extend: {
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
      },
      colors: {
        background: "var(--color-cream)",
        foreground: "var(--color-ink)",
        cream: "var(--color-cream)",
        ink: "var(--color-ink)",
        gold: "var(--color-gold)",
        crimson: "var(--color-crimson)",
        sky: "var(--color-sky)",
        ember: "var(--color-ember)",
        peach: "var(--color-peach)",
      },
      fontFamily: {
        serif: ["var(--font-serif)"],
        sans: ["var(--font-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
