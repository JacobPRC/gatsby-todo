import React from "react"
import styled from "styled-components"

import Review from "../templates/Review"

const Container = styled.div`
  background-color: #ffd669;
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: #1f1f1f;
`
export default () => (
  <Container>
    <Review
      rating="★★★★★"
      company="Fake Ratings"
      description="Editor's choice. Everyone loves it!"
    />
    <Review
      rating="★★★★★★★★★★"
      company="BS Reviews"
      description="The Best App We have ever tried! Ever."
    />
    <Review company="Time" description="9/10 This is the App of the Year!" />
  </Container>
)
