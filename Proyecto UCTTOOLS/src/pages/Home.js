import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import imagen1 from './imagenes/chayanne.jpg';

import gif from './imagenes/aaaa.gif';
import gif2 from './imagenes/capibara.gif';


const Home = () => {
  return (
    <div>

        <header className='headerhome'>
        <h1 className='hh1'>UCT TOOLS!</h1>
    </header>
      
      <div className="home-container">
        
        <p className="subtitle">UCT TOOLS está hecho para brindarte una pequeña ayuda en tu vida universitaria, ofreciéndote herramientas útiles durante tu tiempo en la UCT.</p>
      </div>

      <div className="home-container">
        <div className="section">
          <div className="image-container">
            <img src={imagen1} alt="Chayanne" className="profile-image" />
          </div>
          <div className="section-content">
            <h2>No te gusta el formato de tu <a className='destacado'>horario</a>?</h2>
            <p>Crea el tuyo  <Link to="horario" className="link-button">aquí.</Link></p>
           
          </div>
        </div>

        <div className="section">
          <div className="section-content">
            <h2>Al borde del <a className='destacado'>colapso?</a></h2>
            <p>¿Las clases te han hecho sentir miserable y alejado de la mano de Dios? Desahógate <Link to="chat" className="link-button">aquí.</Link></p>
            
          </div>
          <div className="image-container">
            <img src={gif} alt="Gif Ejemplo" className="gif" />
          </div>
        </div>
        <div className="section">
          <div className="image-container">
            <img src={gif2} alt="capibara" className="profile-image" />
          </div>
          <div className="section-content">
            <h2>Quieres <a className='destacado'>agendar</a> cuando ir a ver a los coipos?</h2>
            <p>Puedes hacer eso como tambien agendar tus pruebas o eventos importantes <Link to="calendario" className="link-button">aquí.</Link> "se perfectamente que es un capibara y no un coipo"</p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
