import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    Chip,
  } from "@material-tailwind/react";
  
  const Aprendiz = [
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
      dateFinish: "23/04/2025",
      VMarca: "Chevrolet",
      VModelo: "2021",
      VPlaca: "ABC123",
      VColor: "Rojo",
      VPhoto: "#",
      VSoat: "#",
      VTarjeta: "#",
      VObservaciones: "ninguna",
    },
  ];


  
  export function AprendizCardInfo() {
    const [documentSender, setDocumentSender] = useState("");
    const route = `/aprendiz-info-full?document=${documentSender}`;
    function handleDocument(){
        setDocumentSender(Aprendiz[0].document);
      }
    
    if (documentSender) {
        return <Navigate to={route} />;
    }
    return (
      <>
        {Aprendiz.map((aprendiz, index) => (
          <Card key={index} className="w-96">
            <CardHeader floated={false} className="h-100">
              <img src={aprendiz.photo} alt="profile-picture" />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                {aprendiz.name}
              </Typography>
              <Typography color="blue-gray" variant="h5" className="font-medium" textGradient>
                {aprendiz.roll}
              </Typography>
              <Typography color="blue-gray" variant="h5" className="font-medium" textGradient>
                Fecha Finalizacion: {aprendiz.dateFinish}
              </Typography>
              <Typography color="blue-gray" variant="h5" className="font-medium" textGradient>
                Documento: {aprendiz.document}
              </Typography>
              <Chip
                variant="ghost"
                size="sm"
                value={aprendiz.status ? "Aceptado" : "Pendiente"}
                color={aprendiz.status ? "green" : "orange"}
             />
              <Typography color="blue-gray" variant="h5" className="font-medium mt-4" textGradient>
                Vehiculo Marca: {aprendiz.VMarca}
              </Typography>
              <Typography color="blue-gray" variant="h5" className="font-medium " textGradient>
                Vehiculo Modelo: {aprendiz.VModelo}
              </Typography>
              <Typography color="blue-gray" variant="h5" className="font-medium " textGradient>
                Vehiculo Color: {aprendiz.VColor}
              </Typography>

                <button onClick={handleDocument}>
                <Typography color="blue-gray" variant="h6" className="font-medium mt-6 text-purple-600" textGradient>
                Ver todos los datos
                </Typography>

                </button>
             
            </CardBody>         
          </Card>
        ))}
      </>
    );
  }
  