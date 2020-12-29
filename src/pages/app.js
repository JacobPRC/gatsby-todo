import React, { useContext } from "react"
import { Router, Link } from "@reach/router"

import { IdentityContext } from "../../identity-context"
import Layout from "../components/Layout/Layout"

export default () => {
  const { user } = useContext(IdentityContext)
  const { full_name } = user.user_metadata

  return (
    <Layout>
      <h1>Hello {full_name}</h1>
    </Layout>
  )
}
