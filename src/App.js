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


function App() {
  return (
 
  <div className="App">
     <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/RegistroAprendiz" element={<RegistroAprendiz></RegistroAprendiz>} />
   
     </Routes>   
     

  </div> 

    
  );
}

export default App;
