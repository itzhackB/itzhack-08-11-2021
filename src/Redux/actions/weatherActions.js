import { SET_LOCATION, GET_CURRENT_CITY, CURRENT_CITY_WEEK_WEATHER, SET_LOADING } from "./types";
import axios from "axios";

const API_KEY = 'SMWoYBgzohr64Y8FpGTAu6TBnmN8Eg7W'
const autoComplelteURL = 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey='
const weeklyWeatherURL = "https://dataservice.accuweather.com/forecasts/v1/daily/5day/"
const currentURL = 'https://dataservice.accuweather.com/currentconditions/v1/'
const geoURL = 'https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?'

export const GetdeafultCity = (city) => async dispatch => {
    const response = await axios.get(`${autoComplelteURL}${API_KEY}&q=${city}`)
    await dispatch({ type: SET_LOCATION, payload: { city: response?.data[0].LocalizedName, cityKey: response.data[0].Key } })
    let cityKey = response.data[0].Key;
    await dispatch(getLocationWeather(cityKey))
}

export const getCityByGeo = (lat, lon) => async dispatch => {
    const response = await axios.get(`${geoURL}apikey=${API_KEY}&q=${lat},${lon}`)
    await dispatch({ type: SET_LOCATION, payload: { city: response.data.LocalizedName, cityKey: response.data.Key } })
    let cityKey = response.data.Key
    await dispatch(getLocationWeather(cityKey))

}

export const getLocationWeather = cityKey => async dispatch => {
    await dispatch(currentWeather(cityKey))
    await dispatch(getWeekCurrentWeather(cityKey))
    await dispatch({type: SET_LOADING})
}

export const currentWeather = cityKey => async dispatch => {
    const response = await axios.get(`${currentURL}${cityKey}?apikey=${API_KEY}&getphotos=true`)
    await dispatch({ type: GET_CURRENT_CITY, payload: response.data[0] })

}


export const getWeekCurrentWeather = cityKey => async dispatch => {
    const response = await axios.get(`${weeklyWeatherURL}${cityKey}?apikey=${API_KEY}`)
    await dispatch({ type: CURRENT_CITY_WEEK_WEATHER, payload: response.data.DailyForecasts })

}