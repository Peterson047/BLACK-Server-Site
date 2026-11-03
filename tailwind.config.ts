import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          void: '#08090b',
          panel: '#101317',
          steel: '#242930',
          amber: '#f59e0b',
          red: '#ef4444',
          phosphor: '#10b981',
          discord: '#5865F2',
        },
      },
      fontFamily: {
        mono: ['"Share Tech Mono"', 'monospace'],
        military: ['Teko', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
