import React, { useState, useCallback  } from 'react';
import ReactApexChart from 'react-apexcharts';
import { API_URL } from "../config/API_URLS.tsx";
import { useEffect } from 'react';


export const DashboardMoto = () => {
  const [loading, setLoading] = useState(false);
  const [parkingData, setParkingData] = useState(false);
  const [state, setState] = useState({
    series: [2, 8],
  });


const options = {
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    type: 'donut',
    
  },
  colors: ['#f5780b', 'black'],
  hover: 'hover:bg-black',
  labels: ['Motocicletas', 'Espacio disponible'],
  legend: {
    show: false,
    position: 'bottom',
  },

  plotOptions: {
    pie: {
      donut: {
        size: '65%',
        background: 'transparent',
      },
    },
  },
  dataLabels: {
    enabled: true,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 380,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};

  const updateSeries = (motocycleInParking, actuallyMotorcycleCapacity) => {
    setState((prevState) => ({
      ...prevState,
      series: [motocycleInParking, actuallyMotorcycleCapacity], 
    }));
  };


  const handleLoad = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/parking-all-counter`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      const data = await response.json();
      console.log('Respuesta de la API:', data);
      setParkingData(data);
      const { motocycle_in_parking, actually_motorcycle_capacity } = data;
      updateSeries(motocycle_in_parking, actually_motorcycle_capacity);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (parkingData === false) {
      handleLoad();
    }
  }, [handleLoad, parkingData]);

  return (
    <>  {loading &&  <div class="text-center">
     
        <svg
          aria-hidden="true"
          class="inline w-24 h-24 text-gray-100 animate-spin dark:text-gray-600 fill-purple-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
     
    </div>}

    {!loading &&   (
      <div className='shadow-md'>
    <div className="sm:px-7.5 col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-5">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Total Ocupación Motocicletas
          </h5>
        </div>
      </div>

      <div className="mb-2">
        <div id="DashboardMoto" className="mx-auto flex justify-center ">
          <ReactApexChart className= ""
            options={options}
            series={state.series}
            type="donut"
          />
        </div>
      </div>

      <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
      <div className="sm:w-1/2 w-full px-8">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#f5780b]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Motocicletas </span>
              <span> {parkingData.percent_motorcycle_ocupation}% </span>
            </p>
          </div>
        </div>
        <div className="sm:w-1/2 w-full px-8">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#d6d5d4]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Vacio </span>
              <span> {parkingData.percent_motorcycle_not_ocupation}% </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
     )}
    </>
  );
};




