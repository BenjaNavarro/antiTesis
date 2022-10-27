import React, { useState,Fragment, useDebugValue, useEffect } from 'react'
import Header from '../Header'
import Medicos from '../Medicos'
import MedicosBuscados from '../MedicosBuscados'
import NoEncontrado from '../NoEncontrado'
import { getMedicosPorNombreApellido, getNombreService} from "../Services/Medicos"

function Home(props){


  //console.log(props.nombre+"Desde el home");

  const [nombre,setNombre] = useState('');

  const [medicos,setMedicos] = useState([]);

/*
  const medEncontradosHeader = getMedicosPorNombreApellido(nombre);

  setMedicos(medEncontradosHeader);
*/
  /*
  useEffect(()=> {
    const palabra = getNombreService();
    console.log(palabra+" desde el home");
    const medEncontrados = getMedicosPorNombreApellido(palabra);
    console.log(medEncontrados);
    setMedicos(medEncontrados);
    console.log(medicos);
  })

*/

  const enviarDatos = (e) => {
    e.preventDefault();
    const medEncontrados = getMedicosPorNombreApellido(nombre);
    console.log(medEncontrados);
    setMedicos(medEncontrados);
    console.log(medicos);
  }

  const busqueda = '';


  return (
    <div className='flex flex-col w-full min-h-screen bg-gray-900 text-gray-50'>
      <Header/>
      <form onSubmit={enviarDatos}>
        <div className='flex mt-20 items-center'>
          <input className='text-slate-900 rounded-l' placeholder='Buscar' onChange={(e) => setNombre(e.target.value)}/>
          <button className='items-center w-20 h-6 bg-slate-600 rounded-r' type='submit'>Buscar</button>
        </div>
      </form>
      
			<div className='mt-12'>
        <h1>Doctores</h1>
				<div>
          {
            nombre === '' ? <Medicos/> : <MedicosBuscados nombre={nombre} />
          
          
          /*
            medicos.length === 0 ? <NoEncontrado/> : 
            medicos.map((doctor,index) => 
            <Fragment>
                <h1 key={index}>Nombre: {doctor.nombre}</h1>
                <p key={index}>Apellido: {doctor.apellido}</p>
                <p key={index}>Edad: {doctor.edad}</p>
                <p key={index}>Especialidad: {doctor.especialidad}</p>
            </Fragment>
           //  nombre === '' ? <Medicos/> : <MedicosBuscados nombre={nombre} />
           /*
           medicos.map(doctor => 
            <Fragment>
                <h1 key={doctor.id}>Nombre: {doctor.nombre}</h1>
                <p key={doctor.id}>Apellido: {doctor.apellido}</p>
                <p key={doctor.id}>Edad: {doctor.edad}</p>
                <p key={doctor.id}>Especialidad: {doctor.especialidad}</p>
            </Fragment>
            
            ) 
            */
          }       
			  </div>
		  </div>
    </div>
  )
}

export default Home