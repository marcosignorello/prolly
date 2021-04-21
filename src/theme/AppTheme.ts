import {createMuiTheme} from '@material-ui/core/styles'
import * as colors from './AppColors'

export const Theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.PRIMARY_COLOR,
    },
    secondary: {
      main: colors.SECONDARY_COLOR,
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  spacing: factor => `${0.25 * factor}em`,
})
