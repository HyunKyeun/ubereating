import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  makeVar,
  split,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { LOCALSTORAGE_TOKEN } from "./constants";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";

const token = localStorage.getItem(LOCALSTORAGE_TOKEN);
export const isLoggedInVar = makeVar(Boolean(token));
export const authTokenVar = makeVar(token);

// const wsLink = new WebSocketLink({
//   uri: "ws://localhost:4000/graphql",
//   options: {
//     reconnect: true,
//     connectionParams: {
//       "x-jwt": authTokenVar() || "",
//     },
//   },
// });

const wsLink = new GraphQLWsLink(
  createClient({
    // url: `wss://hk-nuber-eats-backend.onrender.com/graphql`,
    url: `ws://localhost:4000/graphql`,
    connectionParams: {
      "x-jwt": authTokenVar() || "",
    },
  })
);

const httpLink = createHttpLink({
  // uri: "https://hk-nuber-eats-backend.onrender.com/graphql",
  uri: "http://localhost:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "x-jwt": authTokenVar() || "",
    },
  };
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  authLink.concat(httpLink)
);

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isLoggedIn: {
            read() {
              return isLoggedInVar();
            },
          },
          token: {
            read() {
              return;
            },
          },
        },
      },
    },
  }),
});
