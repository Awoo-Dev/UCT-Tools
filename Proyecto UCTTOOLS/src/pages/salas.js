import React, { useState } from 'react';
import './salas.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import salactimg from './imagenes/ct.jpg';
import salaebimg from './imagenes/eb.jpg';

const BuscadorSalas = () => {
  const [salaName, setSalaName] = useState("");
  const [salaData, setSalaData] = useState(null);

  const handleSalaNameChange = (e) => {
    setSalaName(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/salas`);
      const salas = response.data;
      const filteredSalas = salas.filter(
        (sala) => sala.nombre === salaName
      );
      setSalaData(filteredSalas);
    } catch (error) {
      console.error("Error al obtener los datos de la API: ", error);
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
          <input type="text" value={salaName} onChange={handleSalaNameChange} placeholder='Ej: CJP07_375' />
          <button onClick={handleSearch}>Buscar</button>
        </div>
        {salaData && salaData.length > 0 ? (
          <div className="sala-info">
            <p className='outputinfo'>La sala <span className='datax'>{salaData[0].nombre} </span>está en el edificio <span className='datax'>{salaData[0].edificio}</span> en el piso número <span className='datax'> {salaData[0].piso}</span></p>
            {salaData[0].edificio === "Biblioteca - Ricardo Ferrando" ? (
              <img src={salaebimg} alt="Biblioteca - Ricardo Ferrando" style={{ width: '400px' }} />
            ) : salaData[0].edificio === "CT - Adalberto Salas" ? (
              <img src={salactimg} alt="CT - Adalberto Salas" style={{ width: '400px' }} />
            ) : null}
          </div>
        ) : (
          <div className="no-sala-found">
            <p>No se encontró información de la sala.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuscadorSalas;
