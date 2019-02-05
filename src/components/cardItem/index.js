import React from "react";
import { Box, Card, Heading, Text, Flex } from "rebass";
import styled, { css } from "styled-components/macro";

const Area = styled(Box)`
  ${props =>
    // If debug, and dbg set, show background color to debug view
    props.debug &&
    css`
      background-color: ${props.dbg ? props.dbg : "none"};
    `}
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
      <Area
        mx={4}
        p={0}
        width={75 / relativeWidth}
        bg="orange"
        debug={debug}
        dbg="orange"
      >
        <Heading as="h2" textAlign="center" color="white">
          {baseCurrency}
        </Heading>
      </Area>
      <Card px={4} pb={3} borderRadius={12} boxShadow="card" bg="white">
        <Flex flexWrap="wrap">
          <Area p={0} width={80 / relativeWidth} debug={debug} dbg="orange" />
          <Area p={0} width={70 / relativeWidth} debug={debug} dbg="yellow">
            <Text
              fontSize={3}
              textAlign="center"
              color="light"
              fontWeight="bold"
              lineHeight={2.5}
            >
              {displayName}
            </Text>
          </Area>
          <Area p={0} width={5 / relativeWidth} debug={debug} dbg="green" />
          <Area p={0} width={190 / relativeWidth} debug={debug} dbg="lightblue">
            <Text fontSize={3} textAlign="right" color="red" lineHeight={2.5}>
              {displayCurrency(highLow)}
            </Text>
          </Area>
          <Area p={3} width={150 / relativeWidth} debug={debug} dbg="yellow">
            <Heading as="h3" m="none" textAlign="center">
              {displayCurrency(last)}
            </Heading>
          </Area>
          <Area p={0} width={5 / relativeWidth} debug={debug} dbg="green" />
          {Stats}
        </Flex>
      </Card>
    </Box>
  );
};

export default CardItem;
