import React, { useEffect, useState } from 'react';
import './WeatherInfoHKO.css';

const WeatherInfoHKO = (props) => {
    const [weather, setWeather]  = useState([])

    useEffect(() => {
      let url = 'https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en';
      fetch(url)
      .then(res => res.json())
      .then(weather => {
        //console.log(weather)
        //extract weather based on
        setWeather(
          {
            "temperatureValue": weather.temperature.data[1].value,
            "temperatureUnit": weather.temperature.data[1].unit,
            "humidityValue": weather.humidity.data[0].value,
            "humidityUnit": weather.humidity.data[0].unit,
            "weatherIcon": "https://www.hko.gov.hk/images/HKOWxIconOutline/pic" + weather.icon + ".png",
            "weatherWarning": weather.warningMessage
          }
          );
      })
      .catch(function (error) {
        console.log('Error during fetch: ' + error.message);     
      });
    }, [])
  
  
    return (
      <div className="weatherInfo">
        <span></span>
        <span>{weather.temperatureValue}</span>
        <span>{weather.temperatureUnit==='C' ? <>&deg;C</>: weather.temperatureUnit}</span>
        <span>&nbsp;{weather.humidityValue}</span>
        <span>{weather.humidityUnit==='percent' ? '%': weather.humidityUnit}</span>
        <span>
        <img src={weather.weatherIcon} alt="Weather"/>
        </span>
        <div className="desc">{weather.weatherWarning}</div>
      </div>
    );
  };

  export default WeatherInfoHKO;