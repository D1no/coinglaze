/**
 * Provider (Smart Component) of API data
 */

import React from "react";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-link";
import { RestLink } from "apollo-link-rest";
import { RetryLink } from "apollo-link-retry";
import { ApolloProvider } from "react-apollo";
import coinbaseConfig from "./coinbase/coinbaseConfig";

const { baseUrl } = coinbaseConfig;

/**
 * Since we are dealing with a 3rd party API, we need to be careful with rate limiting
 * I.e. coinbase will throw a 429 if over pulled
 */
const retryRest = new RetryLink({
  delay: {
    initial: 1000,
    max: Infinity,
    jitter: true
  },
  attempts: {
    max: 5,
    retryIf: (error, _operation) => !!error
  }
});

/**
 * Note: We could define multiple endpoints.
 */
const restProviders = new RestLink({
  endpoints: {
    coinbase: baseUrl
  }
})

/**
 * Composing the link of the provider by chaining them
 */
const link = new ApolloLink.from([
  retryRest,
  restProviders
])


const Client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
})

export { Client };

const Provider = (props) => (
  <ApolloProvider client={Client}>
    {props.children}
  </ApolloProvider>
);

export default Provider;