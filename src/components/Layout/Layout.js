import React from "react"
import styled from "styled-components"

import Footer from "./Footer"
import Header from "./Header"

const Container = styled.div`
  margin: 3rem auto;
  max-width: 1000px;
  color: #1f1f1f;
  font-family: Graphik Web, Helvetica Neue, Helvetica, Arial, sans-serif;
`

const AppContainer = styled.div`
  height: 100%;
`

export default ({ children }) => (
  <AppContainer>
    <Header />
    <Container>{children}</Container>
    <Footer />
  </AppContainer>
)
