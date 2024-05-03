import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { API_URL } from "../config/API_URLS.tsx";
import { useEffect } from "react";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
 
const TABS = [
  {
    label: "Todos",
    value: "all",
  },
  {
    label: "Aprendices",
    value: "aprendiz",
  },
  {
    label: "Vigilantes",
    value: "vigilante",
  },
];
 
const TABLE_HEAD = ["Nombre", "Roll", "Estado", "Gestionar"];
 
export function UserList() {
  const [selectedTab, setSelectedTab] = useState('all');
  const [filteredRows, setFilteredRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [personData, setPersonData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasLoadedData, setHasLoadedData] = useState(false);
  const [pageValue, setPageValue] = useState(1);

  async function handleLoad() {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/all-persons?page=${pageValue}&per_page=3`, {
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
      setPersonData(data);  
      setFilteredRows(data);  
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!hasLoadedData) {
      handleLoad();
      setHasLoadedData(true);
    }
  }, [])

  useEffect(() => {
    if (hasLoadedData) {
      handleLoad();
    }
  }, [pageValue]);

  const handleTabChange = (event, newValue) => {
    console.log('Nuevo valor de tab:', newValue);
    setSelectedTab(newValue);
    setFilteredRows([]);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setFilteredRows([]);
  };

  useEffect(() => {
    const fetchDataAndFilter = async () => {
      if (hasLoadedData && personData.length > 0) {
      const newFilteredRows = personData.filter((row) => {   
        if (selectedTab === 'all' || row.roll === selectedTab) {
          return row.name.toLowerCase().includes(searchTerm.toLowerCase());
        } else {
          return false;
        }
      });
      setFilteredRows(newFilteredRows);
    };
  };
    fetchDataAndFilter(); 
  }, [selectedTab, searchTerm, hasLoadedData]);
  

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  function handlePageChangePlus() {    
    setPageValue(prevPageValue => prevPageValue + 1);
  }

  function handlePageChangeMinus() {  
    setPageValue(prevPageValue => prevPageValue - 1);
  }




  return (
    <>
      {loading && <div className="w-100">Cargando...</div>}
      {filteredRows && !loading && (
        <Card className="h-full w-full">
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
                {filteredRows.length > 0 ? (
                  filteredRows.map(
                    ({ photo, name, last_name, email, roll, registry_date }, index) => {
                      const isLast = index === filteredRows.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";
                      return (
                        <tr key={roll}>
                          <td className={classes}>
                            <div className="flex items-center gap-2">
                              <Avatar src={photo} alt={name} size="sm" />
                              <div className="flex flex-col">
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {`${name} ${last_name}`}
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
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {roll}
                              </Typography>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal opacity-70"
                              ></Typography>
                            </div>
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
                            <Tooltip content="Edit User">
                              <IconButton variant="text">
                                <PencilIcon className="h-4 w-4 text-purple-600" />
                              </IconButton>
                            </Tooltip>
                          </td>
                        </tr>
                      );
                    }
                  )
                ) : (
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
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal text-purple-600"
            >
              Page {pageValue} of 10
            </Typography>
            <div className="flex gap-2">
              <Button variant="outlined" size="sm" color="purple" onClick={handlePageChangeMinus}>
                Anterior
              </Button>
              <Button
                onClick={handlePageChangePlus}
                variant="outlined"
                size="sm"
                color="purple"
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