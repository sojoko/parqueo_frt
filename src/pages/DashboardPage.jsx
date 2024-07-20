import { LoggedLayout } from "../layout/LoggedLayout.tsx";
// import { Dashboard } from "../components/Dashboard";
import { DashboardGeneral } from "../components/DashboardGeneral";
import { DashboardBici } from "../components/DashboardBici";
import { DashboardMoto } from "../components/DashboardMoto";
import React from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import { API_URL } from '../config/API_URLS.tsx';

function DashboardPage (){

    const roll = parseInt(localStorage.getItem('userRoll'))

    const generateReport = async () => {
        try {
          const response = await axios.get(`${API_URL}/generate-report`, {
            responseType: 'blob',
          });
          const blob = new Blob([response.data], { type: 'application/pdf' });
          saveAs(blob, 'report.pdf');
        } catch (error) {
          console.error('Error generating report:', error);
        }
      };

    return (
        
        <LoggedLayout>
            <div className="my-6 bg-gray-200 flex flex-col items-center justify-center w-full ">
            <div className="w-full flex justify-center mb-2 mt-2 mr-0  lg:justify-end lg:mb-4 lg:mr-16">
                <button onClick={generateReport} className="flex shadow-lg shadow-amber-800/50 items-center justify-center text-xl text-amber-800 hover:text-white border-2 border-amber-800
                hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg px-4
                py-2 text-center">
                Descargar reporte
              </button>
            </div>

                {(roll === 1 || roll === 3) && (
                 <>
                    
                    <div className="w-4/5 rounded-md shadow-md mb-4">
                        <DashboardGeneral/>
                    </div>
                 </>   
                )}
                <div className="w-4/5 rounded-md shadow-md mb-4">
                    <DashboardBici/>
                </div>
                <div className="w-4/5 rounded-md ">
                    <DashboardMoto/>
                </div>
            </div>
            </LoggedLayout>
       
    )
}

export {DashboardPage};