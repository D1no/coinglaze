import React from "react";
import { Box } from "rebass";
import "styled-components/macro";
import { lightTheme } from "../containers/theme";

const LayoutListRegions = props => (
  <Box
    {...props}
    mx="auto"
    p={[2]}
    css={{
      maxWidth: lightTheme.maxWidth,
    }}
  />
);

export default LayoutListRegions;
