import React, { useEffect, useState } from 'react';
import { getWeatherByCity, getImgByCity } from 'Services/api/weather';
import styles from './Weather.scss';

const Weather = () => {

  const [ weather, setWeather ] = useState({});
  const [ cityUrl, setCityUrl ] = useState('');

  useEffect(() => {
    getWeatherByCity().then(json => {
      setWeather(json.data);
      return json.data;
    }).then(data => getImgByCity(data.name).then(url => setCityUrl(url)));
  }, []);

  return (
    <div className={styles.container} style={{ backgroundImage: `url(${cityUrl})` }}>
      {weather.main ? (
        <div className={styles.infoContainer}>
          <h2>
            {weather.name}
            <img className={styles.img} src={`http://openweathermap.org/img/w/${weather.weather[ 0 ].icon}.png`} alt="" />
          </h2>
          <ul className={styles.list}>
            <li>{`Температура: ${weather.main.temp}`}</li>
            <li>{`Влажность: ${weather.main.humidity}`}</li>
            <li>{`Давление: ${weather.main.pressure}`}</li>
          </ul>
        </div>
      ) : <div>Loading weather ...</div>}
    </div>
  )
}

export default Weather;