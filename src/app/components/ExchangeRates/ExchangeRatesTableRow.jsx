import React from 'react';

const ExchangeRatesTableRow = (props) => {
  const { currency, saleRateNB, purchaseRateNB } = props;
  return (
    <tr>
      <td>{currency}</td>
      <td>{saleRateNB}</td>
      <td>{purchaseRateNB}</td>
    </tr>
  )
}
export default ExchangeRatesTableRow;