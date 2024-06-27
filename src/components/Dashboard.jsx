import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export const Dashboard = () => {
  const [state, setState] = useState({
    series: [
      {
        name: 'Motocicletas',
        data: [23, 11, 22, 27, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        name: 'Bicicletas',
        data: [30, 25, 36, 30, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ],
  });

  const options = {
    legend: {
      show: false,
      position: 'top',
      horizontalAlign: 'left',
    },
    colors: ['#f5780b', '#8c470a'],
    chart: {
      fontFamily: 'Satoshi, sans-serif',
      height: 335,
      type: 'area',
      dropShadow: {
        enabled: true,
        color: '#623CEA14',
        top: 10,
        blur: 4,
        left: 0,
        opacity: 0.1,
      },
      toolbar: {
        show: true,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 350,
          },
        },
      },
    ],
    stroke: {
      width: [2, 2],
      curve: 'straight',
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 4,
      colors: '#fff',
      strokeColors: ['#f5780b', '#8c470a'],
      strokeWidth: 3,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      hover: {
        size: undefined,
        sizeOffset: 5,
      },
    },
    xaxis: {
      type: 'category',
      categories: [
        'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic' 
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        style: {
          fontSize: '0px',
        },
      },
      min: 0,
      max: 400,
    },
  };

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:flex-nowrap mt-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
              <div className="flex min-w-60">
                  <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
                      <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-[#f5780b]"></span>
                  </span>
                  <div className="w-full">
                      <p className="font-semibold text-primary">Total de Motocicletas</p>
                      <p className="text-sm font-medium">450</p>
                  </div>
              </div>
              <div className="flex min-w-60">
                  <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary">
                      <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-[#8c470a]"></span>
                  </span>
                  <div className="w-full">
                      <p className="font-semibold text-secondary">Total de Bicicletas</p>
                      <p className="text-sm font-medium">200</p>
                  </div>
              </div>
          </div>
          <div className="flex flex-col sm:flex-row max-w-45 justify-end">
              <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
                  <button className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
                      Week
                  </button>
                  <button className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
                      Mensual
                  </button>
              </div>
          </div>
        </div>
        <div>
            <div id="dashboard" className="-ml-5">
            <ReactApexChart
                options={options}
                series={state.series}
                type="area"
                height={350}
            />
            </div>
        </div>
    </div>
  );
};



