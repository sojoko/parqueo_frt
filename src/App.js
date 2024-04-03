import './App.css';
import { RegistrationFormUser } from './components/RegistrationFormUser';
import { RegistrationFormVehicle } from './components/RegistrationFormVehicle';
import {SelectComponent} from './components/a';
import {LoginForm} from './components/LoginForm';
import {Header} from './components/Header';
import {Home} from './components/Home';
import { Footer } from './components/Footer';

function App() {
  return (
 
  <div className="App">
      {<Header/>}
      {<Home/>}
      {<Footer/>}
      {<LoginForm/>}
      {<RegistrationFormUser/>}
      {<RegistrationFormVehicle/>}
      

     

  </div> 

    
  );
}

export default App;
