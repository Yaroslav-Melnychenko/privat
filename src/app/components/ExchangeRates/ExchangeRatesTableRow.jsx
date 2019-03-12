import React from 'react';
import { string, number } from 'prop-types';

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
ExchangeRatesTableRow.propTypes = {
  currency: string.isRequired,
  saleRateNB: number.isRequired,
  purchaseRateNB: number.isRequired
};
export default ExchangeRatesTableRow;