import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Navigate } from "react-router-dom";
import { API_URL } from '../config/API_URLS.tsx';



function SetPassword() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const documentSender = queryParams.get('document') || '';
    const [password, setPassword] = useState("");
    const rollSender = queryParams.get('roll') || '';
    const [homeRedirect, setHomeRedirect] = useState(false);
    const token = localStorage.getItem('access_token');
    
    const handleSubmit =  async (event) => {
        event.preventDefault();
        // const document = documentSender;

        try {
            const response = await fetch(`${API_URL}/create_user`, {
                method: 'post',
                body: JSON.stringify({"document": documentSender, password, "roll_id": rollSender}),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }                
            });
            if (response.status === 400) {
                alert('El usuario ya existe');
               
            }
            if (response.status === 422) {
                alert('Introduce el formato de datos correcto');
               
            }   
            if (!response.ok) {
                throw new Error('Error en la solicitud');            

            }          
            const data = await response.json();           
            const APImessage = data.message;
            console.log('Respuesta de la API:', data);
            alert(APImessage);
            setHomeRedirect(true);
        } catch (error) {
            console.error('Error:', error);                       
        }
    };
    if (homeRedirect) { 
        return <Navigate to="/home" />;
      }
    
  
    return (
      <div className="">
        <div className="container mx-auto py-2">
          <h1 className="text-2xl font-bold mb-8 text-center text-amber-700 max-w-80">
            Establece una contraseña
          </h1>
          <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md border-2 border-gray-300">           
            
            <div className="mb-4">
              <label
                className="block text-purple-600 text-sm font-bold mb-2 text-start"
                htmlFor="name"
              >
               Numero de documento
              </label>
              <input
                className=" cursor-not-allowed w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-700 invalid:border-pink-600 invalid:border-2"
                type="text"
                id="name"
                name="name"
                placeholder="1020304050 "
                value={documentSender}
                disabled
                required
              />
            </div>       
            <div className="mb-4">
              <label
                className="block text-purple-600 text-sm font-bold mb-2 text-start"
                htmlFor="password"
              >
                Contraseña
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600 invalid:border-pink-600 invalid:border-2"
                type="password"
                id="password"
                name="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>      
            <button
              className="w-full bg-amber-700 text-white text-s font-bold py-2 px-4 rounded-md hover:bg-purple-600 transition duration-300"
              type="submit"
              onClick={handleSubmit}
            >
              Confirmar
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export { SetPassword };
  