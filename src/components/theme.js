import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

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
  }
`;
/**
 * Configuration for Design System Choices
 * Note: Overwrites styled-system defaults incl. responsive properties
 */
const light = {
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
    <ThemeProvider theme={light} {...props} />
  </>
);
