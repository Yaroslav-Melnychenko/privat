import axios from 'axios';

import { PRIVAT_PUBLIC_INFO_URL } from './constants';

export const getCurrentCashRate = () => {
  return axios.get(`${PRIVAT_PUBLIC_INFO_URL}?json`);
};

export const getCurrentCashByDate = (date) => {
  return axios.get(`${PRIVAT_PUBLIC_INFO_URL}?date=${date}&json`);
}
