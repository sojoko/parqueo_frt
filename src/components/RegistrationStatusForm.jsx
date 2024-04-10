import React, { useState } from 'react';
import { ShowStatusButton } from './ShowStatusButton';

function RegistrationStatusForm() {
    const [documento, setDocumento] = useState('');

    const handleDocumentoChange = (event) => {
        setDocumento(event.target.value);
    };

    return (
        <div className="h-full mt-24 mb-24 flex items-center justify-center w-full dark:bg-gray-950">
            <div className="bg-white  shadow-md rounded-lg px-8 py-6 max-w-md">
                <h1 className="text-3xl font-bold text-center mb-4 dark:text-amber-500">PARQUEO</h1>
                <form action="#">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-s font-medium text-start text-black dark:white mb-2">Introduce tu documento de identidad</label>
                        <input 
                            type="text" 
                            id="document_input" 
                            value={documento} 
                            onChange={handleDocumentoChange} 
                            className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 invalid:border-pink-600 invalid:border-2" 
                            placeholder="1020304050" 
                            required 
                        />
                    </div>                 
                    <div className="flex items-center justify-between mb-4">
                        <a href="../"
                            className="text-s text-indigo-700 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">¿Inquietudes?</a>
                        <a href="../"
                            className="text-s text-indigo-700 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Volver</a>
                    </div>
                    <ShowStatusButton documento={documento}/>                  
                </form>
            </div>
        </div>
    );
}
export { RegistrationStatusForm }

