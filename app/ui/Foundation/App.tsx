import React from "react";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import { Homepage } from "../Homepage";

const xCSRFfToken = document.querySelector<HTMLMetaElement>(
  "meta[name=csrf-token]"
);

const link = new HttpLink({
  uri: "/graphql",
  credentials: "same-origin",
  headers: {
    "X-CSRF-Token": xCSRFfToken ? xCSRFfToken.content : "",
  },
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Homepage />
    </ApolloProvider>
  );
}
