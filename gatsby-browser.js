const React = require("react")
const {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} = require("@apollo/client")
const { setContext } = require("apollo-link-context")
const { createHttpLink } = require("apollo-link-http")
const fetch = require("isomorphic-fetch")
const keys = require("./keys")
const { Provider } = require("./identity-context")

const httpLink = createHttpLink({
  uri: "https://graphql.fauna.com/graphql",
  fetch,
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${keys.SERVER_KEY || process.env.SERVER_KEY}`,
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export const wrapRootElement = ({ element }) => (
  <Provider>
    <ApolloProvider client={client}>{element}</ApolloProvider>
  </Provider>
)
