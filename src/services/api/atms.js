import axios from 'axios';

import { GOOGLE_MAPS_PUBLIC_INFO_URL } from './constants';

const getLocationString = () => {
  return axios.get('http://ip-api.com/json').then( json => json.data.lat + ',' + json.data.lon);
}

export const getAtmsByCity = async () => {
  const location = await getLocationString();
  return axios.get(`${GOOGLE_MAPS_PUBLIC_INFO_URL}?location=${location}&radius=1000&type=bank&keyword=&key=AIzaSyD9GBzVe77PVf3x1FrvDkJCd51-I0gpFf0`, { dataType: 'jsonp' });
}