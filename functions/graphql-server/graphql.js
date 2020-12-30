const { ApolloServer, gql } = require("'apollo-server-lambda")

const TypeDefs = gql`
type Query: {
    hello: String
}
`
const resolvers = {
  Query: {
    hello: () => "Hello World",
  },
}

const server = new ApolloServer({
  TypeDefs,
  resolvers,
})

playground: true
introspection: true
