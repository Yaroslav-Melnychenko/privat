import React, { Component } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import axios from 'axios';
import styles from './Chart.scss';

class Chart extends Component {

  data = [
    { name: '2000', uv: 1000 },
    { name: '2001', uv: 3000 }
  ];

  jsfiddleUrl = 'https://jsfiddle.net/alidingling/Lrffmzfc/';

  constructor() {
    super();
    this.state = {
      date: new Date(),
      // coordinates: []
    }
  }

  componentDidMount() {
    const { date } = this.state;
    let mounth = date.getMonth() + 1;
    // const day = date.getDate();
    
    if(mounth < 10) {
      mounth = '0' + mounth;
    }

    // for (let i = 0; i <= day; i++) {
      axios.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=2019${mounth}10&json`).then(response => {
        const dollarUsa = response.data.filter(currency => currency.r030 === 840);
        this.data.push(dollarUsa);
      })
    // }
    // this.setState(this.data);
  }

  render() {
    // setTimeout(window.console.log(this.data), 5000)
    return (
      <div className={styles.container}>
        <AreaChart
          width={500}
          height={400}
          data={this.data}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </div>
    )
  }
}

export default Chart;
