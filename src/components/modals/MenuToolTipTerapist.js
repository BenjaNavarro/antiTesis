import { Popover } from "@headlessui/react";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { FaDoorOpen, FaDoorClosed } from 'react-icons/fa';


const MenuToolTipTerapist = () => {

    const [toggleDoor, setToggleDoor] = useState(false);

    return(
        
        <Popover className='relative'>
            <Popover.Button>
                <GiHamburgerMenu className='text-slate-100 cursor-pointer text-center'/>
            </Popover.Button>
            <Popover.Panel className='absolute right-[40%] z-10'>
                <div className='flex flex-col bg-gray-900 border border-slate-100 rounded-lg p-2'>
                    <Link to='/terapist_calls'>
                        <label className='text-slate-100 cursor-pointer'>Mis Llamadas</label>
                    </Link>    
                    <Link to='/pacients'>
                        <label className='text-slate-100 cursor-pointer'>Mis Pacientes</label>
                    </Link>
                    <Link to='/new_call'>
                        <label className='text-slate-100 cursor-pointer'>Nuevo Test</label>
                    </Link>
                    <Link to='/perfil'>
                        <label className='text-slate-100 cursor-pointer'>Perfil</label>
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
                </div>
            </Popover.Panel>
        </Popover>
    )
}

export default MenuToolTipTerapist;