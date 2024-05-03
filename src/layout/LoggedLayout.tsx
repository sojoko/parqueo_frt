import React from 'react'; // Import the 'React' module
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";


interface LoggedHomeProps {
    children: React.ReactNode;
}

function LoggedLayout ({children}: LoggedHomeProps){
    return (
        <div className="min-h-screen flex flex-col justify-between w-full dark:bg-gray-900 bg-gray-200" >
            <Header/>
            <main className='flex items-center justify-center w-full '> {children}</main>
            <NavBar/>
        </div>
    )
}

export {LoggedLayout};