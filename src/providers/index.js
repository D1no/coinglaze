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
import { ApolloProvider as ApolloProviderHooks } from "react-apollo-hooks";
import pThrottle from "p-throttle";
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
    jitter: true,
  },
  attempts: {
    max: 5,
    retryIf: (error, _operation) => !!error,
  },
});

/**
 * Note: We could define multiple endpoints.
 * We are using PQueue to enforce a min time safety gap between successive rest calls.
 * This feature block relates to a new issue regarding default queue handling:
 * https://github.com/apollographql/apollo-link-rest/issues/184
 */

const restProviders = new RestLink({
  endpoints: {
    coinbase: baseUrl,
  },
  // Throttle fetches to max 1 concurrent request and min. delay of 0.5 seconds.
  customFetch: pThrottle(
    (...args) => {
      return fetch(...args);
    },
    1,
    500
  ),
});

/**
 * Composing the link of the provider by chaining them
 */
const link = new ApolloLink.from([retryRest, restProviders]);

const Client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

export { Client };

const Provider = props => (
  <ApolloProvider client={Client}>
    <ApolloProviderHooks client={Client}>{props.children}</ApolloProviderHooks>
  </ApolloProvider>
);

export default Provider;
