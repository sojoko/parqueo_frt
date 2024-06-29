import React from 'react';
import { useState } from 'react';
import {useAuth } from '../auth/AuthProvider.tsx';
import { Navigate } from "react-router-dom";
import { API_URL } from '../config/API_URLS.tsx';


function LoginForm() {
    // const [inputValue, setInputValue] = useState('');
    const [document, setUser] = useState("");
    const [password, setPassword] = useState("");
    const auth = useAuth();
    
    // const handleChange = (event) => {
    //     setInputValue(event.target.value);
    //   };
    const handleSubmit =  async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`${API_URL}/login`, {
                method: 'post',
                body: JSON.stringify({document, password}),
                headers: {
                    'Content-Type': 'application/json'
                }                
            });
            if (!response.ok) {
                throw new Error('Error en la solicitud');            

            }
            const data = await response.json();            
            if(data){            
               auth.saveUser(data);
                           
            }

            console.log('Respuesta de la API:', data);
            alert('Autenticado correctamente');
        } catch (error) {
            console.error('Error:', error);       
            alert('Error al autenticar');
        }
      
    };

    // const dishablesubmit = '';

    if (auth.isAuthenticated) {
        return <Navigate to="/home" />;
    }
    return (
        <div className="h-full mt-24 mb-24 flex items-center justify-center w-full dark:bg-gray-950">
            <div className="bg-white shadow-lg rounded-lg px-8 py-6 max-w-md border-2 border-gray-300">
                <h1 className="text-3xl text-amber-700 font-bold text-center mb-4 dark:text-amber-00">Inicia Sesión</h1>
                <form action="#">
                    <div className="mb-4">
                        <label htmlFor="document" className="block text-s font-medium text-start text-black :white mb-2">Documento de identidad</label>
                        <input type="text" 
                        id="user.document" 
                        className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 invalid:border-pink-600 invalid:border-2"
                        placeholder="1020304050" 
                        required
                        value={document}
                        onChange={(e) => setUser(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-s font-medium text-start text-gray-700 dark:text-black mb-2">Contraseña</label>
                        <input type="password" id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 invalid:border-pink-600 invalid:border-2"
                            placeholder="**********"
                            required 
                            value = {password}
                            onChange={(e) => setPassword(e.target.value) }
                            />
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                           
                            <label htmlFor="remember" className=" block text-s text-gray-700 dark:text-indigo-700 mr-16">¿Olvidaste tu Contraseña?</label>
                        </div>
                        <a href="/registro-aprendiz"
                            className="text-s text-indigo-700 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Registrarme</a>
                    </div>
                    <button onClick={handleSubmit} 
                    type="submit" 
                    disabled={!password || !document}
                    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium
                     text-white bg-amber-700 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white
                     ${!password || !document ? 'cursor-not-allowed opacity-50 hover:bg-amber-500': ''} `}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
export {LoginForm}
