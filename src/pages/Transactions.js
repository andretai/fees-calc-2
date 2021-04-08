import React from 'react';
import Summary from '../components/transactions/Summary';
import Guide from '../components/transactions/Guide';
import Records from '../components/transactions/Records';

const Transactions = () => {
  const [summary, setSummary] = React.useState(false);
  const toggleSummary = () => {
    setSummary(true);
  }
  return (
    <div>
      <div id="buttons">
        <button>new transaction</button>
        <button onClick={() => toggleSummary()}>calculate profit/loss</button>
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
