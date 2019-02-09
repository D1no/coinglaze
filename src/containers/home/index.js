/**
 * Main page of the app
 */
import React from "react";
import { Box } from "rebass";

import Layout from "components/layout";
import Header from "components/header";
import HeadSelect from "components/headSelect";
import CoinbaseProductsQuery from "providers/coinbase/productStats";

import styled from "styled-components/macro";

const ContentWrapper = styled(Box)`
  max-width: ${props => props.theme.maxWidth};
`;

const Home = props => (
  <ContentWrapper mx="auto" p={[0]}>
    <Layout
      debug={false}
      sectionHeader={<Header />}
      sectionTopControl={<HeadSelect />}
    >
      <CoinbaseProductsQuery />
    </Layout>
  </ContentWrapper>
);

export default Home;
