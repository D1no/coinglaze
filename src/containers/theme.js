import React from "react";
import { themeGet } from "styled-system";
/**
 * Macro needed to support the css property without ejecting CRA.
 * Note: Link & Details https://www.styled-components.com/docs/tooling#babel-macro
 */
import { ThemeProvider, createGlobalStyle } from "styled-components/macro";

/**
 * Configuration for Design System Choices
 * Note: Overwrites styled-system defaults incl. responsive properties
 * Link: https://github.com/jxnblk/styled-system/blob/master/docs/table.md
 */
// prettier-ignore
const lightTheme = {
  maxWidth: "1024px",
  breakpoints: [
    "40em", // 00
    "52em", // 01
    "64em", // 02
  ],
  fontSizes: [
    6,   // 00
    8,   // 01
    10,  // 02
    12,  // 03
    16,  // 04
    20,  // 05
    24,  // 06
    32,  // 07
    48,  // 08
    64,  // 09
  ],
  colors: {
    // Main
    black: "#0D121A",
    light: "#C2C3C6",
    white: "#fff",
    // Variations
    gray: "#F6F4F7",
    darkgray: "#86878C",
    red: "#F54949",
  },
  space: [
    0,   // 00
    2,   // 01
    3,   // 02
    5,   // 03
    10,  // 04
    15,  // 05
    20,  // 06
    25,  // 07
    30,  // 08
    45,  // 09
    70,  // 10
    95,  // 11
    120, // 12
    250. // 13
  ],
  heights: {
    dropbox: 40
  },
  fontWeights: {
    get main() { return this.regular },
    // Variations
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },
  fonts: {
    prominent: '"Jua","Roboto","Helvetica Neue",sans-serif',
    main: '"Roboto","Helvetica Neue",sans-serif',
  },
  shadows: {
    card: "0 0 8px 0 rgba(13,18,26,0.19)",
    small: "0 0 4px 0 rgba(13,18,26,0.19)",
    large: "0 0 24px 0 rgba(13,18,26,0.19)",
  },
};

/**
 * Global Reset
 */
const GlobalResetStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

/**
 * Page Styles
 * Note: Place for index.css content / replacement
 */
const GlobalPageStyle = createGlobalStyle`
  body {
    font-family: ${themeGet("fonts.main")};
    font-weight: ${themeGet("fontWeights.main")};
    color: ${themeGet("colors.black")};
    background-size: cover;
    background: linear-gradient(-180deg, #FFFFFF 0%, #F7F6F8 67%, #EAE4F7 100%) no-repeat center center fixed;
  }
`;

/**
 * Theme Container for <App />
 */
export default props => (
  <ThemeProvider theme={lightTheme}>
    <>
      <GlobalResetStyle />
      <GlobalPageStyle />
      {props.children}
    </>
  </ThemeProvider>
);

export { lightTheme, GlobalResetStyle, GlobalPageStyle };
