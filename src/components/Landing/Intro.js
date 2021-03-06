import React from "react"
import styled from "styled-components"

import GetStartedButton from "../templates/getStartedButton"
import * as S from "../styles"

const Container = styled.div`
  padding: 3rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default () => (
  <Container>
    <S.H1>Conquer your chores with Todo Champion</S.H1>
    <br />
    <GetStartedButton />
  </Container>
)
