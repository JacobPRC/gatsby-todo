import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import NetlifyIdentity from "netlify-identity-widget"

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
  const [user, setUser] = useState()

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

  NetlifyIdentity.on("login", user => {
    NetlifyIdentity.close()
    setUser(user)
  })

  NetlifyIdentity.on("logout", () => setUser())

  console.log(user)
  useEffect(() => console.log(user), [user])
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
          <StyledUl>
            <ListLink href="/">Login</ListLink>
            <ListLink href="/app">Dashboard</ListLink>
            <ListLink href="/">Signup</ListLink>
            {user && <ListLink>{user.user_metadata.full_name}</ListLink>}
          </StyledUl>
        </NavContainer>
      </Nav>
    </Header>
  )
}
