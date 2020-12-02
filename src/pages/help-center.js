import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout/Layout"

const Container = styled.div`
  padding-top: 1rem;
  text-align: center;
  height: 50vh;
`

const P = styled.p`
  font-size: 2.125rem;
  color: #6f6f6f;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.3333;
`

const Button = styled.a`
  background-color: transparent;
  color: #e44232;
  border-color: #e44232;
  margin: 0;
  overflow: visible;
  font: inherit;
  text-transform: none;
  display: inline-block;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-family: "Graphik Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  vertical-align: middle;
  white-space: normal;
  line-height: 1.25rem;
  min-height: 2.5rem;
  text-decoration: none;
  text-align: center;
  border: 2px solid;
  background-image: none;
  text-shadow: none;

  &:hover {
    background-color: #e44232;
    color: white;
    border: none;
    margin: 0;
    overflow: visible;
    font: inherit;
    text-transform: none;
    display: inline-block;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    font-family: "Graphik Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 1rem;
    font-weight: 500;
    vertical-align: middle;
    white-space: normal;
    line-height: 1.25rem;
    min-height: 2.5rem;
    text-decoration: none;
    text-align: center;
    border: 2px solid;
    background-image: none;
    text-shadow: none;
`

const H1 = styled.h1`
  color: #4c4c4c;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.3;
  text-align: center;
`

export default () => (
  <Layout>
    <Container>
      <H1>Welcome! How can we help?</H1>
      <P>Reach out with questions or feedback any time!</P>

      <Button as={Link} to="/contact">
        Contact us
      </Button>
    </Container>
  </Layout>
)
