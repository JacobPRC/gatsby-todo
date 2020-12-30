import React, { useContext } from "react"
import { Router, Link } from "@reach/router"

import { IdentityContext } from "../../identity-context"
import Layout from "../components/Layout/Layout"

export default () => {
  const { user } = useContext(IdentityContext)
  console.log(user)
  return (
    <Layout>
      <h1>Hello world</h1>
    </Layout>
  )
}
