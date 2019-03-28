import axios from 'axios';

import { NBU_PUBLIC_INFO_URL } from './constants';

export const getCurrentCashRate = () => {
  return axios.get(`${NBU_PUBLIC_INFO_URL}?json`);
};

export const getCurrentCashByDate = (date) => {
  return axios.get(`${NBU_PUBLIC_INFO_URL}?date=${date}&json`);
}
