const React = require("react")
const { navigate } = require("gatsby")
const netlifyIdentity = require("netlify-identity-widget")

const IdentityContext = React.createContext({})

exports.IdentityContext = IdentityContext

const IdentityProvider = props => {
  const [user, setUser] = React.useState()

  React.useEffect(() => {
    netlifyIdentity.init({})
  })
  netlifyIdentity.on("login", user => {
    netlifyIdentity.close()
    setUser(user)
    navigate("/app", { state: { user: netlifyIdentity.currentUser().id } })
  })
  netlifyIdentity.on("logout", () => {
    netlifyIdentity.close()
    setUser()
    navigate("/")
  })

  return (
    <IdentityContext.Provider value={{ identity: netlifyIdentity, user }}>
      {props.children}
    </IdentityContext.Provider>
  )
}

exports.Provider = IdentityProvider
