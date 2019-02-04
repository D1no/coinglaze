import React from "react";

import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs";

import CardItem from "./index";

storiesOf("Card", module).add("A few cards", () => (
  <>
    <CardItem debug={boolean("Debug View", true)} />
    <CardItem debug={boolean("Debug View", true)} />
    <CardItem debug={boolean("Debug View", true)} />
  </>
));
