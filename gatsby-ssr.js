const React = require("react")
const {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} = require("@apollo/client")
const { setContext } = require("apollo-link-context")
const { createHttpLink } = require("apollo-link-http")
const fetch = require("isomorphic-fetch")
const netlifyIdentity = require("netlify-identity-widget")

const { Provider } = require("./identity-context")
const keys = require("./keys")

const authlink = setContext((_, { headers }) => {
  const user = netlifyIdentity.currentUser()
  const token = user.token.access_token
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  }
})

const httpLink = createHttpLink({
  uri: "https://graphql.fauna.com/graphql",
  fetch,
  headers: {
    Authorization: `Bearer ${kays.SERVER_KEY || process.env.SERVER_KEY}`,
  },
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authlink.concat(httpLink),
})

export const wrapRootElement = ({ element }) => {
  return (
    <Provider>
      <ApolloProvider client={client}>{element}</ApolloProvider>
    </Provider>
  )
}
