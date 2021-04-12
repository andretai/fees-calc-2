import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, FormLabel, FormControlLabel, Paper, Radio, RadioGroup, TextField, Typography } from '@material-ui/core';
import { PlaylistAdd } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  paper: {
    margin: '64px 32px',
    padding: '32px 32px 36px 32px'
  },
  field: {
    margin: '6px 0',
    width: '100%'
  },
  buttons: {
    marginTop: '12px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  cancel: {
    color: '#ff6b6b'
  }
}));

const AddRecord = React.forwardRef((props, ref) => {
  let record = {
    id: null,
    type: null,
    code: null,
    name: null,
    price: null,
    quantity: null,
    cost: null
  };
  const classes = useStyles();
  const addRecord = props.addRecord;
  const toggleAddRecordModal = props.toggleAddRecordModal;
  const handleChange = e => {
    record[e.target.name] = e.target.value;
  }
  const handleSubmit = () => {
    addRecord(record);
    handleCancel();
  }
  const handleCancel = () => toggleAddRecordModal(false);
  return (
    <Paper className={classes.paper}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginBottom: '24px' }}>
          <PlaylistAdd/>
          <Typography variant="h6">New Transaction</Typography>
        </div>
        <form>
          <div className={classes.field}>
            <FormLabel component="legend">
              <Typography variant="caption">Type</Typography>
            </FormLabel>
            <RadioGroup row name="type" onChange={e => handleChange(e)}>
              <FormControlLabel value="buy" label="Buy"
                control={<Radio color="primary"/>}
              />
              <FormControlLabel value="sell" label="Sell"
                control={<Radio color="primary"/>}
              />
            </RadioGroup>
          </div>
          <TextField className={classes.field} variant="outlined" label="Stock Code" name="code" onChange={e => handleChange(e)}/>
          <TextField className={classes.field} variant="outlined" label="Stock Name" name="name" onChange={e => handleChange(e)}/>
          <TextField className={classes.field} variant="outlined" label="Stock Quantity" type="number" name="quantity" onChange={e => handleChange(e)}/>
          <TextField className={classes.field} variant="outlined" style={{ marginBottom: '16px' }} label="Stock Price" type="number" name="price" onChange={e => handleChange(e)}/>
        </form>
        <div className={classes.buttons}>
          <Button variant="contained" color="primary" style={{ width: '100%' }} onClick={() => handleSubmit()}>
            <Typography variant="button">submit</Typography>
          </Button>
          <Button variant="text" style={{ width: '100%' }}>
            <Typography className={classes.cancel} variant="button" onClick={() => handleCancel()}>cancel</Typography>
          </Button>
        </div>
      </div>
    </Paper>
  )
})

export default AddRecord;
