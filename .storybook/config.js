import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { configureViewport } from "@storybook/addon-viewport";
import { withKnobs } from "@storybook/addon-knobs";
import { GlobalResetStyle } from "../src/components/theme";

/**
 * Viewport Preview
 */
configureViewport({
  defaultViewport: "iphone6",
});

/**
 * Knobs Options
 */
addDecorator(withKnobs);

/**
 * Global Style Reset for all Styled Components
 */
function addGlobalResetStyle(storyFn) {
  return (
    <>
      <GlobalResetStyle />
      {storyFn()}
    </>
  );
}

addDecorator(addGlobalResetStyle);

/**
 * Path to Stories
 */
function loadStories() {
  require("../src/stories");
}

configure(loadStories, module);
