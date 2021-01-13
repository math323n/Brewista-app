module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      button: { DEFAULT: "#ffef00", dark: "#eae377" },
    },
    textColor: {
      gray: "#a1a1a1",
      grayed: "#bfbfbf",
      grayer: "#c9c9c9",
      light: "#F3F4F6",
      dark: "#000",
    },
    borderColor: {
      gray: "#bfbfbf",
    },
    screens: {
      xs: "415px",
      sm: "540px",
      md: "720px",
      lg: "920px",
      xl: "1040px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
