import day from './../assets/weather-icons/day.svg';
import night from './../assets/weather-icons/night.svg'
import cloudy from './../assets/weather-icons/cloudy.svg';
import partlyCloudy from './../assets/weather-icons/cloudy-day-1.svg';
import rain1 from './../assets/weather-icons/rainy-1.svg';
import rain2 from './../assets/weather-icons/rainy-2.svg';
import rain3 from './../assets/weather-icons/rainy-3.svg';
import rain4 from './../assets/weather-icons/rainy-4.svg';
import rain5 from './../assets/weather-icons/rainy-5.svg';
import rain6 from './../assets/weather-icons/rainy-6.svg';
import rain7 from './../assets/weather-icons/rainy-7.svg';
import snow1 from './../assets/weather-icons/snowy-1.svg';
import snow2 from './../assets/weather-icons/snowy-2.svg';
import snow3 from './../assets/weather-icons/snowy-3.svg';
import snow4 from './../assets/weather-icons/snowy-4.svg';
import snow5 from './../assets/weather-icons/snowy-5.svg';
import snow6 from './../assets/weather-icons/snowy-6.svg';
import thunder from './../assets/weather-icons/thunder.svg';
import cloudyNight1 from './../assets/weather-icons/cloudy-night-1.svg';
import cloudyNight2 from './../assets/weather-icons/cloudy-night-2.svg';
import cloudyNight3 from './../assets/weather-icons/cloudy-night-3.svg';

const weatherImages = {
  day,
  night,
  cloudy,
  partlyCloudy,
  rain1,
  rain2,
  rain3,
  rain4,
  rain5,
  rain6,
  rain7,
  snow1,
  snow2,
  snow3,
  snow4,
  snow5,
  snow6,
  thunder,
  cloudyNight1,
  cloudyNight2,
  cloudyNight3
};

export function getWeatherImage(code, isDay = 1) {
  if (isDay === 1) {
    if (code === 0) return weatherImages.day;
    if ([1, 2, 3].includes(code)) return weatherImages.partlyCloudy;
    if ([45, 48].includes(code)) return weatherImages.cloudy;
    if ([51, 53, 55].includes(code)) return weatherImages.rain2;
    if ([56, 57].includes(code)) return weatherImages.rain3;
    if ([61, 63, 65].includes(code)) return weatherImages.rain3;
    if ([66, 67].includes(code)) return weatherImages.rain7;
    if ([71, 73, 75].includes(code)) return weatherImages.snow1;
    if (code === 77) return weatherImages.snow2;
    if ([80, 81, 82].includes(code)) return weatherImages.rain6;
    if ([85, 86].includes(code)) return weatherImages.snow3;
    if ([95, 96, 99].includes(code)) return weatherImages.thunder;
  }
  else if (isDay === 0) {
    if (code === 0) return weatherImages.night;
    if ([1, 2, 3].includes(code)) return weatherImages.cloudyNight1;
    if ([45, 48].includes(code)) return weatherImages.cloudyNight2;
    if ([51, 53, 55].includes(code)) return weatherImages.rain4;
    if ([56, 57].includes(code)) return weatherImages.rain5;
    if ([61, 63, 65, 66, 67].includes(code)) return weatherImages.rain6;
    if ([71, 73, 75].includes(code)) return weatherImages.snow4;
    if (code === 77) return weatherImages.snow5;
    if ([80, 81, 82].includes(code)) return weatherImages.rain7;
    if ([85, 86].includes(code)) return weatherImages.snow6;
    if ([95, 96, 99].includes(code)) return weatherImages.thunder;
  }
  return;
}
