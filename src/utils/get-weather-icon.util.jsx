import { weatherConditions } from '../constants/weather-conditions.constant' 

export const getWeatherIcon = (cod) => {
  console.log(cod)
  if (weatherConditions[cod]) {
    return weatherConditions[cod].icon[0]
  }
  if (!weatherConditions[cod]) {
    return weatherConditions.unknown.icon[0]
  }
}