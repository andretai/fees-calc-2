import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: '12px'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  button: {
    width: '50%',
    margin: '0 6px'
  },
  remove: {
    color: '#ff6b6b'
  }
}));

const ViewRecord = React.forwardRef((props, ref) => {

  // CSS
  const classes = useStyles();

  // Props
  const { record, removeRecord } = props;

  // Functions
  const handleRemoval = record => removeRecord(record);

  return (
    <div className={classes.paper}>
      <div className={classes.buttons}>
        <Button variant="text" className={classes.button} color="primary" disabled>
          <Typography variant="caption" onClick={() => console.log()}></Typography>
        </Button>
        <Button variant="text" className={`${classes.button} ${classes.remove}`} onClick={() => handleRemoval(record)}>
          <Typography variant="caption" style={{ fontWeight: 800 }}>remove</Typography>
        </Button>
      </div>
    </div>
  )
})

export default ViewRecord
