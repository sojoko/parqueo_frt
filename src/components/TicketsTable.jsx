import React, { useState } from 'react';
import { useEffect } from 'react';
import { API_URL } from "../config/API_URLS.tsx";

function TicketsTable() {

    const [loading, setLoading] = useState(false);
    const [ticketsData, setTicketsData] = useState(null);

    useEffect(() => {
        handleLoad();
    }, []); 

    async function handleLoad() {
        try {
            setLoading(true);
            const response = await fetch(`http://127.0.0.1:8000/api/v1/Tickets`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            const data = await response.json();
            console.log('Respuesta de la API:', data);
            setTicketsData(data);       
            setLoading(false);    
           
        } catch (error) {
            console.error('Error:', error);
        } 
    }
        
     return (
    //     <>
    //         {loading && 
    //             <div className="flex items-center justify-center min-h-screen">
    //                 <div style={{ borderTopColor: 'transparent' }} className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"></div>
    //                 <p className="ml-2">cargando...</p>
    //             </div>
    //         }
    //         {ticketsData && (
                <div className="my-10 flex flex-col items-center justify-center w-full bg-white">
                    <div>
                        <a href="/CreateTicket" className='py-3 px-20 bg-amber-800 rounded-md'>
                            Crear Nuevo Ticker
                        </a>
                    </div>
                    <div className="mt-7 w-4/5">
                        <table className="border-collapse w-full">
                            <thead>
                                <tr>
                                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Usuario</th>
                                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Descripción</th>
                                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Estado</th>
                                    <th className="p-3 font-bold  uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Fecha</th>
                                    <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">opciones</th>
                                </tr>
                            </thead>        
                            <tbody>
                                <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Usuario</span>
                                        pepito perez
                                    </td>
                                    <td className="w-full lg:w-auto py-6 px-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Descripción</span>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </td>
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Estado</span>
                                        <span className="rounded bg-green-400 py-1 px-3 text-xs font-bold">Nueva</span>
                                    </td>
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Fecha</span>
                                        01-01-2024
                                    </td>                        
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">opciones</span>
                                        <a href="/Ticket" className="text-blue-400 hover:text-blue-600 underline">Ver</a>
                                        <a href="#" className="text-blue-400 hover:text-blue-600 underline pl-6">Eliminar</a>
                                    </td>
                                </tr>
                                <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Company name</span>
                                        Juan Fernandez
                                    </td>
                                    <td className="w-full lg:w-auto py-6 px-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Descripción</span>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </td>
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Estado</span>
                                        <span className="rounded bg-yellow-400 py-1 px-3 text-xs font-bold">Pendiente</span>
                                    </td>
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Fecha</span>
                                        05-06-2024
                                    </td>
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">opciones</span>
                                        <a href="#" className="text-blue-400 hover:text-blue-600 underline">Ver</a>
                                        <a href="#" className="text-blue-400 hover:text-blue-600 underline pl-6">Eliminar</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

        //     )}
        // </>
    );
}

export {TicketsTable}
