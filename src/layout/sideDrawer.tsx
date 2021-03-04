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
  isSideDrawerOpen: boolean
  setIsSideDrawerOpen: Dispatch<SetStateAction<boolean>>
}

export const SideDrawer: FC<Props> = ({
  isSideDrawerOpen,
  setIsSideDrawerOpen,
}) => {
  const history = useHistory()

  const useStyles = makeStyles(theme => ({
    navigationList: {
      width: 250,
    },
    navigationLink: {
      padding: theme.spacing(1),
    },
  }))

  const classes = useStyles()

  const handleNavigate = (pageURL: string) => {
    setIsSideDrawerOpen(false)
    history.push(pageURL)
  }

  return (
    <div>
      <SwipeableDrawer
        anchor="right"
        open={isSideDrawerOpen}
        onClose={() => setIsSideDrawerOpen(false)}
        onOpen={() => setIsSideDrawerOpen(true)}
      >
        <List className={classes.navigationList}>
          {routes.map(route => {
            const {linkText, path} = route
            return (
              <ListItem
                button
                key={linkText}
                onClick={() => handleNavigate(path)}
                className={classes.navigationLink}
              >
                <Button
                  color="inherit"
                  className={classes.navigationLink}
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
