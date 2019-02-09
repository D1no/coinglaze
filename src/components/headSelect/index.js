import React from "react";
import { themeGet } from "styled-system";
import styled from "styled-components/macro";
import { Heading, Flex, Box, Text } from "rebass";

const Dropdown = styled(Box)`
  background: none;
  height: ${themeGet("heights.dropbox", 40)}px;

  border-style: solid;
  border-color: ${themeGet("colors.gray")};
  border-width: 0px 0px 1px 0px;
  border-radius: 0px;

  text-align: center;
  text-align-last: center;

  position: relative;

  ::after {
    position: absolute;
    content: "▾";
    opacity: 0.6;

    right: 20px;
    /* Necessary to center the arrow down*/
    top: calc(${themeGet("heights.dropbox", 40)}px*0.5);
    height: 0px;
    line-height: 0px;

    pointer-events: none;
  }

  select {
    appearance: initial;
    border: none;
    background: none;
    height: ${themeGet("heights.dropbox", 40)}px;
    line-height: ${themeGet("heights.dropbox", 40)}px;
  }

  option {
    text-align: left;
  }
`;

const HeadSelect = ({}) => {
  return (
    <Flex pt={4} pb={6} px={9} width={1} bg="">
      <Dropdown as="label" touchHeight={40} width={1}>
        <Box as="select" width={1} fontSize={4} color="darkgray">
          <option value="" disabled selected>
            Base Currency set to EUR
          </option>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="BTC">BTC</option>
          <option value="ETH">ETH</option>
        </Box>
      </Dropdown>
    </Flex>
  );
};

export default HeadSelect;
