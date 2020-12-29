import React from "react"

import { Provider } from "./identity-context"

export const wrapRootElement = ({ element }) => {
  return <Provider>{element}</Provider>
}
