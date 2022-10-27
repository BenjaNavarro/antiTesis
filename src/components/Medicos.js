import React, { Fragment } from "react";
import { getMedicos } from "./Services/Medicos";

/*
const doctores = [
    {
      id:1,
      nombre:'Leonardo Vasquez',
      edad:61,
      especialidad:'Niños'
    },
    {
      id:2,
      nombre:'Luis Aracena',
      edad:42,
      especialidad:'Adultos'
    },
    {
      id:3,
      nombre:'Oscar Lopez',
      edad:46,
      especialidad:'Adolecentes'
    }
]
*/
const Medicos = () => {

    const medicos = getMedicos();

    return(
        <div>
            {
                medicos.map(doctor => 
                    <Fragment>
                        <h1 key={doctor.id}>Nombre: {doctor.nombre}</h1>
                        <p key={doctor.id}>Apellido: {doctor.apellido}</p>
                        <p key={doctor.id}>Edad: {doctor.edad}</p>
                        <p key={doctor.id}>Especialidad: {doctor.especialidad}</p>
                    </Fragment>
                )
            }
        </div>
    )
}

export default Medicos;