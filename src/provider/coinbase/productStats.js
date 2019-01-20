import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Client } from "../index";

/**
 * Standard (slow) query, mitigated by provider against rate limiting
 * (Queueing requests on fetch layer)
 */
const Products = gql`
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
      stats @rest(type: "[Stats]", path: "/products/{exportVariables.id}/stats", endpoint: "coinbase") {
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
 * Mocking Component
 * ToDo: Factor out
 */

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
        <h4>Product Pairs</h4>
        {products.map(({ id, base_currency, quote_currency, display_name, margin_enabled, stats}) => 
          <div key={id}>
            (id: {id}) {display_name}, {base_currency}, {quote_currency}, {margin_enabled ? "Yes!" : "No!"}, last: {stats.last}, open: {stats.open}, high: {stats.high}, low: {stats.low} 
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