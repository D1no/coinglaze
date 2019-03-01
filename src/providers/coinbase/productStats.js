import React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";

/**
 * Standard (slow) query, mitigated by provider against rate limiting
 * (Queueing requests on fetch layer)
 * TODO: Split up query... the graphQL DSL is not meant for n+1 subsection conditionals :(
 */
const GET_PRODUCTS = gql`
  query products($baseCurrency: String!, $fetchStats: Boolean!) {
    products @rest(type: "[Product]", path: "/products", endpoint: "coinbase") {
      id @export(as: "id")
      base_currency @export(as: "base")
      quote_currency @export(as: "quote")
      base_min_size
      base_max_size
      quote_increment
      display_name
      status
      margin_enabled # : Boolean
      status_message
      min_market_funds
      max_market_funds
      post_only # : Boolean
      limit_only # : Boolean
      cancel_only # : Boolean
      stats(baseCurrency: $baseCurrency)
        @include(if: $fetchStats)
        @rest(
          type: "[Stats]"
          path: "/products/{exportVariables.base}-{exportVariables.quote}/stats"
          endpoint: "coinbase"
        ) {
        open
        high
        low
        volume
        last
        volume_30day
      }
    }
  }
`;

/**
 * Render Prop Component for an array of stats, using react hooks
 * and an upstream suspense component within the container.
 * TODO: Should incorporate query logic.
 */
function ProductStats({
  onError = error => <>{error.message}</>,
  onNoResult = data => <>No Result!</>,
  onNoBaseCurrency = data => <>Please Select a Base Currency</>,
  baseCurrency = "USD",
  children,
}) {
  const { data, error } = useQuery(GET_PRODUCTS, {
    suspend: true,
    variables: {
      baseCurrency: baseCurrency,
      // This converts baseCurrency to Boolean directive since GraphQL
      // is handling null and undefined differently.
      fetchStats: !!baseCurrency,
    },
  });

  if (error) {
    return onError(error);
  }

  if (!data.products) {
    return onNoResult(data);
  }

  // Filter Empty Pairs
  const productsFiltered = data.products.filter(
    product => ((product || {}).stats || {}).last
  );
  // console.dir(productsFiltered);

  if (!productsFiltered) {
    return onNoBaseCurrency(data);
  }

  return children({ products: productsFiltered });
}

export default ProductStats;
