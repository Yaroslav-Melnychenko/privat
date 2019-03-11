import axios from 'axios';

import { PRIVAT_PUBLIC_INFO_URL } from './constants';

export const getCurrentCashRate = () => {
  return axios.get(`${PRIVAT_PUBLIC_INFO_URL}?json&exchange&coursid=5`);
};

export const getCurrentNoCashRate = () => {
  return axios.get(`${PRIVAT_PUBLIC_INFO_URL}?exchange&json&coursid=11`);
};
