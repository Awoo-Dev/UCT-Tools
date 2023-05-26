import { Outlet, Link } from "react-router-dom";
import './app.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Menu() {
  return (
    <div>
      <input type="checkbox" id="checkbox" />
      <label className="btn" htmlFor="checkbox">
        <i className="fa fa-bars"></i> <span>Menu</span>
      </label>

      <div className="sidebar">
        <ul>
          <li>
            <Link to="/chat">
              <i className="fa fa-comments"></i> Chat
              </Link>
          </li>
          <li>
          <Link to="/salas">
              <i className="fa fa-magnifying-glass"></i> Busca tu sala
              </Link>
          </li>
          <li>
          <Link to="/horario">
              <i className="fa fa-calendar-days"></i> Crea tu horario
              </Link>
          </li>
          <li>
          <Link to="/chat.html">
              <i className="fa fa-stopwatch"></i> Calendario
              </Link>
          </li>
          <li>
          <Link to="/chat.html">
              <i className="fa fa-cloud-sun"></i> Clima
              </Link>
          </li>
          <li>
          <Link to="/chat.html">
              <i className="fa fa-bus"></i> Horario de micros
              </Link>
          </li>
          <li>
          <Link to="/chat.html">
              <i className="fa fa-question"></i> Preguntas frecuentes
              </Link>
          </li>
        </ul>
      </div>
      <Outlet/>
    </div>
  );
}

export default Menu;