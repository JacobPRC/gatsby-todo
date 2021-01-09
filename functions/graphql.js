const { ApolloServer, gql } = require("apollo-server-lambda")
const faunadb = require("faunadb")

const keys = require("../keys")

const q = faunadb.query

const client = new faunadb.Client({ secret: keys.FAUNA || process.env.FAUNA })

const typeDefs = gql`
  type Query {
    todos(user: ID!): [Todo]!
  }
  type Todo {
    id: ID
    text: String
    done: Boolean
  }
  type Mutation {
    addTodo(text: String!, user: ID!): Todo
    updateTodoDone(id: ID!): Todo
  }
`

const resolvers = {
  Query: {
    todos: async (parent, { user }) => {
      if (!user) {
        return []
      }
      const results = await client.query(
        q.Paginate(q.Match(q.Index("todos_by_user"), user))
      )
      //need to find out what is being returned from results. This may be the err
      //have to try 2 redeploy this see what comes out from it. netlify is down
      return results.data.map(item => {
        return console.log(results)
        const obj = { text: item[1], done: item[2] }
        return obj
      })
    },
  },
  Mutation: {
    addTodo: async (_, { text, user }) => {
      const results = await client.query(
        q.Create(q.Collection("todos"), {
          data: {
            text,
            done: false,
            owner: user,
          },
        })
      )
      const balls = {
        ...results.data,
        id: results.ref.id,
      }
      return console.log(balls)
    },
    updateTodoDone: async (_, { id }, { user }) => {
      const results = await client.query(
        q.Update(q.Ref(q.Collection("todos"), id), {
          data: {
            done: true,
          },
        })
      )
      return {
        ...results.data,
        id: results.ref.id,
      }
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ context }) => {
    if (context.clientContext.user) {
      return { user: context.clientContext.user.sub }
    } else {
      return {}
    }
  },
  playground: true,
  introspection: true,
})

exports.handler = server.createHandler({
  cors: {
    origin: "*",
    credentials: true,
  },
})
