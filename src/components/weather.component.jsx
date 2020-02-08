import React, { useContext } from 'react';
import styled from 'styled-components'
import { WeatherStore } from '../store/weather-store';
import { convertKelvin } from '../utils/kelvin-converter.util';
import { getWeatherIcon } from '../utils/get-weather-icon.util';

const WeatherIcon = styled.img`
  height: 30vh;
`;

const TempMin = styled.div`
  font-family: "Roboto", sans-serif;
  color: deepskyblue;
`;

const TempMax = styled.div`
  font-family: "Roboto", sans-serif;
  color: orangered;
`;

const Temp = styled.div`
  font-family: "Roboto", sans-serif;
`;

const TempContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 50px;
`;

const WeatherDescription = styled.div`
  font-size: 50px;
`

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const WeatherComponent = () => {
  const {state: { currentWeather } } = useContext(WeatherStore);

  if(currentWeather?.main?.temp) {
    const {sys:{ sunrise, sunset }, main: { temp_min, temp_max, temp }, cod, weather} = currentWeather;
    
    return(
      <>
        <div>
          Current Weather
        </div>
        <WeatherIcon src={getWeatherIcon(weather[0].id, sunrise, sunset)} alt='weather-icon'></WeatherIcon>
        <DetailsContainer>
          <TempContainer>
            <TempMin>{convertKelvin(temp_min)}</TempMin>
            <Temp>{convertKelvin(temp)}</Temp>
            <TempMax>{convertKelvin(temp_max)}</TempMax>
          </TempContainer>
          <WeatherDescription>{weather[0].description}</WeatherDescription>
        </DetailsContainer>
      </>
    )
  } else {
    return(
      <div>No Weather</div>
    )
  }
}