import React, { useState } from 'react';

function SelectComponent() {
    const [vehicleType, setVehicleType] = useState('');

    const handleVehicleTypeChange = (event) => {
        setVehicleType(event.target.value);
    };

    return (
        <div className="max-w-2xl mx-auto">
            <label htmlFor="vehicleType" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select a vehicle type</label>
            <select id="vehicleType" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleVehicleTypeChange}>
                <option value="">Choose a vehicle type</option>
                <option value="bicycle">Bicycle</option>
                <option value="motorcycle">Motorcycle</option>
            </select>

            
            <select id="brands" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {vehicleType === 'bicycle' && (
                    <>
                        <option value="">Choose a bicycle brand</option>
                        <option value="trek">Trek</option>
                        <option value="specialized">Specialized</option>
                    </>
                )}
                {vehicleType === 'motorcycle' && (
                    <>
                        <option value="">Choose a motorcycle brand</option>
                        <option value="harley-davidson">Harley Davidson</option>
                        <option value="honda">Honda</option>
                    </>
                )}
            </select>
        </div>
    );
}

export {SelectComponent}
