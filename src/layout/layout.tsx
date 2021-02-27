import {FC, useState} from 'react'
import {ThemeProvider} from '@material-ui/core'
import {Theme} from '../theme'
import {AppHeader} from './appHeader'
import {SideDrawer} from './sideDrawer'

export const Layout: FC = props => {
  const [sideDrawOpen, setSideDrawerOpen] = useState<boolean>(false)
  return (
    <>
      <ThemeProvider theme={Theme}>
        <AppHeader
          sideDrawOpen={sideDrawOpen}
          setSideDrawerOpen={setSideDrawerOpen}
        />
        <SideDrawer
          sideDrawOpen={sideDrawOpen}
          setSideDrawerOpen={setSideDrawerOpen}
        />
        <div>{props.children}</div>
      </ThemeProvider>
    </>
  )
}
