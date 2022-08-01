import { Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Landing from "./pages/Landing";
import Clientes from "./pages/Clientes";
import Pedidos from "./pages/Pedidos";
import Productos from "./pages/Productos";
import Organizacion from "./pages/Organizacion";
import DetailedOrder from './components/Detailed/DetailedOrder';
import DetailedClient from './components/Detailed/DetailedOrder';


function App() {
  return (
    <div className='App'>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/clientes" element={<Clientes/>}/>
        <Route path="/productos" element={<Productos/>}/>
        <Route path="/pedidos" element={<Pedidos/>}/>
        <Route path="/organizacion" element={<Organizacion/>}/>
        <Route path="/clientes/:email" element={<DetailedClient/>}/>
        <Route path="/pedidos/:id" element={<DetailedClient/>}/>
      </Routes>
    </div>
  );
}

export default App;
