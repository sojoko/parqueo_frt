import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { API_URL } from "../config/API_URLS.tsx";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
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
 
let TABLE_HEAD = ["Nombre", "Roll", "Fecha de registro", "Gestionar"];
 
export function UserList() {
  const [selectedTab, setSelectedTab] = useState('all');
  const [filteredRows, setFilteredRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [personData, setPersonData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasLoadedData, setHasLoadedData] = useState(false);
  const [pageValue, setPageValue] = useState(1);
  const rollByLocal = parseInt(localStorage.getItem('userRoll'))
  const navigate = useNavigate();
  
  if (rollByLocal === 3){
    TABLE_HEAD = ["Nombre", "Roll", "Fecha de registro"];
  }
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

  // useEffect(() => {
  //   if (hasLoadedData) {
  //     handleLoad();
  //   }
  // }, [pageValue]);

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

  const handleEditUser = (document, roll,name, last_name, email, ficha, finishDate) => {
    let rollId = 0;
    if (roll === "admin"){
      rollId = 1;
      navigate(`/edit_user?document=${document}&roll=${rollId}&name=${name}&last_name=${last_name}`);
    }
    else if (roll === "vigilante"){
      rollId = 3;
      navigate(`/edit_user?document=${document}&roll=${rollId}&name=${name}&last_name=${last_name}`);
    }
    else if (roll === "aprendiz"){
      rollId = 2;
      navigate(`/edit_user?document=${document}&roll=${rollId}&name=${name}&last_name=${last_name}&ficha=${ficha}&finish_date=${finishDate}&email=${email}`);
    }
  
    
  };


  return (
    <>
      {loading && (
        <div class="text-center  ">
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
        </div>
      )}
      {filteredRows && !loading && (
        <Card className="h-full w-full mt-12">
          <CardHeader floated={false} shadow={false} className="rounded-none ">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row ">
              <Tabs value={selectedTab} className="w-full md:w-max">
                {console.log(selectedTab)}
                <TabsHeader>
                  {TABS.map(({ label, value }) => (
                    <Tab
                      key={value}
                      value={value}
                      onClick={(event) => handleTabChange(event, value)}
                    >
                      &nbsp;&nbsp;{label}&nbsp;&nbsp;
                    </Tab>
                  ))}
                </TabsHeader>
              </Tabs>
              <div className="w-full md:w-72">
                <Input
                  label="Search"
                  color="purple"
                  icon={
                    <MagnifyingGlassIcon className="h-5 w-5  text-purple-700" />
                  }
                  onChange={handleSearchChange}
                  value={searchTerm}
                />
              </div>
            </div>
          </CardHeader>
          <CardBody className="overflow-scroll  h-[28rem] px-0">
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
                    (
                      {
                        photo,
                        name,
                        last_name,
                        email,
                        roll,
                        registry_date,
                        document,
                        ficha,
                        finish_date,
                      },
                      index
                    ) => {
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
                          {rollByLocal === 1 && (
                            <td className={classes}>
                              <Tooltip content="Edit User">
                                <button
                                  onClick={() =>
                                    handleEditUser(
                                      document,
                                      roll,
                                      name,
                                      last_name,
                                      email,
                                      ficha,
                                      finish_date
                                    )
                                  }
                                >
                                  <IconButton variant="text">
                                    <PencilIcon className="h-4 w-4 text-purple-600" />
                                  </IconButton>
                                </button>
                              </Tooltip>
                            </td>
                          )}
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
              <Button
                variant="outlined"
                size="sm"
                color="purple"
                onClick={handlePageChangeMinus}
              >
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