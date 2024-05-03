import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { API_URL } from "../config/API_URLS.tsx";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Chip,
  } from "@material-tailwind/react";
  
export function AprendizCardInfo() {
    const [documentSender, setDocumentSender] = useState("");
    const route = `/aprendiz-info-full?document=${documentSender}`;
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const document = queryParams.get('document') || '';
    const [aprendizData, setAprendizData] = useState(null);
    const [vehicleData, setvehicleData] = useState(null);
    const [loading, setLoading] = useState(false);

    function handleDocument() {
     setDocumentSender(aprendizData.document);
    }               

    useEffect(() => {
        handleLoad();
        handleLoad2();
    }, []); 

    async function handleLoad() {
        try {
            setLoading(true);
            const response = await fetch(`${API_URL}/aprendices/${document}`, {
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
            setAprendizData(data);           
           
        } catch (error) {
            console.error('Error:', error);
        } 
    }
    async function handleLoad2() {
        try {
            setLoading(true);
            const response = await fetch(`${API_URL}/moto/${document}`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            const data2 = await response.json();
            console.log('Respuesta de la API:', data2);
            setvehicleData(data2);           
           
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    }

    if (documentSender) {
        return <Navigate to={route} />;
    }

    function formatearFecha(fecha) {
        const fechaObj = new Date(fecha);
        const dia = fechaObj.getDate();
        const mes = fechaObj.getMonth() + 1;
        const año = fechaObj.getFullYear();    
        const fechaFormateada = `${dia < 10 ? '0' : ''}${dia}/${mes < 10 ? '0' : ''}${mes}/${año}`;
        return fechaFormateada;
    }
    return (
        <>  {loading && <div>Cargando...</div>}
            {aprendizData && vehicleData && (
                <Card className="w-96">
                    <CardHeader floated={false} className="h-100">
                        <img src={aprendizData.photo} alt="profile-picture" />
                    </CardHeader>
                    <CardBody className="text-center">
                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            {aprendizData.name} {aprendizData.last_name}
                        </Typography>                                          
                        <Typography color="blue-gray" variant="h5" className="font-medium" textGradient>
                            Documento:{aprendizData.document}
                        </Typography>
                        <Typography color="blue-gray" variant="h5" className="font-medium" textGradient>
                            Ficha:{aprendizData.ficha}
                        </Typography>   
                        <Typography color="blue-gray" variant="h5" className="font-medium" textGradient>
                            Fecha Finalizacion: {formatearFecha(aprendizData.finish_date)}
                        </Typography>   
                        <Chip
                            variant="ghost"
                            size="sm"
                            value={aprendizData.state_id === 2 ? "Pendiente" : "Aceptado"}
                            color={aprendizData.state_id === 1 ? "green" : "orange"}
                        />
                       
                        <Typography color="blue-gray" variant="h5" className="font-medium mt-6 " textGradient>
                            Vehiculo Modelo: {vehicleData.modelo}
                        </Typography>
                        <Typography color="blue-gray" variant="h5" className="font-medium " textGradient>
                            Vehiculo Marca: {vehicleData.marca}
                        </Typography>
                        <Typography color="blue-gray" variant="h5" className="font-medium " textGradient>
                            Vehiculo Color: {vehicleData.color}
                        </Typography>

                        <button onClick={handleDocument}>
                            <Typography color="blue-gray" variant="h6" className="font-medium mt-6 text-purple-600" textGradient>
                                Ver todos los datos
                            </Typography>
                        </button>

                    </CardBody>
                </Card>
            )}
        </>
    );
}