import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import { ArrowDownward, ArrowUpward, Filter1, Filter2, Filter3 } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: '12px',
    border: '0.5px',
    borderStyle: 'solid',
    borderColor: '#1a535c'
  },
  root: {
    paddingTop: '0px'
  },
  step: {
    display: 'flex',
    justifyContent: 'center'
  },
  text: {
    padding: '0 12px',
    fontWeight: 700
  }
}));

const Guide = () => {

  // CSS
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container className={classes.root}>
        <Grid item xs={6} className={classes.step}><ArrowUpward style={{ margin: 'auto' }}/></Grid>
        <Grid item xs={6} className={classes.step}><ArrowUpward style={{ margin: 'auto' }}/></Grid>
        <Grid item xs={6} className={classes.step}>
          <Filter1 style={{ color: '#ff6b6b' }}/>
          <Typography variant="caption" className={classes.text}>Click to add new transactions.</Typography>
        </Grid>
        <Grid item xs={6} className={classes.step}>
          <Filter2 style={{ color: '#4ecdc4'}}/>
          <Typography variant="caption" className={classes.text}>Click to calculate profit/loss.</Typography>
        </Grid>
        <div style={{ height: '100px' }}></div>
        <Grid item xs={12} className={classes.step}>
          <Filter3 style={{ color: '#1a535c' }}/>
          <Typography variant="caption" className={classes.text}>Logged transactions.</Typography>
          <ArrowDownward/>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Guide
