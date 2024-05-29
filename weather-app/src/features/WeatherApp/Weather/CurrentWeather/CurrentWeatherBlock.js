import React from 'react';
import s from './currentWeatherBlock.module.css'
import { getWeatherImage } from '../../../../utils/weatherImage';
import { useSelector } from 'react-redux';

const CurrentWeatherBlock = () => {

  const currentWeatherData = useSelector(state => state.meteoData.weatherData.current);
  const currentWeatherDataUnits = useSelector(state => state.meteoData.weatherData.current_units);
  const locationData = useSelector(state => state.meteoData.locationData[0].name);
  const weatherImage = getWeatherImage(currentWeatherData.weather_code, currentWeatherData.is_day);

  return (
    <div className={s.container}>
      <h2>Weather in {locationData}</h2>
      <div className={s.weatherBlock}>
        <div className={s.weatherInfo}>
          <div className={s.weatherInfoItem}>
            <h3>Temperature:</h3>
            <p>{currentWeatherData.temperature_2m + " " + currentWeatherDataUnits.temperature_2m}</p>
          </div>
          <div className={s.weatherInfoItem}>
            <h3>Wind:</h3>
            <p>{currentWeatherData.wind_speed_10m + " " + currentWeatherDataUnits.wind_speed_10m}</p>
          </div>
          <div className={s.weatherInfoItem}>
            <h3>Humidity:</h3>
            <p>{currentWeatherData.relative_humidity_2m + " " + currentWeatherDataUnits.relative_humidity_2m}</p>
          </div>
        </div>
        <div className={s.weatherIcon}> <img src={weatherImage} alt="Weather" /></div>
      </div>
    </div>
  );
}

export default CurrentWeatherBlock;
