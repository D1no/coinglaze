import React from "react";
import { Box } from "rebass";
import "styled-components/macro";
import { themeConfig } from "./theme";

const LayoutListRegions = props => (
  <Box
    {...props}
    mx="auto"
    p={[2]}
    css={{
      maxWidth: themeConfig.maxWidth,
    }}
  />
);

export default LayoutListRegions;
