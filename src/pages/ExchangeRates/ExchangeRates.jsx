import React from 'react';
import { arrayOf, shape, number, string } from 'prop-types';
import DatePicker from 'react-datepicker';
 
import 'react-datepicker/dist/react-datepicker.css';
import styles from './ExchangeRates.scss';

const ExchangeRates = (props) => {
  const { currencies } = props;

  return (
    <div>
      <span className={styles.mdate}>Select date: </span>
      <DatePicker selected={new Date()} className={styles.mdate} />
      <table className={styles.currencyData}>
        <thead>
          <tr>
            <td>Валюта</td>
            <td>Основная Валюта</td>
            <td>Покупка</td>
            <td>Продажа</td>
          </tr>
        </thead>
        <tbody>
          {
            currencies.map(({ ccy, base_ccy, buy, sale }) => (
              <tr key={base_ccy}>
                <td>{ccy}</td>
                <td>{base_ccy}</td>
                <td>{buy}</td>
                <td>{sale}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
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
