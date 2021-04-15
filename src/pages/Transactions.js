import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Summary from '../components/transactions/Summary';
import Guide from '../components/transactions/Guide';
import Records from '../components/transactions/Records';
import AddRecord from '../components/transactions/AddRecord';
import constants from '../components/transactions/Constants';
import { Button, Grid, Modal, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  page: {
    backgroundColor: '#f7fff7',
    height: '100vh',
    padding: '32px 16px'
  },
  section: {
    marginBottom: '16px'
  },
  button: {
    width: '100%',
    padding: '8px 16px'
  },
  buttonText: {
    fontWeight: 600, textAlign: 'left', lineHeight: '130%'
  }
}));

const Transactions = () => {

  // CSS
  const classes = useStyles();

  // States
  const [records, setRecords] = React.useState([]);
  const [addRecordModal, toggleAddRecordModal] = React.useState(false);
  const [summaryModal, toggleSummaryModal] = React.useState(false);

  // Functions
  const addRecord = record => {
    record.id = records.length + 1;
    record.cost = constants.calculate_cost(record.price, record.quantity);
    setRecords([...records, record]);
  };

  const removeRecord = removedRecord => {
    console.log('Removing.. ', removedRecord);
    let updatedRecords = records.filter(record => {
      return record.id !== removedRecord.id;
    });
    setRecords([...updatedRecords]);
  }

  return (
    <div className={classes.page}>
      <Grid container spacing={1} className={classes.section}>
        <Grid item xs={6}>
          <Button color="primary" variant="contained" className={classes.button}>
            <Typography variant="button" className={classes.buttonText} onClick={() => toggleAddRecordModal(true)}>add new transaction</Typography>
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button color="secondary" variant="contained" className={classes.button} onClick={() => toggleSummaryModal(true)}>
            <Typography variant="button" className={classes.buttonText}>calculate Profit/Loss</Typography>
          </Button>
        </Grid>
      </Grid>
      <Modal open={addRecordModal} onClose={() => toggleAddRecordModal(false)}>
        <AddRecord addRecord={addRecord} toggleAddRecordModal={toggleAddRecordModal}/>
      </Modal>
      <Modal open={summaryModal} onClose={() => toggleSummaryModal(false)}>
        <Summary records={records} calculate_pl={constants.calculate_pl} toggleSummaryModal={toggleSummaryModal}/>
      </Modal>
      <div className={classes.section}>
        <Guide/>
      </div>
      <div id="records">
        <Records records={records} removeRecord={removeRecord}/>
      </div>
    </div>
  )
}

export default Transactions
