import {useAuth0} from '@auth0/auth0-react'
import {Container, Grid, makeStyles} from '@material-ui/core'

export const Welcome: React.FC = () => {
  const {user, isAuthenticated} = useAuth0()
  const classes = useStyles()

  if (!isAuthenticated) return <h2>Welcome Please Loggin.</h2>

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid className={classes.toolbar} item xs={12}>
          Tool Bar
        </Grid>
        <Grid className={classes.canvas} item xs={12} md={9}>
          Canvas
        </Grid>
        <Grid className={classes.filter} item xs={12} md={3}>
          Filter side bar
        </Grid>
      </Grid>
    </Container>
  )
}

const useStyles = makeStyles(theme => {
  return {
    toolbar: {
      outline: `1px dotted ${theme.palette.error.light}`,
    },
    canvas: {
      outline: `1px dotted ${theme.palette.error.light}`,
      minHeight: '70vh',
    },
    filter: {
      outline: `1px dotted ${theme.palette.error.light}`,
      minHeight: '70vh',
    },
  }
})
