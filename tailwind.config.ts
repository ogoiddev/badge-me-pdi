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
        light: {
          background: '#ffffff',
          text: '#000000',
        },
        dark: {
          background: '#1a202c',
          text: '#ffffff',
        },
      },
      backgroundImage: {
        'light-gradient': 'linear-gradient(to right, #64b3f4, #c2e59c)',
        'dark-gradient': 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(26,28,27,1) 100%)',
      },
    },
  },
  darkMode: 'class', // ou 'media'
};

export default config;
