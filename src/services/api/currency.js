import axios from 'axios';

import { PRIVAT_PUBLIC_INFO_URL } from './constants';

export const getCurrentCashRate = () => {
  return axios.get(`${PRIVAT_PUBLIC_INFO_URL}/pubinfo?json&exchange&coursid=5`);
};

export const getCurrentNoCashRate = () => {
  return axios.get(`${PRIVAT_PUBLIC_INFO_URL}/pubinfo?exchange&json&coursid=11`);
};

export const getCurrentCashByDate = (date) => {
  return axios.get(`${PRIVAT_PUBLIC_INFO_URL}/exchange_rates?json&date=${date}`, { mode: 'no-cors' });
}
