import React from "react";
import styled from "styled-components/macro";
import { Heading, Flex, Box, Text } from "rebass";

// TODO: Make Logo responsive via responsive props
const Logo = styled(Flex)`
  border-radius: 100%;
  height: 42px;
  width: 42px;
`;

// TODO: Make Component View debuggable (background)
// TODO: Align Logo with badges of cards
const Header = ({
  short = "CG",
  title = "Welcome to Coinglaze!",
  subtitle = "All crypto pairs in one glaze.",
}) => {
  return (
    <Flex
      py={6}
      px={8}
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
    >
      <Box width={1 / 5}>
        <Logo
          mx={4}
          p={0}
          alignItems="center"
          justifyContent="center"
          fontSize={5}
          bg="gray"
        >
          <Text color="light" fontFamily="prominent">
            {short}
          </Text>
        </Logo>
      </Box>
      <Box width={4 / 5}>
        <Heading as="h2" data-test="title" color="light" fontFamily="prominent">
          {title}
        </Heading>
        <Text data-test="subtitle" fontSize={3} color="light">
          {subtitle}
        </Text>
      </Box>
    </Flex>
  );
};

export default Header;
