import React from "react"
import { Link } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll"
import styled from "styled-components"

import Layout from "../components/Layout/Layout"
import * as S from "../components/styles"

const H1 = styled.h1`
  font-size: 3.25rem;
  line-height: 1.05;
  letter-spacing: -0.02em;
  font-weight: 600;
  max-width: 13em;
  display: inline-block;
`

const Container = styled.div`
  height: 80vh;
  padding: 0.5rem;
`
const OpenRoles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`

const H2 = styled.h2`
  font-size: 2.25rem;
  line-height: 1.05;
  letter-spacing: -0.01em;
  font-weight: 600;
`

const RoleLink = styled.a`
  display: flex;
  align-items: center;
  position: relative;
  padding: 1.5rem;
  border-top: 1px solid #dedede;
  flex-direction: column;
  background-image: none;
  text-shadow: none;
`

const P = styled.p`
  font-size: 0.75rem;
  color: #1f1f1f;
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
    <Container>
      <S.FlexColumn>
        <H1>Make a lasting impact on the future of your work</H1>
        <br />
        <S.Button as={AnchorLink} href="#job">
          Hire me
        </S.Button>
      </S.FlexColumn>
    </Container>
    <div id="job">
      <OpenRoles>
        <H2>Open Roles</H2>
      </OpenRoles>
      <RoleLink>
        <Job>Kick ass full stack or JAMstack web developer</Job>
        <P>
          <span>Full-Time & Part-Time</span>
          <Span>•</Span>
          <span>REMOTE</span>
        </P>
        <S.Button as={Link} to="/hire-me-already">
          Hire me
        </S.Button>
      </RoleLink>
    </div>
  </Layout>
)
