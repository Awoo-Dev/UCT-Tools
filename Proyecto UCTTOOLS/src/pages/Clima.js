import React, { useState, useEffect } from 'react';
import './Clima.css';
import { FaSun, FaCloudRain } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const API_KEY = '1a725bae2f7b41f3bcb215818232505';

const Clima = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=Temuco,Chile&days=3`);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.log('Error al obtener los datos del clima:', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div><Link to="/chat" className="chat-link">
    <i className="fa fa-comments"></i> Chat
  </Link>
  <header className='headersec'>
        <h1 className='sech1'>UCT TOOLS!</h1>
    </header>
    <div className="clima-container">

<div className="container">
      
      {/* Resto del contenido de tu componente */}
    </div>
      {weatherData && (
        <>
          <div className="clima-header">
            <h2 className="clima-title">Clima en Temuco, Chile</h2>
            <p className="clima-description">{weatherData.current.condition.text}</p>
            {weatherData.current.condition.code === 1000 ? (
              <FaSun className="clima-icon" />
            ) : weatherData.current.condition.code >= 1063 && weatherData.current.condition.code <= 1195 ? (
              <FaCloudRain className="clima-icon" />
            ) : null}
            {weatherData.current.condition.text.toLowerCase().includes('rain') && (
              <p className="clima-message">Creo que un paraguas no estaría de más</p>
            )}
            {weatherData.current.temp_c < 15 && (
              <p className="clima-message">Abrígate bien, ¡está heladísimo!</p>
            )}
            {weatherData.current.temp_c > 25 && (
              <p className="clima-message">Más les vale bañarse</p>
            )}
          </div>
          <div className="clima-info">
            <div className="clima-data">
              <h3>Temperatura actual:</h3>
              <p>{weatherData.current.temp_c} °C</p>
            </div>
            <div className="clima-data">
              <h3>Humedad:</h3>
              <p>{weatherData.current.humidity}%</p>
            </div>
            <div className="clima-data">
              <h3>Viento:</h3>
              <p>{weatherData.current.wind_kph} km/h</p>
            </div>
          </div>
          <div className="pronostico-container">
            <h3>Pronóstico para los próximos días:</h3>
            <div className="pronostico-dias">
              {weatherData.forecast.forecastday.map((day) => (
                <div className="pronostico-dia" key={day.date}>
                  {day.day.condition.code === 1000 ? (
                    <FaSun className="pronostico-icon" />
                  ) : day.day.condition.code >= 1063 && day.day.condition.code <= 1195 ? (
                    <FaCloudRain className="pronostico-icon" />
                  ) : null}
                  <p className="pronostico-dia-nombre">{new Date(day.date).toLocaleDateString('es-ES', { weekday: 'long' })}</p>
                  <p className="pronostico-temp">{day.day.avgtemp_c} °C</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
    </div>
  );
};

export default Clima;
