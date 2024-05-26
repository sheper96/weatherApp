import React from 'react';
import s from './DailyWeather.module.css'
import { getWeatherImage } from '../../../../utils/weatherImage';
import { formatDate } from '../../../../utils/date-util';


const DailyWeather=({ min, max, date, weatherCode}) =>{
 

  const weatherImage = getWeatherImage(weatherCode);

  const formattedDate = formatDate(date)
  console.log(date)

  return (
    <div className={s.DailyWeather}>
      <div className={s.date}>{formattedDate}</div>
      <div className={s.temperature}>
        <div className={s.weatherCode}><img src={weatherImage} alt="Weather" /></div>
        <span className={s.label}>Min: {min}°C </span>
        <span className={s.label}>Max: {max}°C</span>
      </div>
    </div>
  );
}

export default DailyWeather;
