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
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-size: cover;
    background: linear-gradient(-180deg, #FFFFFF 0%, #F7F6F8 67%, #EAE4F7 100%) no-repeat center center fixed;
  }
`;
/**
 * Configuration for Design System Choices
 * Note: Overwrites styled-system defaults incl. responsive properties
 */
const themeConfig = {
  maxWidth: "1024px",
  fonts: {
    sans: "system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
};

/**
 * Theme Container for <App />
 */
export default props => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={themeConfig} {...props} />
  </>
);

export { themeConfig };
