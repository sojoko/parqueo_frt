import React from 'react';
import { PiArrowCircleLeft } from "react-icons/pi";
import { PiUserCircle } from "react-icons/pi";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { button } from '@material-tailwind/react';



function Header() {

  const [isActiveHome, setIsActiveHome] = useState(false);
  const [isActiveRegistrationEmployees, setIsActiveRegistrationEmployees] = useState(false);
  const [isActiveIndex, setIsActiveIndex] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    setIsActiveHome(location.pathname === '/home');
    setIsActiveRegistrationEmployees(location.pathname === '/user-registration-employees');
    setIsActiveIndex(location.pathname === '/');
    
}, [location]);

    return (
      <header className="bg-amber-700 border-none lg:w-full w-full">
        <div className="container mx-auto px-4 py-2 lg:py-4 flex items-center justify-between">

        {isActiveHome ? (
          <a href="/user-administration">
          <div className='w-12 h-12 lg:w-16 lg:h-16 text-gray-900 hover:text-purple-600'>
          <PiUserCircle className='w-12 h-12 lg:w-16 lg:h-16' />
          </div>
          </a>
        ) : null }

        {!isActiveHome && !isActiveIndex ? (
          <button onClick={() => {
            if (isActiveRegistrationEmployees) {
              navigate(-2);
            } else {
             navigate(-1);
            }
          }}>
          <div className='w-12 h-12 lg:w-16 lg:h-16 text-gray-900 hover:text-purple-600'>
          <PiArrowCircleLeft className='w-12 h-12 lg:w-16 lg:h-16' />
          </div>          
          </button>
          
        ) : null}


         
        <a href="/">
        <div className=" md:w-48 flex-shrink-0">           
        <img className="h-14 lg:h-18 lg:w-18" src="/parqueo.png" alt="logo" /> 
        </div>
        </a>    
         
         

          {/* search
          <div className="mr-auto w-full max-w-sm xl:max-w-lg 2xl:max-w-4xl bg-gray-100 rounded-md hidden xl:flex items-center">
            <input className="border-l border-gray-300 bg-transparent font-semibold text-sm mr-4 p-4" type="text" placeholder="Deseo buscar en Parqueo..." />
            <svg className="ml-auto h-5 px-4 text-gray-500" aria-hidden="true" focusable="false" data-prefix="far" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path>
            </svg>
          </div>            */}

         
       
        </div>

       
      </header>
    );
}
export {Header}
