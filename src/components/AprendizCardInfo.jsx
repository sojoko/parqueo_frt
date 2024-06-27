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
        <>  {loading &&   <div class="text-center">
            <div role="status">
              <svg
                aria-hidden="true"
                class="inline w-8 h-8 text-gray-100 animate-spin dark:text-gray-600 fill-amber-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          </div>}
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
                            value={
                                aprendizData.state_id === 1 ? "Pendiente" :
                                aprendizData.state_id === 2 ? "Aceptado" :
                                "Rechazado"
                              }
                              color={
                                aprendizData.state_id === 1 ? "orange" :
                                aprendizData.state_id === 2 ? "green" :
                                "red"
                              }
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