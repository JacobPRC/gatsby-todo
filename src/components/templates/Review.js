import React from "react"
import styled from "styled-components"

import * as S from "../styles"

const Container = styled.div`
  position: relative;
  padding: 0.8rem 0.5rem;
`

export default ({ rating, company, description }) => (
  <S.FlexColumn>
    <Container>
      <S.P>{company}</S.P>
      {rating ? <div>{rating}</div> : null}
      <S.H4>{description}</S.H4>
    </Container>
  </S.FlexColumn>
)
