import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaDoorOpen, FaDoorClosed } from 'react-icons/fa';
import MenuToolTipPacient from './modals/MenuToolTipPacient';


const PacientHeader = () => {
    const user = JSON.parse(localStorage.getItem('userLoged'));
    // const user = new Object();
    // user.name="Felipe";
    // user.lastName="Aravena";
    // user.RUT="19728077-8";
    // user.email="felipe123@gmail.com";
    // user.phone="945648413";
    // user.birthDate="30-11-1997";
  
    const [toggleDoor, setToggleDoor] = useState(false);

    useEffect(()=>{
      console.log('Pacient Header');
    },[]);

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
        <div className='hidden md:hidden w-1/2 lg:flex justify-end mr-40 items-center space-x-10'>
          <Link to={'/pacient_calls'}>
            <label className='text-slate-100 cursor-pointer'>
              Mis Llamadas
            </label>
          </Link>
          <Link to={'/pecient_profile'}>
            <label className='text-slate-100 cursor-pointer'>
              {user.name.toUpperCase()+' '+user.lastName.toUpperCase()}
            </label>
          </Link>
          <button onMouseEnter={()=>{setToggleDoor(!toggleDoor)}} 
            onMouseLeave={()=>{setToggleDoor(!toggleDoor)}}
            className='text-slate-100 cursor-pointer flex'>
              Cerrar Sesión
              {
              toggleDoor?
                <FaDoorOpen className='self-center text-2xl ml-2'/>
                :
                <FaDoorClosed className='self-center text-2xl ml-2'/>
              }
          </button>
     { /*  <Button>
            <label className='text-slate-100 cursor-pointer'>
              Cerrar Sesión
            </label>
          </Button> */} 
        </div>
         <div className='flex items-center sm:flex sm:items-end md:flex xl:hidden lg:hidden md:items-end sm:self-center md:self-center'>
          <MenuToolTipPacient/>
        </div> 
      </div>
    )
}

export default PacientHeader