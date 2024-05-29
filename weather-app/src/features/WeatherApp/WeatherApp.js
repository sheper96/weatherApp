import React from 'react';
import { useSelector } from 'react-redux';
import CurrentWeatherBlock from './Weather/CurrentWeather/CurrentWeatherBlock';
import DailyWeather from './Weather/DailyWeather/DailyWeather';
import Search from '../Search/Search';
import s from './mainPage.module.css'
import Preloader from '../../common/Preloader/Preloader';


const WeatherApp = () => {
  const currentWeatherData = useSelector(state => state.meteoData.weatherData.current);
  const dailyWeatherData = useSelector(state => state.meteoData.weatherData.daily)
  const status = useSelector(state => state.app.status)

  return (
    <div className={s.container}>
      <div className={s.appName}>
        <h2>Weather App</h2>
      </div>
      <Search />
      {status === "loading" ? <Preloader /> : (<div>
        {currentWeatherData.time !== "" && <CurrentWeatherBlock />}
        <div className={s.dailyWeatherBlock}>
          {dailyWeatherData.time && dailyWeatherData.time.map((date, i) => (
            <div key={i} >
              <DailyWeather min={dailyWeatherData.temperature_2m_min[i]}
                max={dailyWeatherData.temperature_2m_max[i]}
                date={date}
                weatherCode={dailyWeatherData.weather_code[i]}
              />
            </div>
          ))}
        </div>
      </div>)}
    </div>
  );
}

export default WeatherApp;
