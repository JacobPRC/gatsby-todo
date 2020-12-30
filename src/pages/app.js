import React, { useContext } from "react"
import { Router, Link } from "@reach/router"

import { IdentityContext } from "../../identity-context"
import Layout from "../components/Layout/Layout"

export default () => {
  const { user } = useContext(IdentityContext)
  console.log(user)

  if (!user) return <div>Loading...</div>

  return (
    <Layout>
      <h1>Hello {user.user_metadata.full_name}</h1>
    </Layout>
  )
}
