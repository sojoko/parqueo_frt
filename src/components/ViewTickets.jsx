import React from 'react';

function ViewTickets() {
    return (
        <div className="my-12">
            <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif]">
                <div>
                    <h1 className="text-3xl font-extrabold">Incidencia de Juan Perez</h1>
                    <p className="text-sm mt-3">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help.</p>
                    <div className="mt-8">
                        <h2 className="text-lg font-extrabold">Información del usuario</h2>
                        <ul className="mt-2">
                            <li className="flex items-center">
                                <div className="font-bold h-10 w-10 flex items-center">
                                    <small className="block">Fecha:</small>
                                </div>
                                <p className='ml-3'>05-06-2024</p>
                            </li>
                            <li className="flex items-center">
                                <div className="font-bold h-10 w-10 flex items-center">
                                    <small className="block">Mail:</small>
                                </div>
                                <p>Email@email.com</p>
                            </li>
                            <li className="flex items-center">
                                <div className="font-bold h-10 w-10 flex items-center">
                                    <small className="block">Ficha:</small>
                                </div>
                                <p className='ml-2'>45454545</p>
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
                <form action="https://fabform.io/f/xxxxx" method="post" className="ml-auto space-y-4">
                    <img className="h-52 md:h-52 justify-center" src='https://img.remediosdigitales.com/6d5db8/moto/1366_2000.jpg'/>
                    <input type="text" placeholder="Asunto" name="subject" className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
                    <textarea placeholder="Mensaje" rows="6" name="message" className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"></textarea>
                    <button  type="submit" className="text-white bg-amber-500 hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full">Enviar</button>
                </form>
            </div>
        </div>
    );
}
export { ViewTickets }
