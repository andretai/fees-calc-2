import React from 'react';
import Summary from '../components/transactions/Summary';
import Guide from '../components/transactions/Guide';
import Records from '../components/transactions/Records';
import AddRecord from '../components/transactions/AddRecord';
import constants from '../components/transactions/Constants';
import { Button, Modal, Typography } from '@material-ui/core';


const Transactions = () => {

  // States
  const [records, setRecords] = React.useState([]);
  const [addRecordModal, toggleAddRecordModal] = React.useState(false);
  const [summaryModal, toggleSummaryModal] = React.useState(true);

  // Functions
  const addRecord = record => {
    record.id = records.length + 1;
    record.cost = constants.calculate_cost(record.price, record.quantity);
    setRecords([...records, record]);
  };

  return (
    <div>
      <div id="buttons">
        <Button color="primary" variant="contained">
          <Typography variant="button" onClick={() => toggleAddRecordModal(true)}>new transaction</Typography>
        </Button>
        <Button color="secondary" variant="contained" onClick={() => toggleSummaryModal(true)}>
          <Typography variant="button">calculate profit/loss</Typography>
        </Button>
      </div>
      <Modal open={addRecordModal} onClose={() => toggleAddRecordModal(false)}>
        <AddRecord addRecord={addRecord} toggleAddRecordModal={toggleAddRecordModal}/>
      </Modal>
      <Modal open={summaryModal} onClose={() => toggleSummaryModal(false)}>
        <Summary records={records} calculate_pl={constants.calculate_pl} toggleSummaryModal={toggleSummaryModal}/>
      </Modal>
      <div id="guide">
        <Guide/>
      </div>
      <div id="records">
        <Records records={records}/>
      </div>
      <button onClick={() => console.log(records)}>console.log</button>
    </div>
  )
}

export default Transactions
