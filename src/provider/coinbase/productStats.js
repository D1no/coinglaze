import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

/**
 * Standard query build up with expected 429
 */
const Products = gql`
  query products {
    products @rest(type: "[Product]", path: "/products", endpoint: "coinbase") {
      id @export(as: "id")
      base_currency
      quote_currency
      display_name
      stats @rest(type: "Stats", path: "products/{exportVariables.id}/stats", endpoint: "coinbase") {
        open
        high
        low
        volume
        last
      }
    }
  }
`;

/**
 * WIP
 */
const Stats = gql`
  query stats($currencyPair: String!) {
    stats(search: $currencyPair)
  }
`;

class CoinbaseProducts extends Component {

  // ToDo: Refactor out component
  render() {
    const { loading, error, products } = this.props;

    if (loading) {
      return <h4>Loading...</h4>;
    }
    if (error) {
      return <h4>{error.message}</h4>
    }
    if(!products) {
      return <h4>No Result!</h4>;
    }

    return (
      <div>
        {products.map(({ id, base_currency, quote_currency, display_name}) => 
          <div>
            (id: {id}) {display_name}, {base_currency}, {quote_currency}
          </div>
        )}
      </div>
    );
  }
}

const CoinbaseProductsQuery = graphql(Products, {
  props: ({ data }) => {
    
    if(data.loading) {
      return {
        loading: data.loading
      }
    }

    if(data.error) {
      return {
        error: data.error
      }
    }

    return {
      products: data.products,
      loading: false
    }
  }
})(CoinbaseProducts);

export default CoinbaseProductsQuery;