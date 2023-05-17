import React from 'react';

import './app.css';  
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div>


      
      
      <input type="checkbox" id="checkbox" />
      <label className="btn" htmlFor="checkbox"><i className="fa fa-bars"></i> <span>Menu</span></label>

      <div className="sidebar">
        <ul>
          <li><a href="#" className="active"><i className="fa fa-comments"></i> Chat</a></li>
          <li><a href="#"><i className="fa fa-magnifying-glass"></i> Busca tu sala</a></li>
          <li><a href="#"><i className="fa fa-calendar-days"></i> Crea tu horario</a></li>
          <li><a href="#"><i className="fa fa-stopwatch"></i> Cuanto falta para...</a></li>
          
          
          <li><a href="#"><i className="fa fa-cloud-sun"></i> Clima</a></li>
          <li><a href="#"><i className="fa fa-bus"></i> Horario de micros</a></li>
         <li><a href="#"><i className="fa fa-question"></i> Preguntas frecuentes</a></li>
          
  
        </ul>
      </div>
      <h1>UCT Tools</h1>
      
    </div>
  );
}
export default App;

