import {FC} from 'react'
import {ThemeProvider} from '@material-ui/core'
import {Theme} from '../theme'
import {AppHeader} from './appHeader'

export const Layout: FC = props => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <AppHeader />
        <div>{props.children}</div>
      </ThemeProvider>
    </>
  )
}
