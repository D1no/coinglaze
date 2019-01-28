/**
 * Main page of the app
 */
import React from "react";
import { Box } from "rebass";

import Header from "../../components/header";
import CoinbaseProductsQuery from "../../providers/coinbase/productStats";

import styled from "styled-components/macro";

const ContentWrapper = styled(Box)`
  max-width: ${props => props.theme.maxWidth};
`;

const Home = props => (
  <ContentWrapper mx="auto" p={[2]}>
    <div>
      <Header />
    </div>
    <CoinbaseProductsQuery />
  </ContentWrapper>
);

export default Home;
