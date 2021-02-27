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
  sideDrawOpen: boolean
  setSideDrawerOpen: Dispatch<SetStateAction<boolean>>
}

/**
 * Opening the user menu and side drawer generates a warning in the console
 * Apparently this is a known issue when running material ui in strict mode https://github.com/mui-org/material-ui/issues/13394
 * From my reading this will not happen in production and can be resolved by removing strict mode
 */

export const AppHeader: FC<Props> = ({sideDrawOpen, setSideDrawerOpen}) => {
  const {isAuthenticated, loginWithPopup, logout, user} = useAuth0()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const userMenuOpen = Boolean(anchorEl)
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
    menuButton: {
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

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
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
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={userMenuOpen}
                onClose={handleClose}
              >
                <ListSubheader>{user.nickname}</ListSubheader>
                <Divider />
                <MenuItem onClick={handleClose}>My account</MenuItem>
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
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => {
                setSideDrawerOpen(!sideDrawOpen)
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
