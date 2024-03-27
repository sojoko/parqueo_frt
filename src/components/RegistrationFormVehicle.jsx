import React, { useState } from "react";

function RegistrationFormVehicle() {
  const [vehicleType, setVehicleType] = useState("");

  const handleVehicleTypeChange = (event) => {
    setVehicleType(event.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">
          Datos del vehiculo
        </h1>
        <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
          <div className="max-w-2xl mx-auto">
            <select
              id="vehicleType"
              required
              className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-s rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-amber-500 dark:focus:border-amber-50 invalid:border-red-500 invalid:border-2"
              onChange={handleVehicleTypeChange}
            >
              <option selected value="tipo">
                Tipo de vehiculo
              </option>
              <option value="motocicleta">Motocicleta</option>
              <option value="bicicleta">Bicicleta</option>
            </select>
          </div>

          <div className="max-w-2xl mx-auto">
            <select
              id="brands"
              required
              className="bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-s rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-amber-500 dark:focus:border-amber-50 invalid:border-red-500 invalid:border-2"
            >
              <option selected>Selecciona un tipo primero</option>
              {vehicleType === "bicicleta" && (
                <>
                  <option selected>Haro</option>
                  <option value="trek">Trek</option>
                  <option value="specialized">Specialized</option>
                </>
              )}
              {vehicleType === "motocicleta" && (
                <>
                  <option selected>Yamaha</option>
                  <option value="harley-davidson">Harley Davidson</option>
                  <option value="honda">Honda</option>
                </>
              )}
            </select>
          </div>

          {vehicleType === "motocicleta" && (
            <div className="mb-4">
              <label
                className="block text-teal-800 text-sm font-bold mb-2 text-start"
                htmlFor="name"
              >
                Numero de placa
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500 invalid:border-pink-600 invalid:border-2"
                type="text"
                id="name"
                name="name"
                placeholder="1020304050 "
                required
              />
            </div>
          )}       
          {vehicleType === "bicicleta" && (
            <div className="mb-4">
              <label
                className="block text-teal-800 text-sm font-bold mb-2 text-start"
                htmlFor="serial"
              >
                Numero de serial
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500 invalid:border-pink-600 invalid:border-2"
                type="text"
                id="serial"
                name="serial"
                placeholder="ABC1234"
                required
              />
            </div>
          )}

          {vehicleType === "motocicleta" && (
            <div className="mb-4">
              <label
                className="block text-teal-800 text-sm font-bold mb-2 text-start"
                htmlFor="modelo"
              >
                Modelo
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500 invalid:border-pink-600 invalid:border-2"
                type="text"
                id="modelo"
                name="modelo"
                placeholder="R 15"
                required
              />
            </div>
          )}
         
          {vehicleType === "bicicleta" && (
            <div className="mb-4">
              <label
                className="block text-teal-800 text-sm font-bold mb-2 text-start"
                htmlFor="tipo"
              >
                Tipo
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500 invalid:border-pink-600 invalid:border-2"
                type="text"
                id="tipo"
                name="tipo"
                placeholder="montañera"
                required
              />
            </div>
          )}

          <div className="mb-4">
            <label
              className="block text-teal-800 text-sm font-bold mb-2 text-start"
              htmlFor="color"
            >
              Color
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500 invalid:border-pink-600 invalid:border-2"
              type="text"
              id="color"
              name="color"
              placeholder="Negro"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-teal-800 text-sm font-bold mb-2 text-start"
              htmlFor="name"
            >
              Fotografia
            </label>
            <div className="flex w-full items-center justify-center">
              <label className="w-full flex flex-col items-center px-1 py-1 bg-white text-blue rounded-lg shadow-lg tracking-wide border-2 border-blue cursor-pointer hover:bg-blue hover:text-amber-500 invalid:border-pink-600 invalid:border-2">
                <svg
                  class="w-8 h-8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                </svg>
                <span class="text-s leading-normal invalid:border-pink-600 invalid:border-2">Selecciona un archivo</span>
                <input type="file" class="hidden " required />
              </label>
            </div>
          </div>


          <div className="mb-4">
            <label
              className="block text-teal-800 text-sm font-bold mb-2 text-start"
              htmlFor="name"
            >
              Tarjeta de propiedad
            </label>
            <div className="flex w-full items-center justify-center">
              <label className="w-full flex flex-col items-center px-1 py-1 bg-white text-blue rounded-lg shadow-lg tracking-wide border-2 border-blue cursor-pointer hover:bg-blue hover:text-amber-500">
                <svg
                  class="w-8 h-8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                </svg>
                <span class="text-s leading-normal">Selecciona un archivo</span>
                <input type="file" class="hidden" />
              </label>
            </div>
          </div>

          {vehicleType === "motocicleta" && (

          <div className="mb-4">
          <label
            className="block text-teal-800 text-sm font-bold mb-2 text-start"
            htmlFor="name"
          >
            Soat
          </label>
          <div className="flex w-full items-center justify-center">
            <label className="w-full flex flex-col items-center px-1 py-1 bg-white text-blue rounded-lg shadow-lg tracking-wide border-2 border-blue cursor-pointer hover:bg-blue hover:text-amber-500">
              <svg
                class="w-8 h-8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <span class="text-s leading-normal">Selecciona un archivo</span>
              <input type="file" class="hidden" />
            </label>
          </div>
          </div>

          )}
          <div className="mb-4">
            <label
              className="block text-teal-800 text-sm font-bold mb-2 text-start"
              htmlFor="observacion"
            >
              Observaciones
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500 invalid:border-pink-600 invalid:border-2"
              type="text"
              id="observaciones"
              name="observaciones"
              placeholder="tiene calcomanias en el tanque"
              required
            />
          </div>    
   
          <button
            className="w-full bg-amber-500 text-white text-s font-bold py-2 px-4 rounded-md hover:text-teal-800 hover:bg-amber-400 transition duration-300"
            type="submit"
          >
            Finalizar
          </button>
        </form>
      </div>
    </div>
  );
}

export { RegistrationFormVehicle };
