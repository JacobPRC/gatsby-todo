import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import * as S from "../styles"

const Container = styled.div`
  width: 50%;
  padding: 0 1rem;
`

export default () => (
  <Container>
    <S.H2>A task manager you can trust for life</S.H2>
    <S.P>
      In the last week or so that we’ve been building Todo Champion, we’ve never
      considered selling out or becoming acquired.
    </S.P>
    <S.P>
      Our team (as in just me) is committed to staying independent and continue
      building awesome apps for our (my) portfolio so that I can get an awesome
      job working with you.
    </S.P>
    <Link
      style={{ color: "#316fea", backgroundImage: "none" }}
      to="/testimonials"
    >
      Check out what people are saying about us
    </Link>
  </Container>
)
