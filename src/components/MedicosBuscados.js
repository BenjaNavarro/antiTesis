import React, { Fragment, useState } from "react";
import { getMedicosPorNombreApellido} from "./Services/Medicos"
import NoEncontrado from "./NoEncontrado";

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







const MedicosBuscados = (props) => {

    /*
    const [medico,setMedico] = useState({
        id:'',
        nombre:'',
        edad:'',
        especialidad:''
    });
*/
    const medicos = getMedicosPorNombreApellido(props.nombre);

    console.log("nombre desde buscados: "+props.nombre);
    console.log(medicos);


    return(
        <div>
            {   
              //  props.nombre !== ''? setMedico(getMedicosPorNombre(props.nombre)) : <Medicos/>
            medicos.length === 0 ? <NoEncontrado/> : 
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

/*
            
                <div>
                    <h1>Nombre: {}</h1>  
                    <p>Especialidad: {}</p>
                 </div> 
                doctores.map(doctor => {
                    doctor.nombre.includes(props.nombre)===true? 
                    <div>
                        <h1 key={doctor.id}>Nombre: {doctor.nombre}</h1>  
                        <p key={doctor.id}>Especialidad: {doctor.especialidad}</p>
                    </div> 
                    : 
                    <h1>No se encontro al medico</h1>
                    
                        
                        
                      
                    
                   
                   
                  
                    console.log("Nombre desde medicos buscados: "+props.nombre);
                    console.log("doctor.nombre: "+doctor.nombre+" props.nombre: "+props.nombre);
                    if(doctor.nombre.includes(props.nombre)){
                        console.log("Nombre del doctor desde el if: "+doctor.nombre);
                        <div>
                            <h1 key={doctor.id}>Nombre: {doctor.nombre}</h1>
                            <p key={doctor.id}>Edad: {doctor.edad}</p>
                            <p key={doctor.id}>Especialidad: {doctor.especialidad}</p>
                        </div>
                    }
                })*/
        
    )
}

export default MedicosBuscados;