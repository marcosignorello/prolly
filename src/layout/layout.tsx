import {FC} from 'react'
import {ThemeProvider} from '@material-ui/core'
import {Theme} from '../theme'
import {AppHeader} from './appHeader'

export const Layout: FC = props => {
  return (
    <>
      <AppHeader />
      <ThemeProvider theme={Theme}>
        <div>{props.children}</div>
      </ThemeProvider>
    </>
  )
}
