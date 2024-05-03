import React, { useState } from 'react';

  const RegistrationFormUser = () => {
    const [formData, setFormData] = useState({
        name: '',
        last_name: '',
        document: '',
        ficha: '',
        email: '',
        photo: '',
        finish_date: ''
    });
    const [errors, setErrors] = useState({});    

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    
    // const handleFileChange = (e) => {
    //     setFormData({
    //         ...formData,
    //         photo: e.target.files[0]
    //     });
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:8000/api/v1/aprendiz-registration', {
                method: 'post',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            const data = await response.json();
            console.log('Respuesta de la API:', data);
            alert('El aprendiz fue registrado exitosamente');
        } catch (error) {
            console.error('Error:', error);
            console.log(formData);
            alert('Error al registrar el aprendiz');
        }
    };

  return (
    <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
      <div className="container mx-auto py-8 ">
        <h1 className="text-3xl font-bold mb-4 text-center text-amber-700">
          Datos del aprendiz
        </h1>
        <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-lg border-2 border-gray-300"
        onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-teal-800 text-sm font-bold mb-2 text-start"
              htmlFor="name"
            >
              Nombres
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500 invalid:border-pink-600 invalid:border-2"
              type="text"
              id="name"
              name="name"
              placeholder="Juan"
              pattern="[a-zA-Z ]{2,254}"
              title='Este campo solo acepta letras'
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-teal-800 text-sm font-bold mb-2 text-start"
              htmlFor="name"
            >
              Apellidos
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500 invalid:border-pink-600 invalid:border-2"
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Gonzalez"
              pattern="[a-zA-Z ]{2,254}"
              value={formData.last_name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="max-w-2l mx-auto">
            <select 
              id="documentType"
              required
              className= " bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-s rounded-lg focus:ring-amber-700 focus:border-amber-700 block w-full p-2.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-amber-500 dark:focus:border-amber-50 invalid:border-red-500 invalid:border-2"            >
              <option defaultValue={"Tipo de documento"}>Tipo de documento</option>
              <option value="CC">Cedula de ciudadania</option>
              <option value="CE">Cedula de extranjeria</option>
              <option value="TI">Tarjeta de identidad</option>
              <option value="PT">Permiso por proteccion temporal</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-teal-800 text-sm font-bold mb-2 text-start"
              htmlFor="name"
            >
             Numero de documento
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-700 invalid:border-pink-600 invalid:border-2"
              type="text"
              id="document"
              name="document"
              placeholder="1020304050"
              pattern="^[0-9]+"
              value={formData.document}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-teal-800 text-sm font-bold mb-2 text-start"
              htmlFor="name"
            >
             Numero de ficha
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-700 invalid:border-pink-600 invalid:border-2"
              type="text"
              id="ficha"
              name="ficha"
              placeholder="2454434 " 
              pattern="^[0-9]+"
              value={formData.ficha}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 mt-4 text-start"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-700 invalid:border-pink-600 invalid:border-2"
              type="email"
              id="email"
              name="email"
              placeholder="john@example.com"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 mt-4 text-start"
              htmlFor="email"
            >
              Fecha de finalizacion del programa
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-700 invalid:border-pink-600 invalid:border-2"
              type="text"
              id="fish_date"
              name="finish_date"
              placeholder="2022-12-31"
              value={formData.finish_date}
              onChange={handleInputChange}
              required
            />
          </div>
          {/* <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-start"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 invalid:border-pink-600 invalid:border-2"
              type="password"
              id="password"
              name="password"
              placeholder="********"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-start"
              htmlFor="confirm-password"
            >
              Confirma tu contraseña
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 invalid:border-pink-600 invalid:border-2"
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="********"
              required
            />
          </div> */}
          <div className="mb-4">
          <label
            className="block text-teal-800 text-sm font-bold mb-2 text-start"
            htmlFor="name"
          >
            Foto tipo carnet
          </label>
          <div className="flex w-full items-center justify-center">
            <label className="w-full flex flex-col items-center px-1 py-1 bg-white text-blue rounded-lg shadow-lg tracking-wide border-2 border-blue cursor-pointer hover:bg-blue hover:text-amber-700">
              <svg
                class="w-8 h-8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <span class="text-s leading-normal">Selecciona un archivo</span>
              <input type="file" id="foto_carnet" class="hidden" />
            </label>
          </div>
          </div>
          <button
            className="w-full bg-amber-700 text-white text-s font-bold py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300"
            type="submit"
          >
            Continuar
          </button>
        </form>
      </div>
    </div>
  );
}

export { RegistrationFormUser };
