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
  last = 3543.48,
  highLow = -417.12,
  volume = 1.597,
  volume30Day = 90.892,
  high = 4412.35,
  low = 1234.12,
  ...props
}) => {
  return (
    <Box width={1} py={2} px={3}>
      <Area p={0} width={80 / 345} debug={debug} dbg="orange">
        <Heading as="h2" textAlign="center">
          {baseCurrency}
        </Heading>
      </Area>
      <Card px={0} borderRadius={12} boxShadow="0 0 8px 0 rgba(13,18,26,0.19)">
        <Flex flexWrap flexWrap="wrap">
          <Area p={0} width={80 / 345} debug={debug} dbg="orange" />
          <Area p={0} width={70 / 345} debug={debug} dbg="yellow">
            <Text fontSize={0} textAlign="center">
              {displayName}
            </Text>
          </Area>
          <Area p={0} width={5 / 345} debug={debug} dbg="green" />
          <Area p={0} width={190 / 345} debug={debug} dbg="lightblue">
            <Text fontSize={0} textAlign="right">
              {highLow}
            </Text>
          </Area>
          <Area p={3} width={150 / 345} debug={debug} dbg="yellow">
            <Heading as="h3" textAlign="center">
              {last}
            </Heading>
          </Area>
          <Area p={0} width={5 / 345} debug={debug} dbg="green" />

          {/* Product Stats (2x2 Grid) */}
          <Flex flexWrap="wrap" p={0} width={190 / 345} alignItems="center">
            <Area py={1} width={1 / 2} debug={debug} dbg="pink">
              <Text fontSize={1} textAlign="right">
                {volume}
              </Text>
              <Text fontSize={0} textAlign="right">
                Volume
              </Text>
            </Area>
            <Area py={1} width={1 / 2} debug={debug} dbg="pink">
              <Text fontSize={0} textAlign="right">
                {high}
              </Text>
              <Text fontSize={0} textAlign="right">
                30 Day High
              </Text>
            </Area>
            <Area py={1} width={1 / 2} debug={debug} dbg="pink">
              <Text fontSize={1} textAlign="right">
                {volume30Day}
              </Text>
              <Text fontSize={0} textAlign="right">
                30 Day Volume
              </Text>
            </Area>
            <Area py={1} width={1 / 2} debug={debug} dbg="pink">
              <Text fontSize={1} textAlign="right">
                {low}
              </Text>
              <Text fontSize={0} textAlign="right">
                30 Day Low
              </Text>
            </Area>
          </Flex>
        </Flex>
      </Card>
    </Box>
  );
};

export default CardItem;
