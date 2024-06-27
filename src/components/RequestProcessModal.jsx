import React from "react";
import { API_URL } from "../config/API_URLS.tsx";

function RequestProcessModal(props) {
  console.log('props', props.document);
  let stateId = 0;

  function handlerStateIdAccept() {
      stateId = 2;
      handleChange();
  }
  function handlerStateIdReject() {
    stateId = 3;
    handleChange();
}

  async function handleChange() {
    try {
      
        const response = await fetch(`${API_URL}/aprendiz-change-status`, {
            method: 'put',
            body: JSON.stringify({"document": props.document, "state_id": stateId}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        const data = await response.json();
        console.log('Respuesta de la API:', data);  
    
   
    } catch (error) {
        console.error('Error:', error);
    } finally {
      window.location.reload();
    }
  }

  return (
      <div
       className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-50 flex items-center justify-center"
      >
        <div class="relative p-4 w-full max-w-md max-h-full">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="popup-modal"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
            <div class="p-4 md:p-5 text-center">
            
            
              <button
              onClick={handlerStateIdReject}
                data-modal-hide="popup-modal"
                type="button"
                class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
              >
                Rechazar
              </button>
              <button
                onClick={handlerStateIdAccept}
                data-modal-hide="popup-modal"
                type="button"
                class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-green-500 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
               Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    
  );
}
export { RequestProcessModal };
