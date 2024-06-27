

import { useEffect, useState } from 'react';
import { HiOutlineUsers } from "react-icons/hi2";
import { useLocation } from 'react-router-dom';
import { PiEnvelopeSimple } from "react-icons/pi";
import { PiMotorcycleFill } from "react-icons/pi"
import { PiHouse } from "react-icons/pi";
import { HiOutlineQrCode } from "react-icons/hi2";


function NavBar() {

    const roll = parseInt(localStorage.getItem('userRoll'))


    const location = useLocation();
    const [isActiveHome, setIsActiveHome] = useState(false);
    const [isActiveQR, setIsActiveQR] = useState(false);
    const [isActiveUsers, setIsActiveUsers] = useState(false);
    const [isActiveUsersList, setIsActiveUsersList] = useState(false);
    const [isActiveParking, setIsActiveParking] = useState(false);
    const [isActiveTickets, setIsActiveTickets] = useState(false);
    const [isActiveCreateUserEmployee, setIsActiveCreateUserEmployee] = useState(false);
    const [isActiveAprendizRequest, setIsActiveAprendizRequest] = useState(false);

    useEffect(() => {
        setIsActiveHome(location.pathname === '/home');
        setIsActiveUsers(location.pathname === '/users-administration');
        setIsActiveUsersList(location.pathname === '/users-administration-list');
        setIsActiveQR(location.pathname === '/qr-generator');
        setIsActiveParking(location.pathname === '/parking');
        setIsActiveTickets(location.pathname === '/tickets');
        setIsActiveCreateUserEmployee(location.pathname === '/user-registration-employees');
        setIsActiveAprendizRequest(location.pathname === '/user-registration-request');
        
    }, [location]);

  return (

    
    <div className="flex flex-row bg-gray-950 lg:justify-center lg:w-full w-full">
    
    <div className="w-full mx-auto lg:w-full lg:max-w-full p-2">
        
        <div className="px-4 bg-white border  border-gray-400 shadow-2xl rounded-m shadow-gray-500">
            <div className="flex flex-row lg:w-full">
                <div className={`flex-1 group ${isActiveHome ? 'text-purple-700' : 'text-amber-800'}`}>
                    <a href="/home" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full group-hover:text-purple-700">
                        <span className="block pt-1">
                            <div className="flex justify-center text-3xl lg:text-5xl"><PiHouse />
                            </div>
                            <span className="block text-sm font-bold pb-1 lg:text-2xl">Home</span>
                            <span className={`block w-5 mx-auto h-1 rounded-full ${isActiveHome ? 'bg-purple-700' : 'group-hover:bg-purple-700'}`}></span>
                        </span>
                     </a>
                    </div>
                <div className="flex-1 group ">
                {roll === 2 && (
                    <a href="/qr-generator" className={`${isActiveQR ? 'text-purple-700' : ''} flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-amber-700 group-hover:text-purple-700`}>
                    <span className="block px-1 pt-1">
                        <div className="flex justify-center text-3xl lg:text-5xl"><HiOutlineQrCode /></div>
                        <span className="block text-sm font-bold pb-1 lg:text-2xl">QR</span>
                        <span className={`block w-5 mx-auto h-1 rounded-full ${isActiveQR ? 'bg-purple-700' : 'group-hover:bg-purple-700'}`}></span>
                    </span>
                    </a>
                )}
                {roll === 1 && (
                    <a href="/users-administration" className={`${isActiveUsers || isActiveUsersList || isActiveCreateUserEmployee || isActiveAprendizRequest ? 'text-purple-700' : ''} flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-amber-700 group-hover:text-purple-700`}>
                    <span className="block px-1 pt-1">
                        <div className="flex justify-center text-3xl lg:text-5xl"><HiOutlineUsers /></div>
                        <span className="block text-sm font-bold pb-1 lg:text-2xl">Usuarios</span>
                        <span className={`block w-5 mx-auto h-1 rounded-full ${isActiveUsers || isActiveUsersList || isActiveCreateUserEmployee || isActiveAprendizRequest ? 'bg-purple-700' : 'group-hover:bg-purple-700'}`}></span>
                    </span>
                    </a>
                )}
                </div>
                <div className="flex-1 group">
                    <a href="#" className={`${isActiveParking ? 'text-purple-700' : ''} flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-amber-700 group-hover:text-purple-700`}>
                        <span className="block px-1 pt-1">
                            <div className="flex justify-center text-3xl lg:text-5xl"><PiMotorcycleFill /></div>
                            <span className="block text-sm font-bold pb-1 lg:text-2xl">Parking</span>
                            <span className={`block w-5 mx-auto h-1 rounded-full ${isActiveParking ? 'bg-purple-700' : 'group-hover:bg-purple-700'}`}></span>
                        </span>
                    </a>
                </div>
                <div className="flex-1 group">
                    <a href="/TicketsTable" className={`${isActiveParking ? 'text-purple-700' : ''} flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-amber-700 group-hover:text-purple-700`}>
                        <span className="block px-1 pt-1">
                            <div className="flex justify-center text-3xl lg:text-5xl"><PiEnvelopeSimple /></div>
                            <span className="block text-sm font-bold pb-1 lg:text-2xl">Tickets</span>
                            <span className={`block w-5 mx-auto h-1 rounded-full ${isActiveTickets ? 'bg-purple-700' : 'group-hover:bg-purple-700'}`}></span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export { NavBar };
