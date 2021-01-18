require("dotenv").config()
const { createHttpLink } = require("apollo-link-http")
const {
  ApolloServer,
  makeRemoteExecutableSchema,
  introspectSchema,
} = require("apollo-server-micro")
const fetch = require("isomorphic-fetch")
const keys = require("../keys")

const link = createHttpLink({
  uri: "https://graphql.fauna.com/graphql",
  fetch,
  headers: {
    Authorization: `Bearer ${keys.SERVER_KEY || process.env.SERVER_KEY}`,
  },
})

const schema = makeRemoteExecutableSchema({
  schema: introspectSchema(link),
  link,
})

const server = new ApolloServer({
  schema,
  introspection: true,
})

exports.handler = server.createHandler({
  cors: {
    origin: "*",
    credentials: true,
  },
})

// const { ApolloServer, gql } = require("apollo-server-lambda")
// const faunadb = require("faunadb")

// const keys = require("../keys")

// const q = faunadb.query

// const client = new faunadb.Client({ secret: keys.FAUNA || process.env.FAUNA })

// const resolvers = {
//   Query: {
//     todos: async (parent, { user }) => {
//       if (!user) {
//         return []
//       }
//       const result = await client.query(
//         q.Map(
//           q.Paginate(q.Match(q.Index("todos_by_user"), user)),
//           q.Lambda("userRef", q.Get(q.Select([0], q.Var("userRef"))))
//         )
//       )

//       return result
//       // const results = await client.query(
//       //   q.Get(q.Match(q.Index("todos_by_user"), user))
//       // )
//       // console.log(results)
//       // return results
//       // const results = await client.query(
//       //   q.Paginate(q.Match(q.Index("todos_by_user"), user))
//       // )
//       // //need to find out what is being returned from results. This may be the err
//       // //have to try 2 redeploy this see what comes out from it. netlify is down
//       // return results.data.map(item => {
//       //   const obj = {}
//       //   console.log(obj)
//       //   return obj
//       // })
//     },
//   },
//   Mutation: {
//     addTodo: async (_, { text, user }) => {
//       const results = await client.query(
//         q.Create(q.Collection("Todo"), {
//           data: {
//             text,
//             done: false,
//             owner: user,
//           },
//         })
//       )
//       const balls = {
//         ...results.data,
//         id: results.ref.id,
//       }
//       return console.log(balls)
//     },
//     updateTodoDone: async (_, { id }, { user }) => {
//       const results = await client.query(
//         q.Update(q.Ref(q.Collection("todos"), id), {
//           data: {
//             done: true,
//           },
//         })
//       )
//       return {
//         ...results.data,
//         id: results.ref.id,
//       }
//     },
//   },
// }

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: ({ context }) => {
//     if (context.clientContext.user) {
//       return { user: context.clientContext.user.sub }
//     } else {
//       return {}
//     }
//   },
//   playground: true,
//   introspection: true,
// })

// exports.handler = server.createHandler({
//   cors: {
//     origin: true,
//     credentials: true,
//   },
// })
