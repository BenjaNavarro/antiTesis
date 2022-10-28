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
			<div className='flex flex-col w-full h-full mt-96'>
        <label className='text-slate-100 text-6xl font-bold text-center w-full'>
				  AFASIA
        </label>
        <label className='text-slate-100 text-center text-xl mt-[60%]'>
          A veces unas palabras nos cuestan la vida...
        </label>
        <label className='text-slate-100 text-center text-lg mt-[60%] mb-[40%] px-96'>
          Queremos ayudar a quienes no se pueden expresar
        </label>
			</div>
		</div>
  )
}

export default Home