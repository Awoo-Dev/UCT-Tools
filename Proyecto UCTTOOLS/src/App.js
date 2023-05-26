import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout  from "./pages/Layout";
import Chat  from "./pages/Chat";
import Home  from "./pages/Home";
import Default  from "./pages/Default";
import Clima from "./pages/Clima.js";
import Dashboard  from "./pages/Dashboard";
import Agenda  from "./pages/Agenda";
import Faq from "./pages/Faq";
import Horario from "./pages/Horario";
import Micros from "./pages/Micros";
import Salas from "./pages/salas";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route path="chat" element={<Chat />} />
           <Route path="clima" element={<Clima />} />
           <Route path="/" element={<Home />} />
           <Route path="dashboard" element={<Dashboard />} />
           <Route path="*" element={<Default />} />
           <Route path="agenda" element={<Agenda />} />
           <Route path="faq" element={<Faq />} /> 
           <Route path="horario" element={<Horario />} /> 
           <Route path="micros" element={<Micros />} /> 
           <Route path="salas" element={<Salas />} /> 

           
           </Route>
      </Routes>
    </div>
  );
}

export default App;
