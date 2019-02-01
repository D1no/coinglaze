import React from "react";
import { Box, Flex } from "rebass";
import styled, { css } from "styled-components/macro";
import { style } from "styled-system";

/**
 * A custom render prop for responsively displaying sections
 * according to theme breakpoints.
 * Note: https://github.com/jxnblk/styled-system/blob/master/docs/api.md#style
 * Note2: Conditional render is better for performance but more complex.
 */
const responsiveDisplay = style({
  prop: "display",
  cssProperty: "display",
  transformValue: bol => (!bol ? "none" : "inherit"),
});

/**
 * Section style composition incl. a debug view for flexbox
 * behaviors.
 */
const Section = styled(Box)`
  ${responsiveDisplay}

  ${props =>
    // Random background color when debugging view
    props.debug &&
    css`
      background-color: rgb(${Math.random() * 255}, 162, 254);
    `}
`;

/**
 * Responsive Multi-Section Layout
 * Note: See story for composition options
 */
const Layout = ({
  debug = false,
  p = 3,
  sectionHeader = <Box>No components assigned.</Box>,
  sectionTopControl = <Box>No components assigned.</Box>,
  sectionSidebarControl = <Box>No components assigned.</Box>,
  ...props
}) => {
  // Allow section styling from HOC
  let sectionProps = {
    debug,
    p,
  };

  return (
    <Flex flexWrap="wrap">
      <Section data-test="sectionHeader" {...sectionProps} width={1}>
        {sectionHeader}
      </Section>
      <Section
        data-test="sectionTopControl"
        {...sectionProps}
        width={[1, 1, 0]}
        display={[true, false]}
      >
        {sectionTopControl}
      </Section>
      <Section
        data-test="sectionContent"
        {...sectionProps}
        width={[1, 2 / 3, 1 / 2]}
      >
        {props.children}
      </Section>
      <Section
        data-test="sectionSidebarControl"
        {...sectionProps}
        width={[0, 1 / 3, 1 / 2]}
        display={[false, true]}
      >
        {sectionSidebarControl}
      </Section>
    </Flex>
  );
};

export default Layout;
