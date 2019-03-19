import axios from 'axios';

import { GOOGLE_MAPS_PUBLIC_INFO_URL } from './constants';

const getLocationString = () => {
  if (navigator.geolocation) {
    return new Promise(
      (resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject) 
    ).then(position => position.coords.latitude + ',' + position.coords.longitude);
  } else {
    return axios.get('http://ip-api.com/json').then( json => json.data.lat + ',' + json.data.lon)
      .catch(err => window.console.log(err));
  }
  
}

export const getAtmsByCity = async () => {
  const location = await getLocationString();
  return axios.get(`${GOOGLE_MAPS_PUBLIC_INFO_URL}?location=${location}&radius=1000&type=bank&keyword=&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`, { dataType: 'jsonp' });
}