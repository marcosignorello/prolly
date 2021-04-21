import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion)

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary)
const AccordionDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails)

export const Filter = () => {
  const [expanded, setExpanded] = React.useState<string | false>('panel1')

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<any>,
    newExpanded: boolean,
  ) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div>
      <Accordion
        square
        expanded={expanded === 'details'}
        onChange={handleChange('details')}
      >
        <AccordionSummary aria-controls="details-content" id="details-header">
          <Typography>Pose</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="filter-div">Image</div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === 'style'}
        onChange={handleChange('style')}
      >
        <AccordionSummary aria-controls="style-content" id="style-header">
          <Typography>Captions</Typography>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
    </div>
  )
}
