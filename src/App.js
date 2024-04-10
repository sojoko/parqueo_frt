import './App.css';
import { RegistrationFormUser } from './components/RegistrationFormUser';
import { RegistrationFormVehicle } from './components/RegistrationFormVehicle';
import {SelectComponent} from './components/a';
import {LoginForm} from './components/LoginForm';
import { RegistrationFormVigilant } from './components/RegistrationFormVigilant';
import { NavBar } from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import {RegistroAprendiz} from './pages/RegistroAprendiz';
import { RegistroIncidencia } from './pages/RegistroIncidencia';
import { TablaIncidencias } from './pages/TablaIncidencias';
import { VerIncidencia } from './pages/VerIncidencia';


function App() {
  return (
 
  <div className="App">
     <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/RegistroAprendiz" element={<RegistroAprendiz></RegistroAprendiz>} />
      <Route path="/RegistroIncidencia" element={<RegistroIncidencia></RegistroIncidencia>} />
      <Route path="/Incidencias" element={<TablaIncidencias></TablaIncidencias>} />
      <Route path="/VerIncidencias" element={<VerIncidencia></VerIncidencia>} />
   
     </Routes>   
     

  </div> 

    
  );
}

export default App;
