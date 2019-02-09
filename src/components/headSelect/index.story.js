import React from "react";

import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import HeadSelect from "./index";

storiesOf("HeadSelect", module).add("Placeholder Call to Action", () => (
  <HeadSelect />
));
