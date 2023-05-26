import React, { useState } from "react";
import "./micros.css";
import { Link } from 'react-router-dom';    
const Micros = () => {
  const [microName, setMicroName] = useState("");
  const [showTable, setShowTable] = useState(false);

  const handleMicroNameChange = (event) => {
    setMicroName(event.target.value);
  };

  const handleShowTable = () => {
    setShowTable(true);
  };

  const renderTable = () => {
    if (showTable && microName === "7-B") {
      return (
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Hora</th>
              <th>Lunes</th>
              <th>Martes</th>
              <th>Miércoles</th>
              <th>Jueves</th>
              <th>Viernes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>8:00</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
            </tr>
            <tr>
              <td>9:00</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
            </tr>
            <tr>
              <td>12:00</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
            </tr>
            <tr>
              <td>15:00</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
            </tr>
            <tr>
              <td>18:00</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
            </tr>
            <tr>
              <td>20:00</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
            </tr>
          </tbody>
        </table>
      );
    } else {
      return null;
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
      <div className="schedule-table-container">{renderTable()}</div>
    </div>
    </div>
  );
};

export default Micros;
