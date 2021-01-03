const React = require("react")
const {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} = require("@apollo/client")

const { Provider } = require("./identity-context")

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
