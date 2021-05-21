import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { format } from 'date-fns';
import axios from 'axios';

import { WeatherForecast } from './types';
import Temperature from './components/Temperature';
import WeeklyReport from './components/WeeklyReport';
import Toolbar from './components/Toolbar';

let App = () => {
  const todaysDate = format(new Date(), 'EEEE, MMMM dd');
  const [zipCode, setZipCode] = useState('60618');
  const [weatherForecast, setWeatherForecast] = useState({});

  const fetchWeather = async (zipCode: string) => await axios.get(`/weather/${zipCode}`);

  useEffect(() => {
    const getWeatherForecast = async () => {
      const { data } = await fetchWeather(zipCode);
      setWeatherForecast(data);
    };

    getWeatherForecast();
  }, [zipCode]);

  return (
    <article id="app" className="bg-white">
      <Temperature
        zipCode={zipCode}
        todaysDate={todaysDate}
        weatherForecast={weatherForecast} />
      <WeeklyReport weatherForecast={weatherForecast} />
      <Toolbar setZipCode={setZipCode} />
    </article>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
