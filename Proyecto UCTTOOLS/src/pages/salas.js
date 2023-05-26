import React, { useState } from 'react';
import './salas.css';
import { Link } from 'react-router-dom';
const BuscadorSalas = () => {
  const [sala, setSala] = useState('');
  const [indicacion, setIndicacion] = useState('');

  const handleInputChange = (event) => {
    setSala(event.target.value);
  };

  const handleSearch = () => {
    // Aquí puedes agregar la lógica para buscar y obtener la indicación de cómo llegar a la sala ingresada
    // Por ahora, usaremos un ejemplo estático para la sala "cjp07-288"
    if (sala === 'cjp07-288') {
      setIndicacion('La sala cjp07-288 se encuentra en el edificio EB. Debes subir al segundo piso y caminar hacia el sur para encontrarla.');
    } else {
      setIndicacion('No se encontró información para la sala ingresada.');
    }
  };

  return (
    <div>
    <Link to="/chat" className="chat-link">
    <i className="fa fa-comments"></i> Chat
  </Link>
  <header className='headersec'>
        <h1 className='sech1'>UCT TOOLS!</h1>
    </header>
    <div className="buscador-salas-container">
      <h2 className="buscador-salas-title">Buscador de Salas</h2>
      <div className="sala-input">
        <label>Ingrese el nombre de la sala:</label>
        <input type="text" value={sala} onChange={handleInputChange} />
        <button onClick={handleSearch}>Buscar</button>
      </div>
      {indicacion && (
        <div className="indicacion-container">
          <p className="indicacion-text">{indicacion}</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default BuscadorSalas;
