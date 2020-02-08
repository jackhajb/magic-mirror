import { weatherConditions } from '../constants/weather-conditions.constant' 
import { isNight } from './is-night.util'

export const getWeatherIcon = (cod, sunrise, sunset) => {
  const currentlyNight = isNight(sunrise, sunset);

  if (weatherConditions[cod]) {
    return currentlyNight? weatherConditions[cod].icon[1] : weatherConditions[cod].icon[0]
  }
  if (!weatherConditions[cod]) {
    return weatherConditions.unknown.icon[0]
  }
}