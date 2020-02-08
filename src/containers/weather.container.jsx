import React, { useContext, useEffect } from 'react';
import { WeatherStore } from '../store/weather-store';
import { WeatherComponent } from '../components/weather.component'
import { fetchWeather } from '../actions/fetch-weather.action';
import { useInterval } from '../hooks/custom-hooks.hook';

export const WeatherContainer = () => {
  const { dispatch } = useContext(WeatherStore);
  
  const getWeather = () => {
    fetchWeather(dispatch)
  }

  useEffect(() => getWeather(), [])
  useInterval(getWeather, 1000 * 60 * 15)

  return (
    <WeatherComponent />
  );
};