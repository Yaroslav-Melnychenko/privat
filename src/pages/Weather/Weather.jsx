import React from 'react';
import styles from './Weather.scss';

const Weather = () => {
  return (
    <div className={styles.container}>
      <div className={styles.weather}>
        <div className={styles.city}>Paris</div>
        <div className={styles.temperature}>17</div>
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default Weather;