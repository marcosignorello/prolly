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
          <Typography>Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="filter-div">
            <label htmlFor="name">
              Name <input id="name" />
            </label>
            <label htmlFor="male">
              M <input id="male" type={'radio'} />
            </label>
            <label htmlFor="female">
              F <input id="female" type={'radio'} />
            </label>
            <label htmlFor="other">
              Other <input id="other" type={'radio'} />
            </label>
            <label htmlFor="length">
              Length <input id="length" />
            </label>
            <label htmlFor="weight">
              Weight <input id="weight" />
            </label>
            <label htmlFor="Message">
              Message <input id="Message" />
            </label>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === 'style'}
        onChange={handleChange('style')}
      >
        <AccordionSummary aria-controls="style-content" id="style-header">
          <Typography>Styles</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <label htmlFor="color">
            Base Color <input id="color" type={'radio'} />
          </label>
          <label htmlFor="orentation">
            Base Color <input id="orentation" type={'radio'} />
          </label>
          <label htmlFor="size">
            Size <input id="size" type={'radio'} />
          </label>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
