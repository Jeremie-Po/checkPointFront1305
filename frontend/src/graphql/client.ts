import { ApolloClient, InMemoryCache } from "@apollo/client";

const devApiUrl = process.env.NEXT_PUBLIC_APOLLO_URI;

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export default client;
