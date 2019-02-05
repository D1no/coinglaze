import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { configureViewport } from "@storybook/addon-viewport";
import { withKnobs } from "@storybook/addon-knobs";
import Theme from "../src/containers/theme";

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
function addGlobalResetStyle(storyFN) {
  return (
    <Theme>
      {storyFN()}
    </Theme>
  );
}

addDecorator(addGlobalResetStyle);

/**
 * Webpack config: Stories are dynamically required from src folder when
 * the file is called story/stories or appended to name as story / stories
 */
const req = require.context('../src', true, /(\.|^)stor(y|ies)\.(js|jsx|ts|tsx)$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
