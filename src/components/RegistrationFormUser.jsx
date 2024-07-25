import React, { useState } from 'react';
import { API_URL } from "../config/API_URLS.tsx";

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
  //   const [formVehicleDataBici, setFormVehicleDataBici] = useState({
  //     brand: '',
  //     serial_number: '',
  //     type: '',
  //     color: '',
  //     observation: '',
  //     photo: '',
  //     tarjeta_propiedad: ''

  // });
    const [formVehicleDataMoto, setFormVehicleDataMoto] = useState({
      marca: 'Yamaha',
      placa: '',
      modelo: '',
      color: '',
      observaciones: '',
      foto: '',
      tarjeta_propiedad: '',

  });

    const token = localStorage.getItem('access_token');
  
    const [continueButton, setContinueButton] = useState(false);
    const [vehicleType, setVehicleType] = useState("tipo");
    const [image, setImage] = useState(null);
    const [vehiclePhoto, setVehiclePhoto] = useState(null);
    const [propertyCardPhoto, setpropertyCardPhoto] = useState(null);
    const [resquestSended, setRequestSended] = useState(false);
    const [errors, setErrors] = useState({});
    const [errorEndpoint, setErrorEndpoint] = useState("");
    const [documentType, setDocumentType] = useState("tipodoc");
    
    const handleVehicleTypeChange = (event) => {
      setVehicleType(event.target.value);
    };

    const handleDocumentType = (event) => {
      const selectedType = event.target.value;
      setDocumentType(selectedType);
    
      if (selectedType !== 'tipodoc') {
        setErrors((prevErrors) => {
          const { document, ...restErrors } = prevErrors;
          if (document === "elige un tipo de documento") {
            return restErrors;
          }
          return prevErrors;
        });
      }
    };


    const validateFields = (name, value) => {
      let error = '';
      if (name === 'ficha' && !/^[0-9]+$/.test(value)) {
        error = 'Por favor ingresa un número de ficha válido.';
      }
      else if (name === 'document' && !/^[0-9]+$/.test(value)) {
        error = 'Por favor ingresa un número de documento válido.';      
        
      }
      else if (name === 'email' && !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value)) {
        error = 'Por favor ingresa un correo válido.';
      }    
      
      else if (name === 'document' && value) {  
        if (documentType === 'tipodoc') {
          error = 'elige un tipo de documento';
        }
      }     
      return error;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
      
        const error = validateFields(name, value);
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: error,
        }));
     
    };
    const handleInputChange2 = (e) => {
      const { name, value } = e.target;
      setFormVehicleDataMoto({
          ...formVehicleDataMoto,
          [name]: value
      });

  };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let urlAPI = ''
        let newForm1 = {}      
    
        if (vehicleType === 'motocicleta') {
            urlAPI = `${API_URL}/motocicleta-registration`;
            newForm1 = { ...formVehicleDataMoto, user_document: formData.document };
        }
        if (vehicleType === 'bicicleta') {
            urlAPI = `${API_URL}/bicicleta-registration`;
            const { placa, ...rest } = formVehicleDataMoto;
            newForm1 = {
              numero_marco: placa,
              ...rest,
              user_document: formData.document
            };
        }
        try {
            console.log('Formulario:', formData);
            console.log('FormularioMoto:', newForm1);
            console.log('url', urlAPI);
            const response = await fetch(`${API_URL}/aprendiz-registration`,
             {
                method: 'post',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
           
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.detail);
            }
         
            const response2 = await fetch(urlAPI ,
              {
                  method: 'post',
                  body: JSON.stringify(newForm1),
                  headers: {
                      'Content-Type': 'application/json'
                  }
              });
              if (!response2.ok) {
                throw new Error('Error en la solicitud');
              }
            const data2 = await response2.json();
            setRequestSended(true);
            console.log('Respuesta de la API:', data2);
            
        } catch (error) {
            console.error('Error:', error);
            console.log(newForm1);
            alert(`${error}`);
            setErrorEndpoint(error.message);
        }
    };

    const handleImageChange = (e) => {
      const selectedImage = e.target.files[0];
      setImage(selectedImage);
      sendImageToS3(selectedImage);
    };
    const handleVehiclePhoto = (e) => {
      const selectedImage = e.target.files[0];
      setVehiclePhoto(selectedImage);
      sendImageToS3Vehicle(selectedImage, 'foto');
    };
    const handleVehiclePhotoProperty = (e) => {
      const selectedImage = e.target.files[0];
      setpropertyCardPhoto(selectedImage);
      sendImageToS3Vehicle(selectedImage, 'tarjeta_propiedad');
    };

    const sendImageToS3 = async (image) => {
      try {
        const formData2 = new FormData();
        formData2.append('image', image);  
        formData2.append('document', '12345');
    
        const response = await fetch(`${API_URL}/upload_img_s3`, {
          method: 'POST',
          body: formData2,
          headers: {            
            'Authorization': `Bearer ${token}`
          },
        });
    
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
    
        const data = await response.json();
        console.log('Respuesta de la API:', data);
        setFormData({ ...formData, photo: data.url});
       
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const sendImageToS3Vehicle = async (image, fieldName) => {
      try {
        const formData2 = new FormData();
        formData2.append('image', image);        
    
        const response = await fetch(`${API_URL}/upload_img_s3`, {
          method: 'POST',
          body: formData2,
          headers: {            
            'Authorization': `Bearer ${token}`
          },
        });
        
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
    
        const data = await response.json();
        console.log('Respuesta de la API:', data);
        setFormVehicleDataMoto(prevState => ({
          ...prevState,
          [fieldName]: data.url
        }));
       
      } catch (error) {
        console.error('Error:', error);
      }
    };

    if (resquestSended) {
      alert('Solicitud de registro enviada, ahora puedes revisar tu solicitud en la pagina principal');
      window.location.href = '/';
    }

    const isFormValid = () => {
      return (
        Object.values(errors).every((error) => !error) &&
        formData.name &&
        formData.last_name &&
        formData.document &&
        formData.ficha &&
        formData.email &&
        formData.finish_date &&
        image
      );
    };
   
    const handleContinueButton = () => {
      // if  (!isFormValid()) {        
      //   return;
      // }
      setContinueButton(true)
    };

  return (
    <>
    <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
      <div className="container mx-auto py-8 ">
        <h1 className="text-3xl font-bold mb-4 text-center text-amber-700">
         {!continueButton && 'Datos del aprendiz'}
         {continueButton && 'Datos del vehiculo'}
        </h1>
        {!continueButton && ( 
        <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-lg border-2 border-gray-300"
        >
          <div className="mb-4">
            <label
              className="block text-teal-800 text-sm font-bold mb-2 text-start"
              htmlFor="name"
            >
              Nombres*
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
              Apellidos*
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
              name='documentType'
              onChange={handleDocumentType}
              className= " bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-s rounded-lg focus:ring-amber-700 focus:border-amber-700 block w-full p-2.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-amber-500 dark:focus:border-amber-50 invalid:border-red-500 invalid:border-2"            >
               <option selected value="tipodoc" disabled  className="text-gray-400">
                Tipo de documento*
              </option>              
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
             Numero de documento*
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
            {errors.document && <span className="text-pink-600">{errors.document}</span>}
          </div>
          <div className="mb-4">
            <label
              className="block text-teal-800 text-sm font-bold mb-2 text-start"
              htmlFor="name"
            >
             Numero de ficha*
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-700 invalid:border-pink-600 invalid:border-2"
              type="text"
              id="ficha"
              name="ficha"
              placeholder="2454434" 
              pattern="^[0-9]+"
              value={formData.ficha}
              onChange={handleInputChange}
              required
            />
            {errors.ficha && <span className="text-pink-600">{errors.ficha}</span>}
          </div>

          <div className="mb-4">
            <label
              className="block text-teal-800 text-sm font-bold mb-2 mt-4 text-start"
              htmlFor="email"
            >
              Email*
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-700 invalid:border-pink-600 invalid:border-2"
              type="email"
              id="email"
              name="email"
              placeholder="john@example.com"
              onChange={handleInputChange}
              value={formData.email}
              required
            />
            {errors.email && <span className="text-pink-600">{errors.email}</span>}
          </div>
          <div className="mb-4">
            <label
              className="block text-teal-800 text-sm font-bold mb-2 mt-4 text-start"
              htmlFor="email"
            >
              Fecha de finalizacion del programa*
            </label>
            {/* <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-700 invalid:border-pink-600 invalid:border-2"
              type="text"
              id="fish_date"
              name="finish_date"
              placeholder="2022-12-31"
              value={formData.finish_date}
              onChange={handleInputChange}
              required
            /> */}
             <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500 invalid:border-pink-600 invalid:border-2"
              type="date"
              id="fish_date"
              name="finish_date"
              placeholder="2022-12-31"
             value={formData.finish_date}
             onChange={handleInputChange}
             required
            />
          </div>
          <div className="mb-4">
          <label
            className="block text-teal-800 text-sm font-bold mb-2 text-start"
            htmlFor="name"
          >
            Foto tipo carnet*
          </label>
          <div className="flex w-full items-center justify-center">
          <label className={`w-full flex flex-col items-center px-1 py-1 text-blue rounded-lg shadow-lg 
              tracking-wide border-2 border-blue hover:bg-blue hover:text-amber-500 invalid:border-pink-600 invalid:border-2 ${
                (formData.email && formData.ficha) ? 'cursor-pointer bg-white' : 'hover:text-red-500 cursor-not-allowed bg-gray-200'
              }`}>
              <svg
                class="w-8 h-8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <span class="text-s leading-normal">Selecciona un archivo</span>
              <input type="file" id="foto_carnet" class="hidden"  accept=".png,.jpg,.jpeg" onChange={handleImageChange}  disabled={!formData.email || !formData.ficha }/>
            </label>
          </div>
          {image && (
          <div className=' '>
            <p className=' text-center p-2 text-purple-600 font-bold'>Imagen seleccionada:</p>
            <img src={URL.createObjectURL(image)} alt="Imagen seleccionada" />
          </div>
          )}
          </div>
          <button
            onClick={handleContinueButton}
            className= {` w-full bg-amber-700 text-white text-s font-bold py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300 ${!isFormValid() ? 'cursor-not-allowed opacity-50 hover:bg-amber-500' : ''}`}
            type="button"
            disabled={!isFormValid()}
          >
            Continuar
          </button>          
        </form>
         )}

      {continueButton && (
           <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
          <div className="max-w-2xl mx-auto">
          <button
            onClick={() => setContinueButton(false)}
            className= {` mb-4 w-full bg-amber-700 text-white text-s font-bold py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300 ${!formData.name || !formData.last_name || !formData.document || !formData.ficha || !formData.email || !formData.finish_date || !image ? 'cursor-not-allowed opacity-50 hover:bg-amber-500' : ''}`}
            type="button"            
          >
            Volver atras
        
          </button>               
            <select
              id="vehicleType"
              name="tipoVehiculo"
              required
              className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-s rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-amber-500 dark:focus:border-amber-50 invalid:border-red-500 invalid:border-2"
              onChange={handleVehicleTypeChange}  
                         
            >
              <option selected value="tipo" disabled  className="text-gray-400">
                Tipo de vehiculo*
              </option>
              
              <option value="motocicleta">Motocicleta</option>
              <option value="bicicleta">Bicicleta</option>
              
            </select>
      
          </div>

          <div className="max-w-2xl mx-auto">
            <select
              id="marca"
              required
              name="marca"
              className={`bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-s rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5
               dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-800
                dark:focus:ring-amber-500 dark:focus:border-amber-50 invalid:border-red-500 invalid:border-2 ${vehicleType === 'tipo' ? 'cursor-not-allowed ' : ''}`}
              onChange={handleInputChange2}
              value={formVehicleDataMoto.marca}
              disabled = {vehicleType==='tipo' }
           >
              <option selected value="marca" disabled  className="text-gray-400">Selecciona una marca*</option >
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

          
            <div className="mb-4">          
            {vehicleType === "motocicleta" && (
              <label
                className="block text-teal-800 text-sm font-bold mb-2 text-start"
                htmlFor="serial_number"
              >
                Numero de placa*
              </label>
               )}       
              {vehicleType === "bicicleta" && (
                 <label
                 className="block text-teal-800 text-sm font-bold mb-2 text-start"
                 htmlFor="serial_number"
               >
                 Numero de marco*
               </label>

              )}       
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500 invalid:border-pink-600 invalid:border-2"
                type="text"
                id="placa"
                name="placa"
                placeholder="1234AB "
                value={formVehicleDataMoto.placa}
                onChange={handleInputChange2}
                required
                disabled = {vehicleType==='tipo'}
              />
            </div>
       
  
         
            <div className="mb-4">
           
              <label
                className="block text-teal-800 text-sm font-bold mb-2 text-start"
                htmlFor="model"
              >
                Modelo*
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500 invalid:border-pink-600 invalid:border-2"
                type="text"
                id="model"
                name="modelo"
                placeholder="R 15"
                value={formVehicleDataMoto.modelo}
                onChange={handleInputChange2}
                required
                disabled = {vehicleType==='tipo'}
              />
            </div>        

          <div className="mb-4">
            <label
              className="block text-teal-800 text-sm font-bold mb-2 text-start"
              htmlFor="color"
            >
              Color*
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500 invalid:border-pink-600 invalid:border-2"
              type="text"
              id="color"
              name="color"
              placeholder="Negro"
              value={formVehicleDataMoto.color}
              onChange={handleInputChange2}
              required
              disabled = {vehicleType==='tipo'}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-teal-800 text-sm font-bold mb-2 text-start"
              htmlFor="name"
            >
              Fotografia*
            </label>
            <div className="flex w-full items-center justify-center">
              <label  className={`w-full flex flex-col items-center px-1 py-1  text-blue rounded-lg shadow-lg 
              tracking-wide border-2 border-blue  hover:bg-blue hover:text-amber-500 invalid:border-pink-600 invalid:border-2 ${vehicleType === 'tipo' ? 'hover:text-red-500 cursor-not-allowed bg-gray-200' : 'cursor-pointer bg-white'}`}>
                <svg
                  class="w-8 h-8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                </svg>
                <span class="text-s leading-normal invalid:border-pink-600 invalid:border-2">Selecciona un archivo</span>
                <input type="file" accept=".png,.jpg,.jpeg" className={`hidden ${vehicleType === 'tipo' ? '' : ''}` } required  onChange={handleVehiclePhoto} disabled = {vehicleType === 'tipo' } />
              </label>
            </div>
          </div>
          {vehiclePhoto && (
          <div className='mb-4'>
            <p className=' text-center p-2 text-purple-600 font-bold'>Imagen seleccionada:</p>
            <img src={URL.createObjectURL(vehiclePhoto)} alt="Imagen seleccionada" />
          </div>
          )}


          <div className="mb-4">
            <label
              className="block text-teal-800 text-sm font-bold mb-2 text-start"
              htmlFor="name"
            >
              Tarjeta de propiedad*
            </label>
            <div className="flex w-full items-center justify-center">
              <label className={`w-full flex flex-col items-center px-1 py-1  text-blue rounded-lg shadow-lg 
              tracking-wide border-2 border-blue  hover:bg-blue hover:text-amber-500 invalid:border-pink-600 invalid:border-2 ${vehicleType === 'tipo' ? 'hover:text-red-500 cursor-not-allowed bg-gray-200' : 'cursor-pointer bg-white'}`}>
                <svg
                  class="w-8 h-8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                </svg>
                <span class="text-s leading-normal">Selecciona un archivo</span>
                <input type="file" class="hidden" required accept=".png,.jpg,.jpeg" onChange={handleVehiclePhotoProperty} disabled = {vehicleType === 'tipo'} />
              </label>
            </div>
          </div>
          {propertyCardPhoto && (
          <div className='mb-4'>
            <p className=' text-center p-2 text-purple-600 font-bold'>Imagen seleccionada:</p>
            <img src={URL.createObjectURL(propertyCardPhoto)} alt="Imagen seleccionada" />
          </div>
          )}


          {/* {vehicleType === "motocicleta" && (

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

          )} */}
          <div className="mb-4">
            <label
              className="block text-teal-800 text-sm font-bold mb-2 text-start"
              htmlFor="observations"
            >
              Observaciones
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500 invalid:border-pink-600 invalid:border-2"
              type="text"
              id="observaciones"
              name="observaciones"
              placeholder="tiene calcomanias en el tanque"
              value={formVehicleDataMoto.observaciones}
              onChange={handleInputChange2}
              disabled = {vehicleType === 'tipo'}
              
            />
          </div>    
   
          <button
            onClick={handleSubmit}
            className= {`w-full bg-amber-500 text-white text-s font-bold py-2 px-4 rounded-md hover:text-teal-800 hover:bg-amber-400 transition duration-300 ${!errors || !formVehicleDataMoto.placa || !formVehicleDataMoto.modelo || !formVehicleDataMoto.color || !vehiclePhoto || !propertyCardPhoto ? 'cursor-not-allowed opacity-50 hover:bg-amber-500' : ''}`}
            type="submit"
            disabled={!errors || !formVehicleDataMoto.placa || !formVehicleDataMoto.modelo || !formVehicleDataMoto.color || !vehiclePhoto || !propertyCardPhoto}
          >
            Finalizar
          </button>
          {errorEndpoint && (
            <div className="bg-red-200 p-2 mt-2 text-red-700 text-center">
              {errorEndpoint}
            </div>
          
          )}
        </form>
      )}
      </div>
    </div>
  
   
    </>
    

  );
}
export { RegistrationFormUser };
