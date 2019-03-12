import React from 'react';
import { connect } from 'react-redux';
import styles from './ExchangeRates.scss';
import ExchangeRatesTableRow from './ExchangeRatesTableRow';

const ExchangeRates = (props) => {
  const { currency } = props; 
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
          currency.map((row, i) => (
            <ExchangeRatesTableRow key={i} currency={row.currency} saleRateNB={row.saleRateNB} purchaseRateNB={row.purchaseRateNB} />)
          )
        }
        
      </tbody>
    </table>
  )
}

const getData = (state) => {
  return state;
}

export default connect(getData)(ExchangeRates);