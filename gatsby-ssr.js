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

// import React from "react"
// import {
//   ApolloClient,
//   ApolloProvider,
//   InMemoryCache,
//   HttpLink,
// } from "@apollo/client"
// import { renderToString } from "react-dom/server"
// import fetch from "isomorphic-fetch"

// import { Provider } from "./identity-context"

// // gatsby-ssr is required for build regardless if you plan to support SSR
// export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
//   const client = new ApolloClient({
//     fetch,
//     cache: new InMemoryCache(),
//     link: new HttpLink({
//       uri: "https://todochampion.netlify.app/.netlify/functions/graphql",
//     }),
//   })

//   const ConnectedBody = () => (
//     <Provider>
//       <ApolloProvider client={client}>{bodyComponent}</ApolloProvider>
//     </Provider>
//   )

//   replaceBodyHTMLString(renderToString(<ConnectedBody />))
// }
