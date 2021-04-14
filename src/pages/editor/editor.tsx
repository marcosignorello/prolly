import {Container, Grid, makeStyles} from '@material-ui/core'
import React from 'react'
import Canvas from '../../components/Canvas/Canvas'
import Filter from '../../components/Filter/Filter'
import TopBar from '../../components/TopBar/TopBar'

export const Editor: React.FC = () => {
  const classes = useStyles()
  const [name, setName] = React.useState<string>('Name of the baby')

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid className={classes.toolbar} item xs={12}>
          <TopBar />
        </Grid>
        <Grid className={classes.canvas} item xs={12} md={9}>
          <Canvas name={name} />
        </Grid>
        <Grid className={classes.filter} item xs={12} md={3}>
          <Filter name={name} setName={setName} />
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
