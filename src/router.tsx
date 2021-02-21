import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {useAuth0, Auth0Provider} from '@auth0/auth0-react'
import {routes} from './routes'
import App from './App'

export const AppRouter: React.FC = () => {
  const {error} = useAuth0()

  if (error) {
    return <div>Oops... {error.message}</div>
  }

  return (
    <Auth0Provider
      domain="prolly.eu.auth0.com"
      clientId="F7YLedWzdrSBsSGJ02cDLoNnCz8RRY9h"
      redirectUri={window.location.origin}
    >
      <Router>
        <App>
          <Switch>
            {routes.map(r => (
              <Route
                exact={r.extact}
                path={r.path}
                component={r.component}
                key={r.path}
              />
            ))}
            <Route path="/editor" component={ProllyEditor} />
            <Route path="/gallery/{id}" component={Gallery} />
          </Switch>
        </App>
      </Router>
    </Auth0Provider>
  )
}

// You can think of these components as "pages"
// in your app.
function ProllyEditor() {
  return (
    <div>
      <h2>Here the editor</h2>
    </div>
  )
}

function Gallery() {
  return (
    <div>
      <h2>Gallery</h2>
    </div>
  )
}
