import React, { useState, useContext } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import NetlifyIdentity from "netlify-identity-widget"

import { IdentityContext } from "../../../identity-context"

const Li = styled.li`
  display: inline-block;
  margin-right: 1rem;
  text-shadow: none;
`

const Header = styled.header`
  padding: 1rem;
  background-color: #fff;
  height: 4rem;
  position: sticky;
  top: 0;
  z-index: 100;
`

const Nav = styled.nav`
  display: flex;
  position: relative;
  align-items: center;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0%;
  min-height: 3rem;
  margin: 0 auto;
  max-width: 1088px;
  height: 100%;
`

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  justify-content: space-between;
`

const StyledH3 = styled.h3`
  display: inline;
  color: #e44232;
  padding-left: 2%;
  margin-top: 1rem;
`
const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
  list-style: none;
`

const ListLink = ({ href, children }) => (
  <Li>
    <Link
      style={{
        color: "black",
        textShadow: "none",
        textDecoration: "none",
        backgroundImage: "none",
        color: "#575757",
      }}
      to={href}
    >
      {children}
    </Link>
  </Li>
)

export default () => {
  const { user } = useContext(IdentityContext)

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  const { title } = data.site.siteMetadata

  const loggedInCheck = () => {
    if (NetlifyIdentity.currentUser()) {
      const { full_name } = user.user_metadata
      return (
        <>
          <ListLink href="/app">{full_name}</ListLink>
          <ListLink>Logout</ListLink>
        </>
      )
    }
    return <ListLink href="/">Login</ListLink>
  }

  return (
    <Header>
      <Nav>
        <NavContainer>
          <Link
            to="/"
            style={{
              textShadow: `none`,
              backgroundImage: `none`,
              textDecoration: "none",
            }}
          >
            <StyledH3>{title}</StyledH3>
          </Link>
          <StyledUl>{loggedInCheck()}</StyledUl>
        </NavContainer>
      </Nav>
    </Header>
  )
}
