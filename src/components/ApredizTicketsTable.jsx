import React, { useState, useCallback  } from 'react';
import { useEffect } from 'react';
import { API_URL } from "../config/API_URLS.tsx";

function ApredizTicketsTable() {

    const [loading, setLoading] = useState(false);
    const [ticketsData, setTicketsData] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [arregloInvertido, setArregloInvertido] = useState(null);
    const doc = localStorage.getItem('userDocument');

    const handleLoad = useCallback(async () => {
        try {
            setLoading(true);
            const response = await fetch(`${API_URL}/Tickets-by-user/${doc}`, {
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
            setIsLoaded(true);                   
            setLoading(false);    
           
        } catch (error) {
            console.error('Error:', error);
        } 
    }, [doc, ticketsData]);
        
    useEffect(() => {
        if (isLoaded === true){
            setArregloInvertido(ticketsData.reverse());             
        }
    }, [isLoaded, ticketsData, arregloInvertido]); 
        

    useEffect(() => {
        if (!ticketsData){
            handleLoad();
            
        }
    }, [ticketsData, handleLoad]); 
     return (
        <>
            {loading && 
                <div className="flex items-center justify-center min-h-screen">
                    <div style={{ borderTopColor: 'transparent' }} className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"></div>
                    <p className="ml-2">cargando...</p>
                </div>
            }
            {ticketsData && (
                <div className="flex-grow my-10 flex flex-col items-center justify-center w-full bg-white">
                    <div>
                        <a href="/CreateTicket" className='py-3 px-20 bg-amber-800 rounded-md'>
                            Crear Nuevo Ticket
                        </a>
                    </div>
                <div className="flex-grow mt-7 w-4/5 mx-auto">
                    <table className="border-collapse w-full h-full">
                        <thead>
                            <tr>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Usuario</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Descripción</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Estado</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Fecha</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ticketsData.map(ticket => (
                                <tr key={ticket.ticket_id} className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Usuario</span>
                                        {ticket.aprendiz_name}
                                    </td>
                                    <td className="w-full lg:w-auto py-6 px-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Descripción</span>
                                        {ticket.ticket_description}
                                    </td>
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Estado</span>
                                        <span className={`rounded ${ticket.status === 1 ? 'bg-green-400' : 'bg-amber-400'} py-1 px-3 text-xs font-bold`}>{ticket.status === 1 ? "Nuevo" : "Atendido"}</span>
                                    </td>
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Fecha</span>
                                        {ticket.create_date}
                                    </td>
                                    <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                        <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Opciones</span>
                                        <a href={`/Ticket/id/${ticket.ticket_id}`} className="text-blue-400 hover:text-blue-600 underline">Ver</a>
                                        {/* <a href="#" className="text-blue-400 hover:text-blue-600 underline pl-6">Editar</a> */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            )}

        </>
    );
}

export {ApredizTicketsTable}
