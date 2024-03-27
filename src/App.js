import './App.css';
import { RegistrationFormUser } from './components/RegistrationFormUser';
import { RegistrationFormVehicle } from './components/RegistrationFormVehicle';
import {SelectComponent} from './components/a';
import {LoginForm} from './components/LoginForm';

function App() {
  return (
 
  <div className="App">
      {<LoginForm/>}
      {<RegistrationFormUser/>}
      {<RegistrationFormVehicle/>}
     

  </div> 

    
  );
}

export default App;
