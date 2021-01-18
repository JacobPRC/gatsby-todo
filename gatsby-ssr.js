const React = require("react")
const {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} = require("@apollo/client")
const { setContext } = require("apollo-link-context")
const { createHttpLink } = require("apollo-link-http")
const netlifyIdentity = require("netlify-identity-widget")

const { Provider } = require("./identity-context")

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
