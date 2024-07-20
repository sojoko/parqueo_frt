import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import { RequestProcessModal } from "./RequestProcessModal";
import { ImgModal } from "./ImgModal";
import { API_URL } from "../config/API_URLS.tsx";
import { PiImageSquare } from "react-icons/pi";

import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
} from "@material-tailwind/react";
 
const TABS = [
  {
    label: "Todos",
    value: "all", 
  },
  {
    label: "Pendientes",
    value: 1,
 
  },
];
 
const TABLE_HEAD = ["Nombre", "Estado", "Documento","Ficha", "A-Foto", "Fecha-S", "Fecha-F", "V-Marca", "V-Modelo", "V-Placa",
"V-Color", "V-Foto", "V-Tarjeta", "V-Observaciones", "Acciones"];
 
export function AprendizRegistrationRequest() {
const [selectedTab, setSelectedTab] = useState(1);
const [filteredRows, setFilteredRows] = useState([]);
const [searchTerm, setSearchTerm] = useState('');
const [showModal, setShowModal] = useState(false);
const [aprendizData, setAprendizData] = useState(null);
const [loading, setLoading] = useState(false);
const [hasLoadedData, setHasLoadedData] = useState(false);
const [showModalImg, setShowModalImg] = useState(false); 
const [showModalVImg] = useState(false);
const [selectedPhotoUrl, setSelectedPhotoUrl] = useState(null);
const [selectedVPhotoUrl, setSelectedVPhotoUrl] = useState(null);
const [selectedDocument, setSelectedDocument] = useState(null);
const [pageValue, setPageValue] = useState(1);
const [totalValues, setTotalValues] = useState(0);


function handlePageChangeMinus() {  
  if (pageValue > 1) {
    setPageValue(prevPageValue => prevPageValue - 1);
  } else {
    setPageValue(1);
  }
}

function handlePageChangePlus() {    
  setPageValue(prevPageValue => prevPageValue + 1);
}



async function handleLoad() {
  try {
      setLoading(true);
      const response = await fetch(`${API_URL}/aprendiz-status?page=${pageValue}`, {
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
      setTotalValues(data.total_items);
  } catch (error) {
      console.error('Error:', error);
  } finally {
    setLoading(false);
    
  }
}

const handleOpenModal = (document) => {
  setShowModal(!showModal);
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
console.log(handleOpenModalVImg);


const handleTabChange = (event, newValue) => {
    console.log('holi');
    setSelectedTab(newValue);  
    setFilteredRows([]);
  };

const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setFilteredRows([]);
  };

  useEffect(() => {
    if (!hasLoadedData) {
      handleLoad();
      setHasLoadedData(true);
    }
  }, [hasLoadedData, handleLoad]);

  useEffect(() => {
    if (hasLoadedData) {
      handleLoad();

    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageValue]);
  

useEffect(() => {
  const fetchDataAndFilter = async () => {
    if (hasLoadedData && aprendizData) {      
      const newFilteredRows = aprendizData.items.filter((row) => {   
        if (selectedTab === 'all' ) {        
          return row.name.toLowerCase().includes(searchTerm.toLowerCase());
        } 
        if (row.state_id === selectedTab) {
          return row.name.toLowerCase().includes(searchTerm.toLowerCase());
        }
        else {
          return false;
        }
      });
      console.log('Filas filtradas:', newFilteredRows);
      setFilteredRows(newFilteredRows);
    }
  };
  fetchDataAndFilter(); 
}, [selectedTab, searchTerm, hasLoadedData, aprendizData]);


  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  
  return (
    <> {loading && <div className="w-100">Cargando...</div>}
    {filteredRows && !loading && (
    <Card className="h-full w-full mt-12">
      <CardHeader floated={false} shadow={false} className="rounded-none ">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row ">
        <Tabs value={selectedTab} className="w-full md:w-max">
            {console.log(selectedTab)}
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value} onClick={(event) => handleTabChange(event, value)}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input         
              label="Search"
              color="purple"
              icon={<MagnifyingGlassIcon className="h-5 w-5  text-purple-700" />}
              onChange={handleSearchChange}
              value={searchTerm}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll h-[28rem] px-0 lg:h-[32rem]">
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
              {filteredRows.length > 0 ? (
                 filteredRows.map(
                  ({ photo, name, email, state_id, document, ficha, registry_date, finish_date, vehicle }, index) => {
                const isLast = index === filteredRows.length  - 1;
             
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50"; 
                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-2">
                        <Avatar src={photo} alt={name} size="sm" />
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {name}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {email}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                      <Chip
                          variant="ghost"
                          size="sm"
                          value={state_id === 2 ? "Aceptado" : state_id === 3 ? "Rechazado" : "Pendiente"}
                          color={state_id === 2 ? "green" : state_id === 3 ? "red" : "orange"}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                      <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {document}
                          </Typography>
                        
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                      <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {ficha}
                          </Typography>
                        
                      </div>
                    </td> 
                    <td className={classes}>
                    <button onClick={() => handleOpenModalImg(photo)} type="button">
                        {showModalImg && <ImgModal img={selectedPhotoUrl}/>}
                        <IconButton variant="text" color="blue" size="regular">
                         <PiImageSquare className="text-2xl" />
                        </IconButton>                   
                    </button>
                    </td> 
                    <td className={classes}>
                      <div className="w-max">
                      <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {formatDate(registry_date)}
                          </Typography>
                        
                      </div>
                    </td>  
                    <td className={classes}>
                      <div className="w-max">
                      <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {formatDate(finish_date)}
                          </Typography>
                        
                      </div>
                    </td> 
                    {vehicle && (
                      <>
                        <td className={classes}>
                          <div className="w-max">
                            <Typography variant="small" color="blue-gray" className="font-normal opacity-70">
                              {vehicle.marca}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="w-max">
                            <Typography variant="small" color="blue-gray" className="font-normal opacity-70">
                              {vehicle.modelo}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="w-max">
                          <Typography variant="small" color="blue-gray" className="font-normal opacity-70">
                            {vehicle.placa ? vehicle.placa : (vehicle.numero_marco ? vehicle.numero_marco : 'No disponible')}
                          </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="w-max">
                            <Typography variant="small" color="blue-gray" className="font-normal opacity-70">
                              {vehicle.color}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                            <button onClick={() => handleOpenModalImg(vehicle.foto)} type="button">
                                {showModalVImg && <ImgModal img={selectedVPhotoUrl}/>}
                                <IconButton variant="text" color="blue" size="regular">
                                <PiImageSquare className="text-2xl" />
                                </IconButton>         
                            </button>
                        </td> 
                        <td className={classes}>
                            <button onClick={() => handleOpenModalImg(vehicle.tarjeta_propiedad)} type="button">
                                {showModalVImg && <ImgModal img={selectedVPhotoUrl}/>}
                                <IconButton variant="text" color="blue" size="regular">
                                <PiImageSquare className="text-2xl" />
                                </IconButton>                    
                            </button>
                        </td> 
                        <td className={classes}>
                          <div className="w-max">
                            <Typography variant="small" color="blue-gray" className="font-normal opacity-70">
                              {vehicle.observaciones }
                            </Typography>
                          </div>
                        </td>            
                      </>
                    )}
                    {state_id === 1 && (
                    <td className={classes}>                      
                    <button onClick={() => handleOpenModal(document)} type="button" title="administrar">
                        {showModal && <RequestProcessModal document={selectedDocument} />}
                        <IconButton variant="text">
                          <PencilIcon className="h-4 w-4 text-purple-600" />
                        </IconButton>                        
                     </button>
                    </td>
                 )}
                  </tr>
                );
                  }
            )) : (
              <tr>
                <td colSpan={4} className="p-4">
                  Cargando...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal text-purple-600">
          Página {pageValue} de {Math.round(totalValues / 5)}
        </Typography>
        <div className="flex gap-2">
          <Button
                variant="outlined"
                size="sm"
                color="purple"
                onClick={handlePageChangeMinus}
                disabled={pageValue === 1}
              >
                Anterior
              </Button>
            <Button
                onClick={handlePageChangePlus}
                variant="outlined"
                size="sm"
                color="purple"
                disabled={pageValue === Math.round(totalValues / 5)}                
              >
                Siguiente
              </Button>
        </div>
      </CardFooter>
    </Card>
     )}
    </>
  );
}