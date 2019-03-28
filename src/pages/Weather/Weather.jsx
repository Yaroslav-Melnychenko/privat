import React, { useEffect } from 'react';
// import sunny from 'Images/weather/sunny.png';
import { getWeatherByCity } from 'Services/api/weather';
import styles from './Weather.scss';

const Weather = () => {

  useEffect(() => {
    window.console.log(getWeatherByCity())
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.weather}>
        <div className={styles.city}>Paris</div>
        <div className={styles.celcius}>
          {/* <img className={styles.weatherPicture} src={sunny} alt="" /> */}
          <span className={styles.temperature}>
            <span>17</span>
            <span className={styles.circle}>o</span>
            <span className={styles.celciusMark}>C</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Weather;