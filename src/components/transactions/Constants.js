let constants = {
  brokerage: {
    rate: 0.0042,
    min: 12
  },
  clearing: {
    rate: 0.0003,
    max: 1000
  },
  stampduty: {
    rate: 0.001,
    max: 200
  },
  tax: {
    rate: 0.06
  },
  calculation: function(price, quantity) {
    // Gross Value of Purchase/Sale
    var gross = price * quantity;
    // 0.42 % of Transaction Value or a Minimum of RM 12
    var brokerfee = constants.brokerage.rate * gross;
    if (brokerfee < 12) brokerfee = 12;
    // 0.03 % of Transaction Value or a Maximum of RM 1,000
    var clearfee = constants.clearing.rate * gross;
    if (clearfee > 1000) clearfee = 1000;
    // RM 1 per RM 1,000 of Transaction Value for a Maximum of RM 200
    var stampfee = constants.stampduty.rate * gross;
    if (stampfee > 200) stampfee = 200;
    // 6% tax on brokerage fee
    var tax = constants.tax.rate * brokerfee;
    // Total Transaction Cost
    return (brokerfee + clearfee + stampfee + tax).toFixed(2);
  }
}

export default constants;
