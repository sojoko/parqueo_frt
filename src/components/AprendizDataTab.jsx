import { useState } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import { RequestProcessModal } from "./RequestProcessModal";
import {
  Card,
  Typography,
  CardBody,
  Chip,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
 
 
const TABLE_HEAD = ["Nombre", "Estado", "Documento","Ficha", "A-Foto", "Fecha-S", "Fecha-F", "V-Marca", "V-Modelo", "V-Placa",
"V-Color", "V-Foto", "V-Soat", "V-Tarjeta", "V-Observaciones", "Acciones"];
 
const TABLE_ROWS = [
  {
    photo: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    email: "john@creative-tim.com",
    roll: "Aprendiz",  
    document: "1020304050", 
    ficha: "2424242",
    status: true,
    APhoto: "#",
    dateRequest: "23/04/18",
    dateFinish: "23/04/2022",
    VMarca: "Chevrolet",
    VModelo: "2021",
    VPlaca: "ABC123",
    VColor: "Rojo",
    VPhoto: "#",
    VSoat: "#",
    VTarjeta: "#",
    VObservaciones: "ninguna"
  },


];
export function AprendizDataTab() {
const [selectedTab, setSelectedTab] = useState('all');
const [filteredRows, setFilteredRows] = useState([]);
const [searchTerm, setSearchTerm] = useState('');
const [showModal, setShowModal] = useState(false);

const handleOpenModal = () => {
  setShowModal(!showModal);
  console.log('Modal abierto');
}

const handleCloseModal = () => {
  setShowModal(false);
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
    const newFilteredRows = TABLE_ROWS.filter((row) => {   
        if (selectedTab === 'all' || row.job === selectedTab) {
          return row.name.toLowerCase().includes(searchTerm.toLowerCase());
        } else {
          return false;
        }
      });
    setFilteredRows(newFilteredRows);
  }, [selectedTab, searchTerm]);
  return (
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
              {filteredRows.map(({ photo, name, email, status, document, ficha,APhoto, dateRequest, dateFinish, VMarca, VModelo, VPlaca, VColor, VPhoto, VSoat, VTarjeta, VObservaciones }, index) => {
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
                          value={status ? "Aceptado" : "Pendiente"}
                          color={status ? "green" : "orange"}
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
                      <div className="w-max">
                      <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {APhoto}
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
                            {dateRequest}
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
                            {dateFinish}
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
                            {VMarca}
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
                            {VModelo}
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
                            {VPlaca}
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
                            {VColor}
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
                            {VPhoto}
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
                            {VSoat}
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
                            {VTarjeta}
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
                            {VObservaciones}
                          </Typography>
                        
                      </div>
                    </td> 
                    <td className={classes}>
                      <Tooltip content="Administrar" >
                      <button onClick={handleOpenModal} class= "" type="button">   
                        {showModal && <RequestProcessModal/>}
                        <IconButton variant="text">
                          <PencilIcon className="h-4 w-4 text-purple-600" />
                        </IconButton>
                        
                        </button>
                        
                      </Tooltip>
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardBody>
     
    </Card>
  );
}