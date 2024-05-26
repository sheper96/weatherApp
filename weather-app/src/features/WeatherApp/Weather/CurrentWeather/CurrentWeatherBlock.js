import React from 'react';
import s from './currentWeatherBlock.module.css'
import { getWeatherImage } from '../../../../utils/weatherImage';



const CurrentWeatherBlock = ({ time, temperature, windSpeed, currentWeatherData, location,isDay,humidity })=> {

  const weatherImage = getWeatherImage(currentWeatherData.weather_code,isDay);

  return (
    <div className={s.container}>
      <h2>Weather in {location}</h2>
      <div className={s.weatherBlock}>
        <div className={s.weatherInfo}>
          <div className={s.weatherInfoItem}>
            <h3>Humidity:</h3>
            <p>{humidity} %</p>
          </div>
          <div className={s.weatherInfoItem}>
            <h3>Temperature:</h3>
            <p>{temperature}°C</p>
          </div>
          <div className={s.weatherInfoItem}>
            <h3>Wind:</h3>
            <p>{windSpeed} km/h</p>
          </div>
        </div>
        <div className={s.weatherIcon}> <img src={weatherImage} alt="Weather" /></div>
      </div>
    </div>
  );
}

export default CurrentWeatherBlock;
