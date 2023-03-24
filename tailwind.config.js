module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'PT Mono',
      secondary: 'Alkatra',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#22D3EE', //cyan-400
      },
      backgroundImage: {
        site: "url('./assets/site-bg-cyan.jpg')",
        about: "url('./assets/about.png')",
      },
    },
  },
  plugins: [],
};
