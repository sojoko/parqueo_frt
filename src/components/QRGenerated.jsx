import React, { useState } from 'react';
import Modal from 'react-modal'; 
import { API_URL } from '../config/API_URLS.tsx';

function QRGenerated() {
    const [data, setData] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const handleToggleClass = () => {
        setIsActive(!isActive);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const document = localStorage.getItem('userDocument');
        try {
            const response = await fetch(`${API_URL}/qr?document=${document}`, {
                method: 'post',
                body: JSON.stringify({ user_document: 0, "registry_date": "string" }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }

            const data = await response.json();
            console.log('Respuesta de la API:', data);

            alert('Codigo QR generado con exito');
            setData(data);
            setModalIsOpen(true); // Abre el modal cuando se recibe la respuesta con el código QR
            handleToggleClass();
        } catch (error) {
            console.error('Error:', error);
            alert('Error al generar el codigo QR');
        }

    };

    return (
        <div className="h-full mt-12 mb-12 flex items-center justify-center w-full max-w-[450px] max-h-[350px] lg:max-w-[800px] lg:max-h-[600px] ">
            
                <div className={` ${isActive ? 'block' : 'hidden'}`}>
                    <img className='lg:w-[600px] lg:h-[600px]' src={`data:image/png;base64,${data}`} alt="Código QR" />
                </div>
           
            <button className={`shadow-lg p-4 shadow-purple-700/50 items-center justify-center text-2xl text-purple-700 hover:text-white border-2 border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none
             focus:ring-purple-300 font-medium rounded-lg text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400
              dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900 ${isActive ? 'hidden' : 'block'}`}  id='generated_qr' type="submit" onClick={handleSubmit}>Generar código QR</button>

        </div>
    );
}

export { QRGenerated };
