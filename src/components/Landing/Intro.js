import React, { useEffect } from "react"
import styled from "styled-components"
import NetlifyIdentity from "netlify-identity-widget"

import * as S from "../styles"

const StyledH1 = styled.h1`
  color: 1f1f1f;
  size: 60px;
  text-align: center;
`

const Container = styled.div`
  padding: 3rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default () => {
  return (
    <Container>
      <S.H1>Conquer your chores with Todo Champion</S.H1>
      <br />
      <S.Button onClick={() => NetlifyIdentity.open()}>Get Started</S.Button>
    </Container>
  )
}
