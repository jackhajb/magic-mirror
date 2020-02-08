import axios from 'axios';

const APP_ID = process.env.REACT_APP_OPEN_WEATHER_APP_ID;

const OPEN_WEATHER_BASE_API_URL = 'http://api.openweathermap.org';

const apiInstance =  axios.create({
  baseURL: OPEN_WEATHER_BASE_API_URL,
})

const urls = {
  zipCode: `/data/2.5/weather?zip=11226,us&APPID=${APP_ID}`,
};

const getWeather = () => {
  return apiInstance.get(urls.zipCode)
}

export const OpenWeatherService = {
  getWeather,
  urls,
  apiInstance,
}
