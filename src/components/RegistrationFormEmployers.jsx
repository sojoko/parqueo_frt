import React from 'react';
import { useState } from 'react';
import { Navigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { API_URL } from '../config/API_URLS.tsx';


function RegistrationFormEmployers() {
  const [name, setName] = useState("");
  const [last_name, setLastName] = useState("");
  const [document, setDocument] = useState("");
  const [documentSender, setDocumentSender] = useState("");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);  
  const rollSender = parseInt(queryParams.get('rollSender')) || '';

  const token = localStorage.getItem('access_token');

  const handleSubmit =  async (event) => {
      event.preventDefault();

      try {
          let apiURL = "";
         
          if (rollSender === 1) {
            apiURL =  `${API_URL}/admins-registration`;
          } else if (rollSender === 3) {
            apiURL = `${API_URL}/vigilantes-registration`;
          }

          const response = await fetch(`${apiURL}`, {
            method: 'post',
            body: JSON.stringify({ name, last_name, document, "registry_date": "string"}),
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }                
          });

          if (!response.ok) {
            throw new Error('Error en la solicitud');            
          }
          const data = await response.json();                   
          setDocumentSender(document);
         
          console.log('Respuesta de la API:', data);
          alert('Datos registrado con exito, establece una contraseña para el usuario');
      } catch (error) {
          console.error('Error:', error);       
          alert('Error al crear');
      }
    
  };

  if (documentSender) {
    const route = `/set-password?document=${documentSender}&roll=${rollSender}`;
    return <Navigate to={route} />;
  }

  // const dishablesubmit = '';

  return (
    <div className="">
      <div className="container mx-auto py-2">
        <h1 className="text-2xl font-bold mb-2 text-center text-amber-700">
          Datos personales
        </h1>
        <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md border-2 border-gray-300">
          <div className="mb-4">
            <label
              className="block text-purple-600 text-sm font-bold mb-2 text-start"
              htmlFor="name"
            >
              Nombres
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500 invalid:border-pink-600 invalid:border-2"
              type="text"
              id="name"
              name="name"
              placeholder="Juan"
              value={name}
              onChange={(e) => setName(e.target.value)}              
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-purple-600 text-sm font-bold mb-2 text-start"
              htmlFor="name"
            >
              Apellidos
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-700 invalid:border-pink-600 invalid:border-2"
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Gonzalez"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>      

          <div className="max-w-2xl mx-auto">
            <select
              id="countries"
              required
              className="bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-s rounded-lg focus:ring-amber-700 focus:border-amber-700 block w-full p-2.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-amber-500 dark:focus:border-amber-50 invalid:border-red-500 invalid:border-2"            >
              <option defaultValue={"Tipo de documento"}>Tipo de documento</option>
              <option value="CC">Cedula de ciudadania</option>
              <option value="CE">Cedula de extranjeria</option>
              <option value="TI">Tarjeta de identidad</option>
              <option value="PT">Permiso por proteccion temporal</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-purple-600 text-sm font-bold mb-2 text-start"
              htmlFor="name"
            >
             Numero de documento
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-700 invalid:border-pink-600 invalid:border-2"
              type="text"
              id="name"
              name="name"
              placeholder="1020304050 "
              value={document}
              onChange={(e) => setDocument(e.target.value)}
              required
            />
          </div>     
   
          <button
            className="w-full bg-amber-700 text-white text-s font-bold py-2 px-4 rounded-md hover:bg-purple-600 transition duration-300"
            type="submit"
            onClick={handleSubmit}
          >
            Continuar
          </button>
        </form>
      </div>
    </div>
  );
}

export { RegistrationFormEmployers };
