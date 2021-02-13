import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core'
import {useAuth0} from '@auth0/auth0-react'

export const AppHeader: FC = props => {
  const {isAuthenticated, loginWithPopup, logout} = useAuth0()

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Prolly</Typography>
          {!isAuthenticated ? (
            <Button color="inherit" onClick={loginWithPopup}>
              Login
            </Button>
          ) : (
            <Link to={'/'}></Link>
          )}
          {isAuthenticated ? (
            <Button
              color="inherit"
              onClick={() => logout({returnTo: window.location.origin})}
            >
              Logout
            </Button>
          ) : null}
        </Toolbar>
      </AppBar>
      {props.children}
    </>
  )
}
