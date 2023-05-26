
import './horario.css';

const Horario = () =>{

    return (
      <div class="content">
        <h1 class="title">
          Creador de Horario
        </h1>

        <div>
          Nombre del Ramo:<input class="input" type="text" placeholder=""></input>
        </div>

        <div>
          Hora de Inicio y Final:<input class="input" type="text" placeholder=""></input>
        </div>

        <div>
          Docente Encargado:<input class="input" type="text" placeholder=""></input>
        </div>

        <button class="btn-agregar">Agregar Clase</button>
        <button class="btn-borrar">Borrar Clase</button>

      </div>
    );
}

export default Horario;