import React from 'react';
import { useState } from 'react';

function ShowStatusButton( {documento} ) {
    const [showMessage, setShowMessage] = useState(false);

    const handleClick = () => {
      setShowMessage(true);
    };
  
    const handleClose = () => {
      setShowMessage(false);
    };

    const botonDeshabilitado = documento === '';
  
    return (
      <div>
        <button
            disabled={botonDeshabilitado}        
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white
             bg-amber-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-5 ${botonDeshabilitado ? 'cursor-not-allowed opacity-50' : ''}`}
            onClick={handleClick}>
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
                <h2 className="text-2xl font-semibold mb-4">ACEPTADO</h2>
              </div>
              <div className='mt-8'> 
                <a href="/" >Crea tu contraseña aqui</a>
              </div>
             
            </div>
          </div>
        )}
      </div>
    );
}
export { ShowStatusButton }
