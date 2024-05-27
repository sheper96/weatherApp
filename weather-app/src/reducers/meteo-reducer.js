import { locationAPI, weatherAPI } from "../features/App/api"
import { setAppStatusAC } from "../features/App/app-reducer"

let initialState = {
    locationData: [
        {
            addresstype: "",
            boundingbox: [],
            class: "",
            display_name: "",
            importance: 0,
            lat: "",
            licence: "",
            lon: "",
            name: "",
            osm_id: 0,
            osm_type: "",
            place_id: 0,
            place_rank: 0,
            type: ""
        }
    ],
    weatherData: {
        current: {
            time: '',
            interval: 0,
            is_day: 0,
            relative_humidity_2m: 0,
            temperature_2m: 0,
            wind_speed_10m: 0,
            weather_code: 0,

        },
        currentUnits: {
            time: '',
            interval: '',
            wind_speed_10m: '',
            is_day: "",
            relative_humidity_2m: "",
            temperature_2m: "",
            weather_code: "",
        },
        daily: {
            time: '',
            weather_code: 0,
            temperature_2m_min: '',
            temperature_2m_max: '',
        },
        daily_units: {
            temperature_2m_max: "°C",
            temperature_2m_min: "°C",
            time: "iso8601",
            weather_code: "wmo code"
        },
        elevation: 0,
        generationTimeMs: 0,
        latitude: 0,
        longitude: 0,
        timezone: 'GMT',
        timezoneAbbreviation: 'GMT',
        utcOffsetSeconds: 0
    }
}





export const meteoReducer = (state = initialState, action) => {


    switch (action.type) {
        case "METEO/SET-LOCATION-DATA":
            return { ...state, locationData: action.locationData }
        case "METEO/SET-WEATHER-DATA":
            return { ...state, weatherData: action.weatherData }
        default: return state
    }

}

//ac

export const setLocationData = (locationData) => {

    return { type: "METEO/SET-LOCATION-DATA", locationData: locationData }
}

export const setWeatherData = (weatherData) => {

    return { type: "METEO/SET-WEATHER-DATA", weatherData: weatherData }
}



//tc

export const setLocationDataTC = (cityName) => async (dispatch, getState) => {


    try {
        const res = await locationAPI.getLocation(cityName)
        if (res) {
            dispatch(setLocationData(res.data))
        }
    }
    catch (error) {
        console.error("An error occurred while fetching location data:", error);
    } finally {

    }
}

export const setWeatherDataTC = (latitude, longitude) => async (dispatch, getState) => {
    dispatch(setAppStatusAC('loading'))
    try {
        const res = await weatherAPI.getWeatherData(latitude, longitude)
        if (res) {
            dispatch(setWeatherData(res.data))
        }

    }
    catch (error) {
        console.error("An error occurred while fetching weather data:", error);
    } finally {
        dispatch(setAppStatusAC('succeeded'))
    }
}






