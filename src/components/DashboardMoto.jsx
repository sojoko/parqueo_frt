import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export const DashboardMoto = () => {
  const [state, setState] = useState({
    series: [40, 60],
  });


const options = {
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    type: 'donut',
  },
  colors: ['#f5780b', '#d6d5d4'],
  labels: ['Motocicletas', 'Vacio'],
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
    enabled: false,
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


  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
      series: [65, 34, 10, 56],
    }));
  };

  return (
    <div className="sm:px-7.5 col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-5">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Total Ocupación Motocicletas
          </h5>
        </div>
      </div>

      <div className="mb-2">
        <div id="DashboardMoto" className="mx-auto flex justify-center">
          <ReactApexChart
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
              <span> 40% </span>
            </p>
          </div>
        </div>
        <div className="sm:w-1/2 w-full px-8">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#d6d5d4]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Vacio </span>
              <span> 60% </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};




