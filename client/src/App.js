import { Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Landing from "./pages/Landing";

function App() {
  return (
    <div className='App'>
      <Sidebar/>
      {/* <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route/>
        <Route/>
        <Route/>
      </Routes> */}
    </div>
  );
}

export default App;
