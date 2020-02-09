import { OpenWeatherService } from "../services/weather.service";
import * as fakeData from '../data/open-weather/open-weather-zip.json'

export const fetchWeather = async (dispatch) => {
  try {
    const weather = await OpenWeatherService.getWeather();
    dispatch({
      type: "FETCH_WEATHER_SUCCESS",
      payload: weather.data,
    })
  } catch(err) {
    dispatch({
      type: "FETCH_WEATHER_SUCCESS",
      payload: fakeData.data,
    })
  }
}