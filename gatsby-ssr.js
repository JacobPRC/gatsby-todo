import React from "react"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import { renderToString } from "react-dom/server"
import fetch from "isomorphic-fetch"

import { Provider } from "./identity-context"

// gatsby-ssr is required for build regardless if you plan to support SSR
export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const client = new ApolloClient({
    fetch,
  })

  const ConnectedBody = () => (
    <ApolloProvider client={client}>
      <Provider>{bodyComponent}</Provider>
    </ApolloProvider>
  )

  replaceBodyHTMLString(renderToString(<ConnectedBody />))
}
