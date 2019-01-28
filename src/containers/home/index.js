/**
 * Main page of the app
 */
import React, { Component } from "react";
import { Box } from "rebass";

import Header from "../../components/header";
import CoinbaseProductsQuery from "../../providers/coinbase/productStats";

import "styled-components/macro";
import { lightTheme } from "../theme";

const Home = props => (
  <Box
    {...props}
    mx="auto"
    p={[2]}
    css={{
      maxWidth: lightTheme.maxWidth,
    }}
  >
    <div>
      <Header />
    </div>
    <CoinbaseProductsQuery />
  </Box>
);

export default Home;
