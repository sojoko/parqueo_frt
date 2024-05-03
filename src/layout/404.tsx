import React from 'react'; // Import the 'React' module
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";


interface LoggedHomeProps {
    children: React.ReactNode;
}

function PageNotFound (){
    return (
        <div>
            <body className="flex flex-col h-screen justify-center items-center bg-gray-100">
                <div className="flex flex-col items-center">
                    <h1 className="text-[120px] font-extrabold text-gray-700">404</h1>
                    <p className="text-3xl font-medium text-amber-700 mb-6">Página no encontrada</p>
                    <a href="/"
                        className="px-4 py-2 font-medium text-white bg-amber-500 rounded-md hover:bg-teal-600 transition-all duration-200 ease-in-out">
                        Volver al inicio
                    </a>
                </div>
            </body>
        </div>
    )
}

export {PageNotFound};