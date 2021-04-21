import {Container, Grid, makeStyles} from '@material-ui/core'
import {Canvas} from './components/canvas'
import {Filter} from './components/filter'
import {ToolBar} from './components/toolBar'
export const Editor: React.FC = () => {
  const classes = useStyles()

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid className={classes.toolbar} item xs={12}>
          <ToolBar />
        </Grid>
        <Grid className={classes.canvas} item xs={12} md={9}>
          <Canvas />
        </Grid>
        <Grid className={classes.filter} item xs={12} md={3}>
          <Filter />
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
