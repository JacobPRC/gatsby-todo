import React from "react"
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client"

import { Provider } from "./identity-context"

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://todochampion.netlify.app/.netlify/functions/graphql",
  }),
})

const wrapRootElement = ({ element }) => {
  return (
    <Provider>
      <ApolloProvider client={client}>{element}</ApolloProvider>
    </Provider>
  )
}

exports.wrapRootElement = wrapRootElement
