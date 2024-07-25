import React from 'react';
import { useState } from 'react';
import { API_URL } from '../config/API_URLS.tsx';


function ShowStatusButton( {documento} ) {
    const [showMessage, setShowMessage] = useState(false);
    const [state, setState] = useState("");
    const token = localStorage.getItem('access_token');

    const handleClick =  async () => {  
        try {
            const response = await fetch(`${API_URL}/aprendiz-status/${documento}`, {
              method: 'get',          
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              }                
            });
  
            if (!response.ok) {
              throw new Error('Error en la solicitud');            
            }
            const data = await response.json();                 
            console.log('Respuesta de la API:', data);
            setState(data);
            setShowMessage(true);
        } catch (error) {
            console.error('Error:', error);  
            alert('Error al verificar el estado del documento');     
        }
    };


    const handleClose = () => {
      setShowMessage(false);
    };

    const botonDeshabilitado = documento === '';


    return (
      <div>
        <button
            onClick={handleClick}
            disabled={botonDeshabilitado}        
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white
             bg-amber-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-5 ${botonDeshabilitado ? 'cursor-not-allowed opacity-50' : ''}`}
          >
          Verificar
        </button>

        {showMessage && (
          <div className=" fixed inset-0 flex items-center justify-center z-50 mb-0 bg-black bg-opacity-80">
            
            <div className="bg-white shadow-md rounded-lg p-8 border-4 border-solid border-amber-500 ">
            <button onClick={handleClose} className="text-amber-500 hover:text-red-600 mb-4 ml-32">
                  <svg className="w-24 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              <div className="flex flex-col justify-between items-center">
                <h2 className="text-2xl font-semibold mb-4">Su estado es:</h2>
                <h2 className={`text-2xl font-semibold mb-4 ${state === "recibido" ? "text-orange-600" : state === "aceptado" ? "text-green-600" : "text-red-600"}`}>
           {state}
            </h2>
              </div>
            {state === 'aceptado' && (
              <div className='mt-8 align-middle justify-center flex text-black hover:text-purple-700' > 
                <a href= {`/set-password?document=${documento}&roll=2`} >Crea tu contraseña aqui</a>
              </div>
            )}
            </div>
          </div>
        )}
      </div>
    );
}
export { ShowStatusButton }
