import React, { useContext } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import NetlifyIdentity from "netlify-identity-widget"

import { IdentityContext } from "../../../identity-context"
import * as S from "./layout-styles"

const ListLink = ({ href, children }) => (
  <S.Li>
    <Link
      style={{
        color: "black",
        textShadow: "none",
        textDecoration: "none",
        backgroundImage: "none",
        color: "#575757",
        cursor: "pointer",
      }}
      to={href}
    >
      {children}
    </Link>
  </S.Li>
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
    if (user) {
      return (
        <>
          <ListLink href="/app">{user.user_metadata.full_name}</ListLink>
          <S.HeaderLink onClick={() => NetlifyIdentity.open()}>
            Logout
          </S.HeaderLink>
        </>
      )
    }
    return (
      <S.HeaderLink onClick={() => NetlifyIdentity.open()} href="/">
        Login
      </S.HeaderLink>
    )
  }

  return (
    <S.Header>
      <S.Nav>
        <S.NavContainer>
          <Link
            to="/"
            style={{
              textShadow: `none`,
              backgroundImage: `none`,
              textDecoration: "none",
            }}
          >
            <S.StyledH3>{title}</S.StyledH3>
          </Link>
          <S.StyledUl>{loggedInCheck()}</S.StyledUl>
        </S.NavContainer>
      </S.Nav>
    </S.Header>
  )
}
