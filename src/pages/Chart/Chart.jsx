import React, { Component } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import axios from 'axios';
import styles from './Chart.scss';

class Chart extends Component {

  date = new Date();

  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json').then(bankRequest => {
      this.setState({ currencies: bankRequest.data.filter(currency => 
        !(currency.r030 === 981 || currency.r030 === 959 || currency.r030 === 961 || currency.r030 === 962 || currency.r030 === 964)
      ) });
    })
  }

  render() {
    const { currencies } = this.state;
    return (
      <div className={styles.container}>
        <h2>Курс валют</h2>
        <BarChart
          width={700}
          height={400}
          data={currencies}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="txt" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="rate" fill="#8884d8" />
        </BarChart>
      </div>
    )
  }
}

export default Chart;
