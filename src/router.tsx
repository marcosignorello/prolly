import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import App from './App'
import {Auth0Provider, useAuth0} from '@auth0/auth0-react'

export const AppRouter = () => {
  return (
    <Auth0Provider
      domain="prolly.eu.auth0.com"
      clientId="F7YLedWzdrSBsSGJ02cDLoNnCz8RRY9h"
      redirectUri={window.location.origin}
    >
      <Router>
        <App>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
            </Switch>
          </div>
        </App>
      </Router>
    </Auth0Provider>
  )
}

// You can think of these components as "pages"
// in your app.

function Home() {
  const {user, loginWithRedirect, isAuthenticated, logout} = useAuth0()

  return (
    <div>
      <h2>Home</h2>
      {isAuthenticated ? (
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <button onClick={() => logout({returnTo: window.location.origin})}>
            Log Out
          </button>
        </div>
      ) : (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      )}
    </div>
  )
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  )
}
