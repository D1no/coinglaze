/**
 * Provider (Smart Component) of API data
 */

import React from "react";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { RestLink } from "apollo-link-rest";
import { ApolloProvider } from "react-apollo";
import coinbaseConfig from "./coinbase/coinbaseConfig";

const { baseUrl } = coinbaseConfig;

/**
 * Note: We could define multiple endpoints.
 */
const restProviders = new RestLink({
  endpoints: {
    coinbase: baseUrl
  }
})

const restClient = new ApolloClient({
  link: restProviders,
  cache: new InMemoryCache()
})

const Provider = (props) => (
  <ApolloProvider client={restClient}>
    {props.children}
  </ApolloProvider>
);

export default Provider;