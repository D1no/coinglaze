import React from "react";

import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import Header from "./index";

storiesOf("Header", module).add("Title Overwrite", () => (
  <Header
    short={text("Short", "CG")}
    title={text("Title", "Welcome to Coinglaze!")}
    subtitle={text("Subtitle", "All crypto pairs in one glaze.")}
  />
));
