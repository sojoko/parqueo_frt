import { HiOutlineUserPlus } from "react-icons/hi2";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { PiSignOut } from "react-icons/pi";
import { useState } from 'react';
import { Navigate } from "react-router-dom";
import { PiWrench } from "react-icons/pi";


function NewsCard() {
   
  return (
    <div className="p-4 lg:w-100 flex gap-4 flex-col lg:flex-row lg:gap-8 items-center">
    <a href="https://www.sena.edu.co/es-co/Noticias/Paginas/noticia.aspx?IdNoticia=7071" class="flex mr-6 ml-6 flex-col lg:w-100 lg:h-80 lg:p-4 p-2 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover lg:h-60 w-full rounded-t-lg h-40 md:h-auto md:w-80 md:rounded-lg md:mr-2" src="./2.jpeg" alt=""/>
        <div class="flex flex-col justify-between p-1 leading-normal text-center lg:h-60 lg:justify-center lg:gap-2">
            <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Convocatoria formación titulada 2024</h5>
            <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">Abiertas inscripciones para la Primera Oferta de Formación Virtual de 2024: más de 52 mil cupos para los futuros técnicos y tecnólogos</p>
        </div>
    </a>
    <a href="https://oferta.senasofiaplus.edu.co/sofia-oferta/" class="flex mr-6 ml-6 flex-col lg:w-100 lg:h-80 lg:p-2 p-2 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover lg:h-60 w-full rounded-t-lg h-40 md:h-auto md:w-80 md:rounded-lg md:mr-2" src="./1.jpg" alt=""/>
        <div class="flex flex-col justify-between p-1 leading-normal text-center lg:h-60 lg:justify-center lg:gap-2">
            <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Ya esta aqui nuestra nueva plataforma Zajuna</h5>
            <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">Se trata de una plataforma propia del SENA, Fue creada con la intención de que las personas puedan estudiar virtualmente.</p>
        </div>
    </a>
    
    </div>
    

    

  );
}
export { NewsCard };
