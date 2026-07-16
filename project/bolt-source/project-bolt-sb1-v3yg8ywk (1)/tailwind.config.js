/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coral: '#f23f44',
        'coral-hover': '#dc3137',
        'coral-deep': '#a91e23',
        'coral-bright': '#ff7a52',
        'coral-bright2': '#f76a6e',
        ink: '#1a1014',
        body: '#5a4b4e',
        body2: '#6c5a5d',
        muted: '#8a7a7d',
        muted2: '#7c6a6d',
        faint: '#a9999c',
        faint2: '#c9b9bc',
        'rose-50': '#fff8f7',
        'rose-100': '#fff0ef',
        'rose-150': '#fff6f5',
        'rose-200': '#fce0de',
        'rose-250': '#fbe4e5',
        sand: '#fbf3ee',
        warm: '#f0e2e3',
        warm2: '#eaddde',
        warm3: '#f2e3e4',
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
