import React from "react";
import { Box, Card, Heading, Text, Flex } from "rebass";
import { themeGet } from "styled-system";
import styled, { css } from "styled-components/macro";

const Area = styled(Box)`
  ${props =>
    // If debug, and dbg set, show background color to debug view
    props.debug &&
    css`
      background-color: ${props.dbg ? props.dbg : "none"};
    `}
`;

// Underline
const LeadingArea = styled(Area)`
  border-bottom: 1px solid ${themeGet("colors.gray")};
`;

const Badge = styled(Flex)`
  background-color: orange;
  position: relative;
  z-index: 100;

  margin-bottom: -35px;
  border-radius: 100%;

  border: 4px solid white;
  height: 70px;
  width: 70px;
`;

const CardItem = ({
  debug = false,
  displayName = "BTC/EUR",
  baseCurrency = "BTC",
  quoteCurrency = "EUR",
  last = 3543.48,
  highLow = -417.12,
  volume = 1.597,
  volume30Day = 90.892,
  high = 4412.35,
  low = 1234.12,
  ...props
}) => {
  // Design Reference width of the card, used for relative sizing
  const relativeWidth = 345;

  // TODO: This needs to go upstream into the provider and use .requestIdleCallback() to filter proper currency codes
  const displayCurrency = (value, code = quoteCurrency) => {
    try {
      return Number(value).toLocaleString([], {
        style: "currency",
        currency: code,
        currencyDisplay: "symbol",
      });
    } catch (err) {
      return "Err";
    }
  };

  // Product Stats in 2x2 Grid
  const Stats = (
    <>
      <Flex
        flexWrap="wrap"
        p={0}
        width={190 / relativeWidth}
        alignItems="center"
        color="light"
      >
        <Area py={1} width={1 / 2} debug={debug} dbg="purple">
          <Text fontSize={3} textAlign="right" fontWeight="medium">
            {displayCurrency(volume, baseCurrency)}
          </Text>
          <Text fontSize={1} textAlign="right" fontWeight="light">
            Volume
          </Text>
        </Area>
        <Area py={1} width={1 / 2} debug={debug} dbg="purple">
          <Text fontSize={3} textAlign="right" fontWeight="medium">
            {displayCurrency(high)}
          </Text>
          <Text fontSize={1} textAlign="right" fontWeight="light">
            30 Day High
          </Text>
        </Area>
        <Area py={1} width={1 / 2} debug={debug} dbg="purple">
          <Text fontSize={3} textAlign="right" fontWeight="medium">
            {displayCurrency(volume30Day, baseCurrency)}
          </Text>
          <Text fontSize={1} textAlign="right" fontWeight="light">
            30 Day Volume
          </Text>
        </Area>
        <Area py={1} width={1 / 2} debug={debug} dbg="purple">
          <Text fontSize={3} textAlign="right" fontWeight="medium">
            {displayCurrency(low)}
          </Text>
          <Text fontSize={1} textAlign="right" fontWeight="light">
            30 Day Low
          </Text>
        </Area>
      </Flex>
    </>
  );

  return (
    <Box width={1} py={4} px={6}>
      <Badge
        mx={4}
        p={0}
        alignItems="center"
        justifyContent="center"
        fontSize={6}
      >
        <Text color="white" fontFamily="prominent">
          {baseCurrency}
        </Text>
      </Badge>
      <Card px={4} pb={3} borderRadius={12} boxShadow="card" bg="white">
        <Flex flexWrap="wrap">
          <Area p={0} width={80 / relativeWidth} debug={debug} dbg="olive" />
          <LeadingArea
            pl={4}
            pr={3}
            width={75 / relativeWidth}
            debug={debug}
            dbg="yellow"
          >
            <Text
              fontSize={3}
              textAlign="left"
              color="light"
              fontWeight="bold"
              lineHeight={2.5}
            >
              {displayName}
            </Text>
          </LeadingArea>
          <LeadingArea
            p={0}
            width={190 / relativeWidth}
            debug={debug}
            dbg="lightblue"
          >
            <Text fontSize={3} textAlign="right" color="red" lineHeight={2.5}>
              {displayCurrency(highLow)}
            </Text>
          </LeadingArea>
          <Area p={3} width={155 / relativeWidth} debug={debug} dbg="yellow">
            <Heading as="h3" m="none" textAlign="center">
              {displayCurrency(last)}
            </Heading>
          </Area>
          {Stats}
        </Flex>
      </Card>
    </Box>
  );
};

export default CardItem;
