import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout  from "./pages/Layout";
import Chat  from "./pages/Chat";
import Home  from "./pages/Home";
import Default  from "./pages/Default";
import Salas from "./pages/Salas";
import Horario from "./pages/Horario";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route path="chat" element={<Chat />} />
           <Route path="/" element={<Home />} />
           <Route path="salas" element={<Salas />} />
           <Route path="*" element={<Default />} />
           <Route path="horario" element={<Horario />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
