import React, { useState, useEffect } from 'react';
import { arrayOf, shape, number, string, func } from 'prop-types';
import DatePicker from 'react-datepicker';
 
import 'react-datepicker/dist/react-datepicker.css';
import styles from './ExchangeRates.scss';

const ExchangeRates = (props) => {
  const { currencies, fetchData, fetchDataByDate } = props;
  const nowDate = new Date();
  const [ currencyDate, setCurrencyDate ] = useState(nowDate);

  useEffect(() => {fetchData()}, []);

  const handleChangeDatePicker = (date) => {
    setCurrencyDate(date);
  }

  const changeDate = () => {
    const year = currencyDate.getFullYear();
    let month = currencyDate.getMonth() + 1;
    let dt = currencyDate.getDate();

    if (dt < 10) dt = '0' + dt;
    if (month < 10) month = '0' + month;
    const newDateFormat =(year + month + dt).toString();

    fetchDataByDate(newDateFormat);
  }

  const resetDate = () => {
    fetchData();
    setCurrencyDate(nowDate);
  }

  return (
    <div>
      <span className={styles.mdate}>Курс по дате: </span>
      <DatePicker 
        selected={currencyDate}
        maxDate={nowDate}
        onChange={handleChangeDatePicker}
        className={styles.mdate}
      />
      <button onClick={changeDate} type='button'>Подтвердить</button>
      <button onClick={resetDate} type='button'>Сброс</button>
      <table className={styles.currencyData}>
        <thead>
          <tr>
            <td>Валюта</td>
            <td>Код валюты</td>
            <td>Продажа</td>
          </tr>
        </thead>
        <tbody>
          {
            currencies.map(({ r030, txt, rate, cc }) => (
              <tr key={r030}>
                <td>{txt}</td>
                <td>{cc}</td>
                <td>{rate}</td>
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
  fetchData: func.isRequired,
  fetchDataByDate: func.isRequired
};

export default ExchangeRates;
