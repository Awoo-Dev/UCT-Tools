
import './salas.css';

const Salas = () =>{

    return (
      <div class="content">
        <h1 class="title">
          Buscador de Salas
        </h1>
        
        <input class="input" type="text" placeholder="Ingrese la sala que desea buscar"></input>
        <button id = "btn" class="fa fa-magnifying-glass"></button>
      </div>
    );
}

export default Salas;