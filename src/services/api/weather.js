import axios from 'axios';

import { WEATHER_PUBLIC_INFO_URL } from './constants';

const getLocationString = () => {
  if (navigator.geolocation) {
    return new Promise(
      (resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject) 
    ).then(position => 'lat=' + position.coords.latitude + '&lon=' + position.coords.longitude);
  } else {
    return axios.get('http://ip-api.com/json').then( json => json.data.lat + ',' + json.data.lon)
      .catch(err => window.console.log(err));
  }
  
}

export const getWeatherByCity = async () => {
  const location = await getLocationString();
  return axios.get(`${WEATHER_PUBLIC_INFO_URL}?${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`, { dataType: 'jsonp' });
}