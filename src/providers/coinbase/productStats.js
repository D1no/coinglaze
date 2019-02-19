import React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";

/**
 * Standard (slow) query, mitigated by provider against rate limiting
 * (Queueing requests on fetch layer)
 */
const GET_PRODUCTS = gql`
  query products {
    products @rest(type: "[Product]", path: "/products", endpoint: "coinbase") {
      id @export(as: "id")
      base_currency
      quote_currency
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
      stats
        @rest(
          type: "[Stats]"
          path: "/products/{exportVariables.id}/stats"
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
  children,
}) {
  const { data, error } = useQuery(GET_PRODUCTS, { suspend: true });

  if (error) {
    return onError(error);
  }

  if (!data.products) {
    return onNoResult(data);
  }

  return children(data);
}

export default ProductStats;
