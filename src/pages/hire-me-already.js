import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/Layout/Layout"
import * as S from "../components/styles"

const P = styled.p`
  font-size: 0.75rem;
  color: #1f1f1f;
`

const Paragraph = styled.p`
  letter-spacing: 1.1875rem;
  font-weight: 1.65;
  letter-spacing: -0.005em;
  font-weight: 400;
`

const H2 = styled.h2`
  letter-spacing: 1.5rem;
  font-weight: 1.25;
  letter-spacing: -0.01em;
  font-weight: 600;
  margin-top: 3rem;
  margin-bottom: 1rem;
`

const Job = styled.h4`
  font-size: 1.5rem;
  line-height: 1.25;
  letter-spacing: -0.01em;
  font-weight: 600;
`

const Span = styled.span`
  color: #999;
  padding: 0.25rem;
`

export default () => (
  <Layout>
    <Job>Kick ass full stack or JAMstack web developer</Job>
    <P>
      <span>Full-Time & Part-Time</span>
      <Span>•</Span>
      <span>REMOTE</span>
    </P>
    <H2>Description</H2>
    <Paragraph>
      I am an awesome web developer who works with full stack MERN and JAMstack
      web applications. I work mostly with MERN, React, Gatsby and GraphQL, but
      I am flexible and willing to learn new things.
    </Paragraph>
    <Paragraph>
      I love coding and would be a great addition to your team. Check out my{" "}
      <a
        style={{ padding: ".25rem" }}
        href="https://jacob-cunningham-portfolio.netlify.app"
      >
        portfolio
      </a>
      if you're interested.
    </Paragraph>
    <H2>Interested in working with me?</H2>
    <S.Button as={Link} to="/contact">
      Contact me
    </S.Button>
  </Layout>
)
