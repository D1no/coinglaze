import React from "react";

import { storiesOf } from "@storybook/react";
import { boolean, number, text } from "@storybook/addon-knobs";

import Layout from "./index";

storiesOf("Layout", module).add("Show Sections", () => (
  <Layout
    debug={boolean("Debug View", true)}
    p={number("Padding Scale", 3, { range: true, min: 0, max: 8, step: 1 })}
  >
    <div>{text("Text Content", "This is the Content Area!")}</div>
  </Layout>
));
