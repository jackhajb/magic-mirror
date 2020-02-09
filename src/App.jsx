import React from 'react';
import './App.css';
import { WeatherContainer } from './containers/weather.container';
import { WeatherProvider } from './store/weather-store';

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
