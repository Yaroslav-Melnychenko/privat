import axios from 'axios';

import { GOOGLE_MAPS_PUBLIC_INFO_URL } from './constants';

export const getAtmsByCity = () => {
  return axios.get(`${GOOGLE_MAPS_PUBLIC_INFO_URL}`, { dataType: 'jsonp' });
}