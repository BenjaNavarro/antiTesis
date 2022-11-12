import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'
import MenuToolTip from './modals/MenuToolTip';
import Home from './pages/Home'
import { setNombreService, getNombreService, getMedicosPorNombreApellido } from './Services/Medicos';


const Header = (props) => {

  const [nombre,setNombre] = useState('');

  const enviarDatos = (event) => {
    event.preventDefault();
    setNombreService(nombre);
  //  <Home nombre={nombre} />
    console.log(nombre);
  }

  /*
  const enviarDatosHeader = (event) => {
    event.preventDefault();
    const nombreHeader = getNombreService();
    console.log("Nombre header: "+nombreHeader);
    const medEncontradosHeader = getMedicosPorNombreApellido(nombreHeader);
    console.log("Medicos encontrados header: "+medEncontradosHeader);
    setMedicos(medEncontradosHeader);
    console.log("Medicos encontrados header setMedicos: "+medicos);

  }*/

  return (
    <div className='backdrop-blur-md w-full h-12 px-16 flex flex-row justify-between fixed top-0 left-0
    hover:shadow hover:shadow-slate-600'>
      <div className='w-32 md:w-1/4 self-center'>
        <Link to={'/'}>
          <label className='text-slate-100 text-left font-bold italic text-sm md:text-lg xl:text-xl cursor-pointer'>        
            Proyecto de Título
          </label>
        </Link>
      </div>
      <div className='hidden md:hidden w-1/2 lg:flex justify-end mr-40 items-center'>        
        {/* <Link to={'/'}>
          <label className='text-slate-100 cursor-pointer'>
            Home
          </label>
        </Link> */}
        <Link to={'/login'}>
          <label className='text-slate-100 cursor-pointer mr-96'>
            Login
          </label>
        </Link>
        <Link to={'/call'}>
          <label className='text-slate-100 cursor-pointer'>
            Videollamada
          </label>
        </Link>
      </div>
      <form onSubmit={enviarDatos}>
        <div className='flex items-center sm:flex sm:items-end md:flex md:items-end sm:self-center md:seld-center p-3'>
          <input className='text-slate-900 rounded-l' placeholder='Buscar' onChange={(e) => setNombre(e.target.value)}/>
          <button className='w-6 h-6 bg-slate-600 rounded-r p-1' type='submit'><FaSearch/></button>
        </div>
      </form>
      <div className='flex items-center  sm:flex sm:items-end md:flex xl:hidden lg:hidden md:items-end sm:self-center md:self-center'>
        <MenuToolTip/>
      </div>
    </div>
  )
}

export default Header;