require("dotenv").config()
const faunadb = require("faunadb")
const keys = require("../keys")
const query = faunadb.query

function createClient() {
  if (!process.env.FAUNA_ADMIN && !keys.FAUNA_ADMIN) {
    throw new Error(
      `No FAUNA_ADMIN key in found, please check your fauna dashboard or create a new key.`
    )
  }
  const client = new faunadb.Client({
    secret: process.env.SERVER_KEY || keys.SERVER_KEY,
  })
  return client
}
exports.client = createClient()
exports.query = query
