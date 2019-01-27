import React from "react";

import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import Header from "../components/header";

storiesOf("Header", module).add("Custom Title", () => (
  <Header title={text("Title Overwrite", "This is a test title overwrite!")} />
));
