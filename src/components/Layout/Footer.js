import React, { useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import * as S from "../styles"

const Footer = styled.div`
  background-color: #fff9f3;
  display: block;
  font-family: Graphik Web, Helvetica Neue, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  color: #1f1f1f;
`

const StyledLink = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0;
  font-weight: 400;
  color: inherit;
  text-decoration: none;
  background-image: none;
`

const Container = styled.div`
  margin: 3rem auto;
  max-width: 1000px;
  padding-top: 2rem;
  color: #1f1f1f;
  font-family: Graphik Web, Helvetica Neue, Helvetica, Arial, sans-serif;
`

const UpperFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  width: 100%;
  padding-bottom: 5rem;
`

const AboutContainer = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-left: 25rem;
`

const SocialDiv = styled.div`
  max-width: 300px;
`

const FooterContainer = styled.div`
  height: 100%;
  justify-content: space-between;
  display: flex;
  align-items: center;
  align-items: center;
  padding: 0.75rem;
  min-height: 3rem;
`

const LinksContainer = styled.div`
  display: flex;
`

const StyledP = styled.p`
  font-size: 0.75rem;
  line-height: 1.35;
  letter-spacing: 0.02em;
  font-weight: 400;
`

const MadeByDiv = styled.div`
  margin-left: 1rem;
`

export default () => {
  return (
    <Footer>
      <Container>
        <UpperFooterContainer>
          <SocialDiv>
            <S.P>
              Join millions of people who organize work and life with Todo
              Champion.
            </S.P>
            <S.Button>Get Started</S.Button>
          </SocialDiv>
          <AboutContainer>
            <S.P>More Links</S.P>
            <br />
            <StyledLink as={Link} to="/testimonials">
              Testimonials
            </StyledLink>
            <StyledLink as={Link} to="/careers">
              Careers
            </StyledLink>
            <StyledLink as={Link} to="/help-center">
              Help Center
            </StyledLink>
          </AboutContainer>
        </UpperFooterContainer>
        <FooterContainer>
          <LinksContainer>
            <StyledP>Security {"  "} </StyledP>
            <StyledP>{"  "} | Privacy</StyledP>
            <StyledP>{"  "} | Terms</StyledP>
          </LinksContainer>
          <MadeByDiv>
            <StyledP> @ Jacob Cunningham</StyledP>
          </MadeByDiv>
        </FooterContainer>
      </Container>
    </Footer>
  )
}
