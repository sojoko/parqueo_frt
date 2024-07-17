import React from 'react'; // Import the 'React' module
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";


interface LoggedHomeProps {
    children: React.ReactNode;
}

function LoggedLayout ({children}: LoggedHomeProps){
    return (
        <div className="min-h-screen flex flex-col w-full dark:bg-gray-900 bg-gray-200">
        <header className="sticky top-0 z-10">
          <Header />
        </header>
        <main className="flex-grow overflow-auto -mt-6 ">
          <div className="flex-grow flex items-center justify-center w-full min-h-[45rem]">
            {children}
          </div>
        </main>
        <footer className="sticky bottom-0 z-10">
          <NavBar />
        </footer>
      </div>
    )
}

export {LoggedLayout};