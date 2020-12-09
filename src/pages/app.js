import React from "react"
import { Router, Link } from "@reach/router"
import NetlifyIdentity from "netlify-identity-widget"

const user = NetlifyIdentity.currentUser()

let Home = () => <div>Home</div>
let Dash = () => <div>Dash: {user && user.user_metadata.full_name}</div>

export default () => {
  return (
    <Router>
      <Home path="/" />
      <Dash path="dashboard" />
    </Router>
  )
}
