import React, { useEffect } from 'react';
import { arrayOf, shape, number, string, func } from 'prop-types';
import DatePicker from 'react-datepicker';
 
import 'react-datepicker/dist/react-datepicker.css';
import styles from './ExchangeRates.scss';

const ExchangeRates = (props) => {
  const { currencies, fetchData } = props;
  const date = new Date();

  useEffect(() => {fetchData()}, []);

  const changeDate = () => {
    //сode
  }

  return (
    <div>
      <span className={styles.mdate}>Select date: </span>
      <DatePicker 
        onSelect={changeDate()}
        // selected={date}
        maxDate={date}
        className={styles.mdate}
      />
      <table className={styles.currencyData}>
        <thead>
          <tr>
            <td>Основная валюта</td>
            <td>Валюта</td>
            <td>Покупка</td>
            <td>Продажа</td>
          </tr>
        </thead>
        <tbody>
          {
            currencies.map(({ ccy, base_ccy, buy, sale }) => (
              <tr key={ccy}>
                <td>{base_ccy}</td>
                <td>{ccy}</td>
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
  })).isRequired,
  fetchData: func.isRequired
};

export default ExchangeRates;
