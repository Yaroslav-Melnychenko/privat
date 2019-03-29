import axios from 'axios';

import { WEATHER_PUBLIC_INFO_URL, GOOGLE_MAPS_IMG } from './constants';

const getLocationString = () => {
    return axios.get('http://ip-api.com/json').then( json => {
      return json.data.city;
    })
}

export const getImgByCity = (city) => {
  return axios.get(`${GOOGLE_MAPS_IMG}?query=${city}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)
    .then(json => {
      const reference = json.data.results[ 0 ].photos[ 0 ].photo_reference;
      return axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?photoreference=${reference}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&maxwidth=1920`)
        .then(image => image)
    })
}

export const getWeatherByCity = async () => {
  const location = await getLocationString();
  return axios.get(`${WEATHER_PUBLIC_INFO_URL}?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`, { dataType: 'jsonp' });
}