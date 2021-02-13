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
})
