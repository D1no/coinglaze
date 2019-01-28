import React from "react";

import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import Header from "./index";

storiesOf("Header", module).add("Title Overwrite", () => (
  <Header title={text("Title Overwrite", "This is a test title overwrite!")} />
));
