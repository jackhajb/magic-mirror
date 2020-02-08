import React, { useReducer } from 'react';
import { initialState, reducer } from '../reducers/weather.reducer'

export const WeatherStore = React.createContext("");

export function WeatherProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  console.log(value)
  return <WeatherStore.Provider value={value}>{props.children}</WeatherStore.Provider>
}