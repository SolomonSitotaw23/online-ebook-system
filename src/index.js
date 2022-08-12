import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  makeVar,
} from "@apollo/client";
import store from "./redux/store";
import { Provider } from "react-redux";

import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "http://localhost:8080/v1/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = "myadminsecretkey";
  return {
    headers: {
      ...headers,
      "x-hasura-admin-secret": `${token}`,
    },
  };
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: cache,
});
const cartItemsVar = makeVar("hello");
console.log(cartItemsVar());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  </Provider>
);
