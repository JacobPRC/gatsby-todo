import React, { useContext } from "react"
import NetlifyIdentity from "netlify-identity-widget"
import { navigate } from "gatsby"

import { IdentityContext } from "../../../identity-context"
import * as S from "../styles"

export default () => {
  const { user } = useContext(IdentityContext)

  const onButtonClick = () => {
    if (user) {
      return navigate("/app", { state: { user: user.id } })
    }
    return NetlifyIdentity.open()
  }

  return <S.Button onClick={() => onButtonClick()}>Get Started</S.Button>
}
