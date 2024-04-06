import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
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
  Tooltip,
} from "@material-tailwind/react";
 
const TABS = [
  {
    label: "Todos",
    value: "all",
  },
  {
    label: "Aprendices",
    value: "Aprendiz",
  },
  {
    label: "Vigilantes",
    value: "Vigilante",
  },
];
 
const TABLE_HEAD = ["Nombre", "Roll", "Estado", ""];
 
const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    email: "john@creative-tim.com",
    job: "Aprendiz",
    org: "Organization",
    online: true,
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    job: "Aprendiz",
    org: "Developer",
    online: false,
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    job: "Vigilante",
    org: "Projects",
    online: false,
    date: "19/09/17",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    job: "Aprendiz",
    org: "Developer",
    online: true,
    date: "24/12/08",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    job: "Vigilante",
    org: "Executive",
    online: false,
    date: "04/10/21",
  },
];
export function UserList() {
const [selectedTab, setSelectedTab] = useState('all');
const [filteredRows, setFilteredRows] = useState([]);
const [searchTerm, setSearchTerm] = useState('');

const handleTabChange = (event, newValue) => {
    console.log('Nuevo valor de tab:', newValue);
    setSelectedTab(newValue);  
    setFilteredRows([]);
  };

const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };



useEffect(() => {
    // Filtrar las filas según la pestaña seleccionada
    const newFilteredRows = TABLE_ROWS.filter((row) => {   
        if (selectedTab === 'all' || row.job === selectedTab) {
          // Filtrar por nombre si no se selecciona una pestaña específica
          return row.name.toLowerCase().includes(searchTerm.toLowerCase());
        } else {
          return false;
        }
      });
    // Actualizar el estado de las filas filtradas
    setFilteredRows(newFilteredRows);
  }, [selectedTab, searchTerm]);
  return (
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
        <table className="mt-4 w-full min-w-max table-auto text-left">
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
              {filteredRows.map(({ img, name, email, job, online }, index) => {
                const isLast = index === filteredRows.length  - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50"; 
                return (
                  <tr key={job}>
                    <td className={classes}>
                      <div className="flex items-center gap-2">
                        <Avatar src={img} alt={name} size="sm" />
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
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {job}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >                         
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={online ? "online" : "offline"}
                          color={online ? "green" : "blue-gray"}
                        />
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
              },
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal text-purple-600">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm" color="purple">
            Previous
          </Button>
          <Button variant="outlined" size="sm" color="purple">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}