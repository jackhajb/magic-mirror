import React from 'react';
import logo from './logo.svg';
import './App.css';
import { icons } from './assets/icons/weather/white/svg/index'
import { WeatherContainer } from './containers/weather.container';
import { WeatherProvider } from './store/weather-store';


const { tstorms } = icons;

function App() {
  return (
    <div className="App">
        <WeatherProvider>
          <WeatherContainer/>
        </WeatherProvider>
    </div>
  );
}

/*
import { StoreProvider } from './state/store';

export const App = () => (
    <StoreProvider>
        <Main />
    </StoreProvider>
);
*/

export default App;
