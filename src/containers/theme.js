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
    background-size: cover;
    background: linear-gradient(-180deg, #FFFFFF 0%, #F7F6F8 67%, #EAE4F7 100%) no-repeat center center fixed;
  }
`;

/**
 * Configuration for Design System Choices
 * Note: Overwrites styled-system defaults incl. responsive properties
 */
const lightTheme = {
  maxWidth: "1024px",
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
