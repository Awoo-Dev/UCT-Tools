import React, { useState } from "react";
import "./micros.css";
import { Link } from 'react-router-dom';    
import axios from 'axios';

const Micros = () => {
  const [microName, setMicroName] = useState("");
  const [microData, setMicroData] = useState(null);

  const handleMicroNameChange = (e) => {
    setMicroName(e.target.value);
  };

  const handleShowTable = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/data`);
      const micros = response.data;
      const filteredMicros = micros.filter(
        (micro) => micro.nombre === microName
      );
      setMicroData(filteredMicros);
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

      <div className="micros-container">
        <h2 className="chat-title">Micros</h2>
        <div className="micro-input">
          <label htmlFor="micro-name">Nombre de la micro:</label>
          <input
            type="text"
            id="micro-name"
            value={microName}
            onChange={handleMicroNameChange}
          />
          <button onClick={handleShowTable}>Mostrar Horario</button>
        </div>
        
       
        {microData && microData.length > 0 ? (
          <div className="micro-table-container">
          <table className="micro-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Horario</th>
                <th>Lugar de Arribo</th>
              </tr>
            </thead>
            <tbody>
              {microData.map((micro) => (
                <tr key={micro.id}>
                  <td>{micro.nombre}</td>
                  <td>{micro.horario}</td>
                  <td>{micro.lugar_arribo}</td>
                </tr>
                
                
                
              ))}
              
            </tbody>
            
          </table>
          </div>
          
        ) : (
          <p>No se encontraron datos para el nombre de la micro ingresado.</p>
        )}
      </div>
    </div>
  );
};

export default Micros;

