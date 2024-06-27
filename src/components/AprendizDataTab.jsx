
import { useState } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import { RequestProcessModal } from "./RequestProcessModal";
import { ImgModal } from "./ImgModal";
import { API_URL } from "../config/API_URLS.tsx";
import { PiImageSquare } from "react-icons/pi";
import { useLocation } from 'react-router-dom';

import {
  Card,
  Typography,
  CardBody,
  Chip,
  Avatar,
  IconButton,
} from "@material-tailwind/react";
 

 
const TABLE_HEAD = ["Nombre", "Estado", "Documento","Ficha", "A-Foto", "Fecha-S", "Fecha-F", "V-Marca", "V-Modelo", "V-Placa",
"V-Color", "V-Foto", "V-Tarjeta", "V-Observaciones"];
 
export function AprendizDataTab() {
const location = useLocation();
const queryParams = new URLSearchParams(location.search);  
const documentByParams = queryParams.get('document')



const [selectedTab, setSelectedTab] = useState('all');
const [filteredRows, setFilteredRows] = useState([]);
const [searchTerm, setSearchTerm] = useState('');
const [showModal, setShowModal] = useState(false);
const [aprendizData, setAprendizData] = useState(null);
const [loading, setLoading] = useState(false);
const [hasLoadedData, setHasLoadedData] = useState(false);
const [showModalImg, setShowModalImg] = useState(false);
const [showModalVImg, setShowModalVImg] = useState(false);
const [selectedPhotoUrl, setSelectedPhotoUrl] = useState(null);
const [selectedVPhotoUrl, setSelectedVPhotoUrl] = useState(null);
const [selectedDocument, setSelectedDocument] = useState(null);


async function handleLoad() {
  try {
      setLoading(true);
      const response = await fetch(`${API_URL}/aprendiz-statu/${documentByParams}`, {
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
      setAprendizData(data);   
      setFilteredRows(data);
  } catch (error) {
      console.error('Error:', error);
  } finally {
    setLoading(false);
    console.log(aprendizData)
  }
}

const handleOpenModal = (document) => {
  setShowModal(!showModal);
  console.log('Modal abierto');
  setSelectedDocument(document);
}

const handleOpenModalImg = (photoUrl) => {
  setShowModalImg(!showModalImg);
  setSelectedPhotoUrl(photoUrl);
}

const handleOpenModalVImg = (photoUrl) => {
  setShowModalImg(!showModalVImg);
  setSelectedVPhotoUrl(photoUrl);
}

const handleTabChange = (event, newValue) => {
    console.log('Nuevo valor de tab:', newValue);
    setSelectedTab(newValue);  
    setFilteredRows([]);
  };

const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {    
   
        handleLoad(); 
    
    
  }, []);
  




  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  
  return (
    
    <>  {loading &&   <div class="text-center">
      <div role="status">
        <svg
          aria-hidden="true"
          class="inline w-8 h-8 text-gray-100 animate-spin dark:text-gray-600 fill-amber-600"
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
      </div>
    </div>}
    
  
    {aprendizData &&  (
    <Card className="h-full w-full">
     
      <CardBody className="overflow-scroll px-0">
        <table className="mt-2 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-purple-300 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color=""
                    className="font-normal leading-none text-purple-700"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>         
            <tr>
              <td className="border-y border-purple-300 p-4">
                <Typography
                  variant="small"
                  color=""
                  className="font-normal leading-none text-purple-700"
                >
                  {aprendizData.name} {aprendizData.last_name}
                </Typography>
              </td>
              <td className="border-y border-purple-300 p-4">
                <Chip
                  variant="filled"
                  size="sm"
                  value={
                    aprendizData.state_id === 1 ? "Pendiente" :
                    aprendizData.state_id === 2 ? "Aceptado" :
                    "Rechazado"
                  }
                  color={
                    aprendizData.state_id === 1 ? "orange" :
                    aprendizData.state_id === 2 ? "green" :
                    "red"
                  }
                />
              </td>
              <td className="border-y border-purple-300 p-4">
                <Typography
                  variant="small"
                  color=""
                  className="font-normal leading-none text-purple-700"
                >
                  {aprendizData.document}
                </Typography>
              </td>
              <td className="border-y border-purple-300 p-4">
                <Typography
                  variant="small"
                  color=""
                  className="font-normal leading-none text-purple-700"
                >
                  {aprendizData.ficha}
                </Typography>
              </td>
              <td className="border-y border-purple-300 p-4">
              <button onClick={() => handleOpenModalImg(aprendizData.photo)} type="button">
                        {showModalImg && <ImgModal img={selectedPhotoUrl}/>}
                        <IconButton variant="text"
                        color="blue"
                        size="regular">
                          
                        <PiImageSquare className="text-2xl" />
                        </IconButton>                        
                </button>
              </td>
              <td className="border-y border-purple-300 p-4">
                <Typography
                  variant="small"
                  color=""
                  className="font-normal leading-none text-purple-700"
                >
                  {formatDate(aprendizData.registry_date)}
                </Typography>
              </td>
              <td className="border-y border-purple-300 p-4">
                <Typography
                  variant="small"
                  color=""
                  className="font-normal leading-none text-purple-700"
                >
                  {formatDate(aprendizData.finish_date)}
                </Typography>
              </td>
              <td className="border-y border-purple-300 p-4">
                <Typography
                  variant="small"
                  color=""
                  className="font-normal leading-none text-purple-700"
                 
                >
                   {aprendizData.vehicle_0.marca}
                  </Typography>
               </td> 
               <td className="border-y border-purple-300 p-4">
                <Typography
                  variant="small"
                  color=""
                  className="font-normal leading-none text-purple-700"
                 
                >
                   {aprendizData.vehicle_0.modelo}
                  </Typography>
               </td> 
              <td className="border-y border-purple-300 p-4">
                <Typography
                  variant="small"
                  color=""
                  className="font-normal leading-none text-purple-700"
                >
                  {aprendizData.vehicle_0.placa}
                  </Typography>
                </td>
              <td className="border-y border-purple-300 p-4">
                <Typography
                  variant="small"
                  color=""
                  className="font-normal leading-none text-purple-700"
                >
                  {aprendizData.vehicle_0.color}
                </Typography>
              </td>
              <td className="border-y border-purple-300 p-4">
                 <button  onClick={() => handleOpenModalImg(aprendizData.vehicle_0.foto )}>
                 
                
                    {showModalVImg && <ImgModal img={selectedVPhotoUrl}/>}
                    <IconButton variant="text"
                        color="blue"
                        size="regular">
                          
                        <PiImageSquare className="text-2xl" />
                        </IconButton>  
                </button>
              </td>
              <td className="border-y border-purple-300 p-4">
              
              <button onClick={() => handleOpenModalImg(aprendizData.vehicle_0.tarjeta_propiedad)} type="button">
                  {showModalVImg && <ImgModal img={selectedVPhotoUrl}/>}                    
                  <IconButton variant="text"
                        color="blue"
                        size="regular">
                          
                        <PiImageSquare className="text-2xl" />
                        </IconButton>  
                               
              </button>
              </td>
            
              <td className="border-y border-purple-300 p-4">
                <Typography
                  variant="small"
                  color=""
                  className="font-normal leading-none text-purple-700"
                >
                  {aprendizData.vehicle_0.observaciones}
                  
                </Typography>
              </td>
          
                  
               </tr> 
          </tbody>
        </table>
      </CardBody>
   
    </Card>
     )}
    </>
  );
}