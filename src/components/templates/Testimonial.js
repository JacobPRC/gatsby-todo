import React from "react"
import styled from "styled-components"

const Card = styled.div`
  width: 50%;
  min-height: 50%;
  display: flex;
  background: #fff;
  border-radius: 12px;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.24);
  padding: 0.5rem;
  margin: 2rem;
`

const QuoteDiv = styled.div`
  font-size: 4rem;
  margin-bottom: -1.5rem;
  font-family: sans-serif;
`

const QuoteContainer = styled.div`
  white-space: normal;
  padding: 1rem;
`
const BlockQuote = styled.blockquote`
  font-size: 1.5rem;
  line-height: 1.6;
  letter-spacing: -0.03em;
  font-family: "Caecilia Web", Serif;
  font-style: italic;
  border-left: none;
`
const AuthorDiv = styled.div`
  padding: 0 1rem 1rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`
const StyledH6 = styled.h6`
  margin-top: 6px;
  color: #202020;
`

export default ({ quote, author, work, id }) => (
  <Card key={id}>
    <QuoteContainer>
      <QuoteDiv>“</QuoteDiv>
      <BlockQuote>{quote || "Sup bb?"}</BlockQuote>
    </QuoteContainer>
    <AuthorDiv>
      <p>{author || "Victor Hugo"}</p>
      <StyledH6>{work || "Microsoft"}</StyledH6>
    </AuthorDiv>
  </Card>
)
