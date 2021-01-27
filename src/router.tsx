import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import {IdentityContextProvider} from 'react-netlify-identity'
import App from './App'
import {NETLIFY_URL} from './const'

export const AppRouter = () => {
  return (
    <Router>
      <IdentityContextProvider url={NETLIFY_URL}>
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
      </IdentityContextProvider>
    </Router>
  )
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
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
