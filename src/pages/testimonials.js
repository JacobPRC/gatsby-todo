import React, { useEffect } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import NetlifyIdentity from "netlify-identity-widget"

import Layout from "../components/Layout/Layout"
import Testimonial from "../components/templates/Testimonial"
import * as S from "../components/styles"

export default () => {
  useEffect(() => NetlifyIdentity.init({}))

  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                author
                work
                quote
              }
            }
          }
        }
      }
    `
  )

  const renderTestimonials = () =>
    data.allMarkdownRemark.edges.map(item => {
      const { id } = item.node
      const { author, quote, work } = item.node.frontmatter
      return <Testimonial id={id} author={author} quote={quote} work={work} />
    })

  return (
    <Layout>
      <br />
      <S.H1>Hear what people are saying about us</S.H1>
      <br />
      <S.FlexColumn>
        {renderTestimonials()}
        <i>
          <h5>Convinced yet?</h5>
        </i>
        <S.Button onClick={() => NetlifyIdentity.open()}>Get Started</S.Button>
      </S.FlexColumn>
    </Layout>
  )
}
