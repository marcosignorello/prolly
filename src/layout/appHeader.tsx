import React, {FC, Dispatch, SetStateAction} from 'react'
import {useHistory} from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  Divider,
  ListSubheader,
} from '@material-ui/core'
import {AccountCircle} from '@material-ui/icons'
import MenuIcon from '@material-ui/icons/Menu'
import {useAuth0} from '@auth0/auth0-react'
import {routes} from '../routes'

interface Props {
  isSideDrawerOpen: boolean
  setIsSideDrawerOpen: Dispatch<SetStateAction<boolean>>
}

/**
 * Opening the user menu and side drawer generates a warning in the console
 * Apparently this is a known issue when running material ui in strict mode https://github.com/mui-org/material-ui/issues/13394
 * From my reading this will not happen in production and can be resolved by removing strict mode
 */

export const AppHeader: FC<Props> = ({
  isSideDrawerOpen,
  setIsSideDrawerOpen,
}) => {
  const {isAuthenticated, loginWithPopup, logout, user} = useAuth0()
  const [
    userMenuAnchorElement,
    setUserMenuAnchorElement,
  ] = React.useState<null | HTMLElement>(null)
  const isUserMenuOpen = Boolean(userMenuAnchorElement)
  const theme = useTheme()
  const history = useHistory()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    loginButton: {
      marginLeft: theme.spacing(1),
    },
    navigationButton: {
      marginLeft: theme.spacing(1),
    },
    title: {
      flexGrow: 1,
    },
    navLink: {
      padding: theme.spacing(1),
    },
  }))

  const classes = useStyles()

  const handleUserMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setUserMenuAnchorElement(event.currentTarget)
  }

  const handleUserMenuClose = () => {
    setUserMenuAnchorElement(null)
  }

  const handleNavigate = (pageURL: string) => {
    history.push(pageURL)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Prolly
          </Typography>

          {!isMobile &&
            routes
              .filter(route => route.showInHeader)
              .map(route => {
                const {linkText, path} = route
                return (
                  <Button
                    key={linkText}
                    color="inherit"
                    className={classes.navLink}
                    onClick={() => handleNavigate(path)}
                  >
                    {linkText}
                  </Button>
                )
              })}

          {isAuthenticated ? (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleUserMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={userMenuAnchorElement}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={isUserMenuOpen}
                onClose={handleUserMenuClose}
              >
                <ListSubheader>{user.nickname}</ListSubheader>
                <Divider />
                <MenuItem
                  onClick={() => console.log('todo: add link to account page')}
                >
                  My account
                </MenuItem>
                <MenuItem
                  onClick={() => logout({returnTo: window.location.origin})}
                >
                  Log out
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <Button
              color="inherit"
              onClick={loginWithPopup}
              className={classes.loginButton}
            >
              Login
            </Button>
          )}

          {isMobile ? (
            <IconButton
              edge="start"
              className={classes.navigationButton}
              color="inherit"
              aria-label="menu"
              onClick={() => {
                setIsSideDrawerOpen(!isSideDrawerOpen)
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : null}
        </Toolbar>
      </AppBar>
    </div>
  )
}
