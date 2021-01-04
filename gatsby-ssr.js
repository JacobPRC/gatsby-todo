import React from "react"
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from "@apollo/client"
import { renderToString } from "react-dom/server"
import fetch from "isomorphic-fetch"

import { Provider } from "./identity-context"

// gatsby-ssr is required for build regardless if you plan to support SSR
export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const client = new ApolloClient({
    fetch,
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "https://todochampion.netlify.app/.netlify/functions/graphql",
    }),
  })

  const ConnectedBody = () => (
    <Provider>
      <ApolloProvider client={client}>{bodyComponent}</ApolloProvider>
    </Provider>
  )

  replaceBodyHTMLString(renderToString(<ConnectedBody />))
}
