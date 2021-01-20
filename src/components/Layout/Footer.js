import React from "react"
import { Link } from "gatsby"

import * as S from "../styles"
import * as LS from "./layout-styles"
import GetStartedButton from "../templates/getStartedButton"

export default () => (
  <LS.Footer>
    <LS.ContainerOne>
      <LS.UpperFooterContainer>
        <LS.SocialDiv>
          <S.P>
            Join millions of people who organize work and life with Todo
            Champion.
          </S.P>
          <GetStartedButton />
        </LS.SocialDiv>
        <LS.AboutContainer>
          <S.P>More Links</S.P>
          <br />
          <LS.StyledLink as={Link} to="/testimonials">
            Testimonials
          </LS.StyledLink>
          <LS.StyledLink as={Link} to="/careers">
            Careers
          </LS.StyledLink>
          <LS.StyledLink as={Link} to="/help-center">
            Help Center
          </LS.StyledLink>
        </LS.AboutContainer>
      </LS.UpperFooterContainer>
      <LS.FooterContainer>
        <LS.LinksContainer>
          <LS.StyledP>Security {"  "} </LS.StyledP>
          <LS.StyledP>{"  "} | Privacy</LS.StyledP>
          <LS.StyledP>{"  "} | Terms</LS.StyledP>
        </LS.LinksContainer>
        <LS.MadeByDiv>
          <LS.StyledP> @ Jacob Cunningham</LS.StyledP>
        </LS.MadeByDiv>
      </LS.FooterContainer>
    </LS.ContainerOne>
  </LS.Footer>
)
