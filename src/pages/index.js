import React, { useEffect } from "react"
import { Link } from "gatsby"
import NetlifyIdentity from "netlify-identity-widget"

import * as S from "../components/styles"
import SEO from "../components/seo"
import Layout from "../components/Layout/Layout"
import Intro from "../components/Landing/Intro"
import Reviews from "../components/Landing/Reviews"
import About from "../components/Landing/About"

const IndexPage = () => {
  useEffect(() => NetlifyIdentity.init({}))
  return (
    <Layout>
      <SEO title="Home" />
      <Intro />
      <Reviews />
      <About />
      <br />
      <S.FlexColumn>
        <S.H2>Achieve peace of mind with Todo Champion</S.H2>
        <br />
        <S.Button as={Link} to="/new-user">
          Get Started
        </S.Button>
      </S.FlexColumn>
    </Layout>
  )
}
export default IndexPage
