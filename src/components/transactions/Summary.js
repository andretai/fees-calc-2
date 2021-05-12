import React from 'react';
import constants from '../transactions/Constants';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Paper, Typography } from '@material-ui/core';
import { MenuBook } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  paper: {
    margin: '64px 32px',
    padding: '32px 32px 36px 32px'
  },
  title: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginBottom: '24px'
  },
  button_div: {
    marginTop: '24px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  button: {
    width: '100%'
  }
}));

const Summary = React.forwardRef((props, ref) => {

  // CSS
  const classes = useStyles();

  // Props
  const { records, calculate_pl, toggleSummaryModal } = props;

  const details = [
    {
      name: 'Value of Shares Sold',
      value: constants.calculate_value('sell', records)
    },
    {
      name: 'Value of Shares Bought',
      value: constants.calculate_value('buy', records)
    },
    {
      name: 'Gross Return',
      value: constants.calculate_value('sell', records) - constants.calculate_value('buy', records)
    },
    {
      name: 'Transactional Costs',
      value: constants.calculate_allcosts(records)
    },
    {
      name: 'Nett Return',
      value: constants.calculate_value('sell', records) - constants.calculate_value('buy', records) - constants.calculate_allcosts(records)
    }
  ];

  return (
    <Paper className={classes.paper}>
      <div className={classes.title}>
        <MenuBook/>
        <Typography variant="h6">Summary</Typography>
      </div>
      <div>
        {
          details.map(detail => {
            return <div key={details.indexOf(detail)}>
              <Typography variant="body1">{detail.name}</Typography>
              <Typography variant="body1" style={{ textAlign: 'right', fontWeight: 900 }}>{detail.value.toFixed(2)}</Typography>
            </div>
          })
        }
      </div>
      <hr></hr>
      <div style={{ display: 'flex', justifyContent: 'space-between'}}>
        <Typography variant="button">total p/l</Typography>
        <Typography variant="button" style={{ fontWeight: 900 }}>{calculate_pl(records)}%</Typography>
      </div>
      <div className={classes.button_div}>
        <Button disabled variant="contained" color="secondary" className={classes.button} style={{marginRight: '4px'}} onClick={() => toggleSummaryModal(false)}><Typography>SAVE</Typography></Button>
        <Button variant="contained" color="primary" className={classes.button} style={{marginLeft: '4px'}} onClick={() => toggleSummaryModal(false)}><Typography>DONE</Typography></Button>
      </div>
      {/* <button onClick={() => console.log(constants.calculate_value('buy', records))}>calc buy val</button>
      <button onClick={() => console.log(constants.calculate_value('sell', records))}>calc sell val</button>
      <button onClick={() => console.log(constants.calculate_allcosts(records))}>calc cost</button> */}
    </Paper>
  )
});

export default Summary
