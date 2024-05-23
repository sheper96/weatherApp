import { useSelector } from 'react-redux';
import CurrentWeatherBlock from './Weather/CurrentWeather/CurrentWeatherBlock';
import DailyWeather from './Weather/DailyWeather/DailyWeather';
import Search2 from '../Search/Search';
import s from './mainPage.module.css'
import Preloader from '../../common/Preloader/Preloader';

function WeatherApp() {
  const currentWeatherData = useSelector(state => state.meteoData.weatherData.current);
  const dailyWeatherData = useSelector(state => state.meteoData.weatherData.daily)
  const locationData = useSelector(state => state.meteoData.locationData[0].name)
  const status = useSelector(state=> state.app.status)

  return (
    <div className={s.container}>
      <div className={s.appName}>
        <h2>Weather App</h2>
      </div>
     
      <Search2 />
      {status === "loading" ? <Preloader/> : ( <div>
      {currentWeatherData.time !== "" && <CurrentWeatherBlock time={currentWeatherData.time}
        temperature={currentWeatherData.temperature_2m}
        windSpeed={currentWeatherData.wind_speed_10m}
        currentWeatherData={currentWeatherData}
        location={locationData} 
        isDay = {currentWeatherData.is_day}/>}
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
      </div>)  }
      
    </div>
  );
}

export default WeatherApp;
