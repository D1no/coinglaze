/**
 * Main page of the app
 */
import React, { Suspense, useState } from "react";
import { Box } from "rebass";

import Layout from "components/layout";
import Header from "components/header";
import HeadSelect from "components/headSelect";
import ProductStats from "providers/coinbase/productStats";
import CardItem from "components/cardItem";

import styled from "styled-components/macro";

const ContentWrapper = styled(Box)`
  max-width: ${props => props.theme.maxWidth};
`;

function Home(props) {
  const [baseCurrency, setBaseCurrency] = useState("EUR");

  return (
    <ContentWrapper mx="auto" p={[0]}>
      <Layout
        debug={false}
        sectionHeader={<Header />}
        sectionTopControl={<HeadSelect />}
      >
        <Suspense fallback={<h4>Loading...</h4>}>
          <ProductStats
            onError={error => <h4>{error.message}</h4>}
            onNoResult={data => <h4>No Result!</h4>}
          >
            {({ products }) =>
              products.map(
                ({
                  id,
                  base_currency,
                  quote_currency,
                  display_name,
                  stats,
                }) => (
                  <CardItem
                    displayName={display_name}
                    baseCurrency={base_currency}
                    quoteCurrency={quote_currency}
                    last={stats.last}
                    highLow={stats.high - stats.low}
                    volume={stats.volume}
                    volume30Day={stats.volume_30day}
                    high={stats.high}
                    low={stats.low}
                    key={id}
                  />
                )
              )
            }
          </ProductStats>
        </Suspense>
      </Layout>
    </ContentWrapper>
  );
}

export default Home;
