import React from "react";
/**
 * Macro needed to support the css property without ejecting CRA.
 * Note: Link & Details https://www.styled-components.com/docs/tooling#babel-macro
 */
import { ThemeProvider, createGlobalStyle } from "styled-components/macro";

/**
 * Global App Styles
 * Note: Place for index.css content / replacement
 */
const GlobalResetStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

// Place for Page Styling
const GlobalPageStyle = createGlobalStyle`
  body {
    color: #0D121A;
    background-size: cover;
    background: linear-gradient(-180deg, #FFFFFF 0%, #F7F6F8 67%, #EAE4F7 100%) no-repeat center center fixed;
  }
`;

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
    white: "#fff",
    gray: "#F6F4F7",
    light: "#C2C3C6",
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
  fontWeights: {
    light: 300,
    medium: 500,
    bold: 800,
  },
  shadows: {
    card: "0 0 8px 0 rgba(13,18,26,0.19)",
    small: "0 0 4px 0 rgba(13,18,26,0.19)",
    large: "0 0 24px 0 rgba(13,18,26,0.19)",
  },
};

/**
 * Theme Container for <App />
 */
export default props => (
  <>
    <GlobalResetStyle />
    <GlobalPageStyle />
    <ThemeProvider theme={lightTheme} {...props} />
  </>
);

export { lightTheme, GlobalResetStyle, GlobalPageStyle };
