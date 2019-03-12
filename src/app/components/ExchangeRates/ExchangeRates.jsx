import React from 'react';
import { connect } from 'react-redux';
import { arrayOf, shape, number, string } from 'prop-types';
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
          currency.map((row) => (
            <ExchangeRatesTableRow key={Math.random()} currency={row.currency} saleRateNB={row.saleRateNB} purchaseRateNB={row.purchaseRateNB} />)
          )
        }
        
      </tbody>
    </table>
  )
}

ExchangeRates.propTypes = {
  currency: arrayOf(shape({
    currency: string,
    saleRateNB: number,
    purchaseRateNB: number
  })).isRequired
};

const getData = (state) => {
  return state;
}

export default connect(getData)(ExchangeRates);