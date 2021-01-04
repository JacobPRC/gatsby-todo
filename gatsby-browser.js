const React = require("react")
const {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} = require("@apollo/client")
const fetch = require("isomorphic-fetch")

const { Provider } = require("./identity-context")

export const replaceRouterComponent = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "https://todochampion.netlify.app/.netlify/functions/graphql",
    }),
    fetch,
  })

  const ConnectedRouterWrapper = ({ children }) => (
    <ApolloProvider client={client}>
      <Provider>{children}</Provider>
    </ApolloProvider>
  )

  return ConnectedRouterWrapper
}
