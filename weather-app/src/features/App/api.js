import axios from 'axios'

export const instance1 = axios.create({
    baseURL: 'https://nominatim.openstreetmap.org/',

})

export const instance2 = axios.create({
    baseURL: 'https://api.open-meteo.com/v1/',

})

export const locationAPI = {
    getLocation(query) {
        return instance1.get(`search?q=${query ? query : ''}&format=json`)
    }

}

export const weatherAPI = {
    getWeatherData(latitude, longitude) {
        return instance2.get(`forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day,wind_speed_10m,weather_code,relative_humidity_2m,apparent_temperature&daily=weather_code,temperature_2m_min,temperature_2m_max`)
    }
}