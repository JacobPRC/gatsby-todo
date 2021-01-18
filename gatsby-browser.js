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
  <ApolloProvider client={client}>{element}</ApolloProvider>
)

// const React = require("react")
// const {
//   ApolloProvider,
//   ApolloClient,
//   HttpLink,
//   InMemoryCache,
// } = require("@apollo/client")
// const { setContext } = require("apollo-link-context")
// const netlifyIdentity = require("netlify-identity-widget")

// const { Provider } = require("./identity-context")

// const authlink = setContext((_, { headers }) => {
//   const user = netlifyIdentity.currentUser()
//   const token = user.token.access_token
//   return {
//     headers: {
//       ...headers,
//       Authorization: token ? `Bearer ${token}` : "",
//     },
//   }
// })

// const httpLink = new HttpLink({
//   uri: "https://todochampion.netlify.app/.netlify/functions/graphql",
//   headers: {
//     "Access-Control-Allow-Origin": "http://localhost:8000/",
//   },
// })

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: authlink.concat(httpLink),
// })

// const wrapRootElement = ({ element }) => {
//   return (
//     <Provider>
//       <ApolloProvider client={client}>{element}</ApolloProvider>
//     </Provider>
//   )
// }

// exports.wrapRootElement = wrapRootElement
