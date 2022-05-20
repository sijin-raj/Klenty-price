module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        //custom colors
        'primary': '#5856CE',
        'custom-blue':'#C6C5FA',
        'background':'#EBF6FF',
        'title-1' : '#120155',
        'title-2':'#5856CE',
       },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
