import React from 'react';

function Home() {
    return (
      <div className="w-full mb-12">
      <nav className="bg-white shadow-lg">
        <div className="md:flex items-center justify-between py-2 px-8 md:px-12">
          <div className="flex justify-between items-center w-full">
            <div className="text-2xl text-black md:text-3xl">
              <p>Inicio</p>
            </div>
            <div className="flex justify-end items-center">
              <button type="button" className="block text-gray-800 hover:text-amber-500 focus:text-amber-500 focus:outline-none">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path className="hidden" d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z" />
                  <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex bg-white" style={{ height: '600px' }}>
        <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">Bienvenido a <span className="text-amber-500">Parqueo</span></h2>
            <p className="mt-2 text-sm text-gray-500 md:text-base">Por favor recuerde generar el codigo QR cada vez que ingrese y salga del paraqueadero para que el vigilante valide sus datos.</p>
            <div className="flex justify-center lg:justify-start mt-6">
              <a className="px-4 py-3 bg-amber-500 text-gray-200 text-s font-semibold rounded hover:bg-gray-800" href="#">Generar QR</a>
              <a className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-s font-semibold rounded hover:bg-gray-400" href="#">Ayuda</a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2" style={{ clipPath: 'polygon(10% 0, 100% 0%, 100% 100%, 0 100%)' }}>
          <div className="h-full object-cover" style={{ backgroundImage: 'url(https://media.istockphoto.com/id/170096611/photo/parked-bikes-on-sidewalk-in-the-city.jpg?s=612x612&w=0&k=20&c=JcZ8ULy3vwQIkFMj3Y3iIeONzVy4BDnJXuxZPKDJCIE=)' }}>
            <div className="h-full bg-black opacity-25"></div>
          </div>
        </div>
      </div>
    </div>
    );
}
export {Home}
