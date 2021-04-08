import React from 'react';
import Summary from '../components/transactions/Summary';
import Guide from '../components/transactions/Guide';
import Records from '../components/transactions/Records';
import { Button } from '@material-ui/core';

const Transactions = () => {
  const [summary, setSummary] = React.useState(false);
  const toggleSummary = () => {
    setSummary(true);
  }
  return (
    <div>
      <div id="buttons">
        <Button color="primary" variant="contained">new transaction</Button>
        <Button color="secondary" onClick={() => toggleSummary()}>calculate profit/loss</Button>
      </div>
      <div id="summaryOrGuide">
        { summary === true ? <Summary/> : <Guide/> }
      </div>
      <div id="records">
        <Records/>
      </div>
    </div>
  )
}

export default Transactions
