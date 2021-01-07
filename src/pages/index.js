import React from "react"

import * as S from "../components/styles"
import SEO from "../components/seo"
import Layout from "../components/Layout/Layout"
import Intro from "../components/Landing/Intro"
import Reviews from "../components/Landing/Reviews"
import About from "../components/Landing/About"
import GetStartedButton from "../components/templates/getStartedButton"

const IndexPage = () => {
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
        <GetStartedButton />
      </S.FlexColumn>
    </Layout>
  )
}
export default IndexPage
