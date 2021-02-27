import React, {FC, Dispatch, SetStateAction} from 'react'
import {useHistory} from 'react-router-dom'
import {
  SwipeableDrawer,
  Button,
  List,
  ListItem,
  makeStyles,
} from '@material-ui/core'
import {routes} from '../routes'

interface Props {
  sideDrawOpen: boolean
  setSideDrawerOpen: Dispatch<SetStateAction<boolean>>
}

export const SideDrawer: FC<Props> = ({sideDrawOpen, setSideDrawerOpen}) => {
  const history = useHistory()

  const useStyles = makeStyles(theme => ({
    navList: {
      width: 250,
    },
    navLink: {
      padding: theme.spacing(1),
    },
  }))
  const classes = useStyles()

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }
    setSideDrawerOpen(open)
  }

  const handleNavigate = (pageURL: string) => {
    setSideDrawerOpen(false)
    history.push(pageURL)
  }

  return (
    <div>
      <SwipeableDrawer
        anchor="right"
        open={sideDrawOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <List className={classes.navList}>
          {routes.map(route => {
            const {linkText, path} = route
            return (
              <ListItem
                button
                key={linkText}
                onClick={() => handleNavigate(path)}
                className={classes.navLink}
              >
                <Button
                  color="inherit"
                  className={classes.navLink}
                  onClick={() => handleNavigate(path)}
                >
                  {linkText}
                </Button>
              </ListItem>
            )
          })}
        </List>
      </SwipeableDrawer>
    </div>
  )
}
