import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paper: {
    margin: '64px 32px 0 32px',
    padding: '32px'
  },
  button_div: {
    marginTop: '12px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  }
}));

const Summary = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const { records, calculate_pl, toggleSummaryModal } = props;
  return (
    <Paper className={classes.paper}>
      <div><Typography>summary</Typography></div>
      <Typography>{calculate_pl(records)}%</Typography>
      <div className={classes.button_div}>
        <Button variant="contained" color="primary" onClick={() => toggleSummaryModal(false)}><Typography>ok</Typography></Button>
      </div>
    </Paper>
  )
});

export default Summary
