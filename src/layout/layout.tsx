import {FC, useState} from 'react'
import {ThemeProvider} from '@material-ui/core'
import {Theme} from '../theme'
import {AppHeader} from './appHeader'
import {SideDrawer} from './sideDrawer'

export const Layout: FC = props => {
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState<boolean>(false)
  return (
    <>
      <ThemeProvider theme={Theme}>
        <AppHeader
          isSideDrawerOpen={isSideDrawerOpen}
          setIsSideDrawerOpen={setIsSideDrawerOpen}
        />
        <SideDrawer
          isSideDrawerOpen={isSideDrawerOpen}
          setIsSideDrawerOpen={setIsSideDrawerOpen}
        />
        {props.children}
      </ThemeProvider>
    </>
  )
}
