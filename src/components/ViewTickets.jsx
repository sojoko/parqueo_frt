import React, { useState } from 'react';
import { Navigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { API_URL } from "../config/API_URLS.tsx";



export function ViewTickets() {

    const ticket_id = '2';
    const [loading, setLoading] = useState(false);   
    const [ticketData, setTicketData] = useState(null);
    const [documentAprendiz, setDocumentAprendiz] = useState("");
    const [aprendizData, setAprendizData] = useState(null);


    useEffect(() => {
        handleLoad();
        handleLoadUser();
    }, []); 

    async function handleLoad() {
        try {
            setLoading(true);
            const response = await fetch(`http://127.0.0.1:8000/api/v1/Ticket/id/1`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            const data = await response.json();
            // console.log('Respuesta de la API:', data);
            setTicketData(data);    
            setLoading(false); 
            setDocumentAprendiz(data.document);
    
        } catch (error) {
            console.error('Error:', error);
        }        
    }

    async function handleLoadUser() {

        // console.log(documentAprendiz)
        try {
            setLoading(true);
            const response = await fetch(`http://127.0.0.1:8000/api/v1/aprendices/1683822`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            const data = await response.json();
            // console.log('Respuesta de la API aprendiz:', data);
    
            setAprendizData(data);    
            setLoading(false); 
    
        } catch (error) {
            console.error('Error:', error);
        }        
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const [formData, setFormData] = useState({  
        status: '2',     
        subject: '',
        message: ''       
    });

    const [errors, setErrors] = useState({});
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('data enviada' + formData)
   
        try {
            const response = await fetch('http://127.0.0.1:8000/api/v1/ticket-response/1', {
                method: 'put',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            const data = await response.json();
            console.log('Respuesta de la API:', data);
            alert('La respuesta fue registrada exitosamente');
            window.location.reload();
        } catch (error) {
            console.error('Error:', error);
            console.log(formData);
            alert('Error al registrar la respuesta');
        }
    };

    function formatearFecha(fecha) {
        const fechaObj = new Date(fecha);
        const dia = fechaObj.getDate();
        const mes = fechaObj.getMonth() + 1;
        const año = fechaObj.getFullYear();    
        const fechaFormateada = `${dia < 10 ? '0' : ''}${dia}/${mes < 10 ? '0' : ''}${mes}/${año}`;
        return fechaFormateada;
    }
    return (
        <>
        {loading && 
            <div className="flex items-center justify-center min-h-screen">
                <div style={{ borderTopColor: 'transparent' }} className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"></div>
                <p className="ml-2">cargando...</p>
            </div>
        }
        {ticketData && aprendizData && (

        <div className="py-12 bg-gray-200">
            <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif]">                
                <div>                   
                    <h1 className="text-2xl font-extrabold">Incidencia de Juan Perez</h1>
                    <p className="text-sm mt-3">{ticketData.description}</p>
                    <div className="mt-8">                        
                        <h2 className="text-lg font-extrabold">Información adicional</h2>
                        <ul className="mt-2">
                            <li className="flex items-center">
                                <div className="font-bold h-10 w-18 flex items-center">
                                    <small className="block">Estado:</small>
                                </div>
                                <p className={`ml-3 ${ticketData.status === 1 ? 'rounded bg-green-400 px-3' : 'rounded bg-amber-400 px-3'}`}>
                                    {ticketData.status === 1 ? "Nuevo" : "Atendido"}
                                </p>                                                               
                            </li>
                            <li className="flex items-center">
                                <div className="font-bold h-10 w-18 flex items-center">
                                    <small className="block">Tipo de vehiculo:</small>
                                </div>
                                <p className='ml-3'>{ticketData.vehicle_type}</p>
                            </li>                        
                            <li className="flex items-center">
                                <div className="font-bold h-10 w-10 flex items-center">
                                    <small className="block">Fecha:</small>
                                </div>
                                <p className='ml-3'>{formatearFecha(ticketData.create_date)}</p>
                            </li>
                            <li className="flex items-center">
                                <div className="font-bold h-10 w-10 flex items-center">
                                    <small className="block">Correo:</small>
                                </div>
                                <p className='ml-4'>{aprendizData.email}</p>
                            </li>
                            <li className="flex items-center">
                                <div className="font-bold h-10 w-10 flex items-center">
                                    <small className="block">Ficha:</small>
                                </div>
                                <p className='ml-2'>{aprendizData.ficha}</p>
                            </li>
                            <li className="flex items-center">
                                <div className="font-bold h-10 w-10 flex items-center">
                                    <small className="block">Jornada:</small>
                                </div>
                                <p className='ml-7'>Nocturna</p>
                            </li>
                        </ul>
                    </div>                    
                </div>
                <div className='space-y-4'>
                    <img className="h-52 md:h-52 ml-8" src='https://thumbs.dreamstime.com/z/ca%C3%ADda-de-motocicleta-en-zona-urbana-21218976.jpg?ct=jpeg'/>
                    <form className="ml-auto space-y-4" onSubmit={handleSubmit}>
                        <input 
                        className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" 
                        placeholder="Asunto" 
                        type="text"
                        name="subject" 
                        id='subject'
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        />
                        <textarea 
                        className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"
                        placeholder="Mensaje" 
                        rows="6" 
                        name="message" 
                        id="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        ></textarea>
                        <button  
                        type="submit" 
                        className="text-white bg-amber-500 hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full">Enviar</button>
                    </form>

                </div>
            </div>
        </div>
        )}
        </>
    );
}

