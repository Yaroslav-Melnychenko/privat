import React from 'react';
import { arrayOf, shape, number, string } from 'prop-types';

import styles from './ExchangeRates.scss';

const ExchangeRates = (props) => {
  const { currencies } = props;
  return (
    <table className={styles.currencyData}>
      <thead>
        <tr>
          <td>Валюта</td>
          <td>Покупка</td>
          <td>Продажа</td>
        </tr>
      </thead>
      <tbody>
        {
          currencies.map(({ currency, saleRateNB, purchaseRateNB }) => (
            <tr key={currency}>
              <td>{currency}</td>
              <td>{saleRateNB}</td>
              <td>{purchaseRateNB}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
};

ExchangeRates.propTypes = {
  currencies: arrayOf(shape({
    currency: string,
    saleRateNB: number,
    purchaseRateNB: number
  })).isRequired
};

export default ExchangeRates;
