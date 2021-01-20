import React from "react"

import Footer from "./Footer"
import Header from "./Header"
import * as S from "./layout-styles"

export default ({ children }) => (
  <S.AppContainer>
    <Header />
    <S.Container>{children}</S.Container>
    <Footer />
  </S.AppContainer>
)
