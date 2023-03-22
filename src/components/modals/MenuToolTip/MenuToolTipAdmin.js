import { Popover } from "@headlessui/react";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { FaDoorOpen, FaDoorClosed } from 'react-icons/fa';
import Swal from "sweetalert2";



const MenuToolTipAdmin = (props) => {

    const [toggleDoor, setToggleDoor] = useState(false);


    return(
        <Popover className='relative'>
            <Popover.Button>
                <GiHamburgerMenu className='text-slate-100 cursor-pointer text-center'/>
            </Popover.Button>
            <Popover.Panel className='absolute right-[40%] z-10'>
                <div className='flex flex-col bg-gray-900 border border-slate-100 rounded-lg p-2'>
                {/* <Link to='/calls'>
                    <label className='text-slate-100 cursor-pointer'>Llamadas</label>
                </Link>     */}
                <Link to='/pacients'>
                    <label className={'text-slate-100 cursor-pointer hover:border-b-[0.5px] border-slate-100'+(props.selected ==="pacients"?" border-b border-slate-100 font-bold":null)}>Pacientes</label>
                </Link>
                <Link to='/terapists'>
                    <label className={'text-slate-100 cursor-pointer hover:border-b-[0.5px] border-slate-100'+(props.selected ==="terapists"?" border-b border-slate-100 font-bold":null)}>Terapeutas</label>
                </Link>
                <Link to='/perfil'>
                    <label className={'text-slate-100 cursor-pointer hover:border-b-[0.5px] border-slate-100'+(props.selected ==="perfil"?" border-b border-slate-100 font-bold":null)}>Perfil</label>
                </Link>
                <button onMouseEnter={()=>{setToggleDoor(!toggleDoor)}} 
                onMouseLeave={()=>{setToggleDoor(!toggleDoor)}}
                className='text-slate-100 cursor-pointer flex hover:border-b-[0.5px] border-slate-100'
                onClick={()=>{
                    Swal.fire({
                        title:'',
                        text:'¿Desea Cerrar Sesión?',
                        icon:'question',
                        confirmButtonText:'Sí',
                        showCancelButton:true,
                        cancelButtonText:'No'
                    }).then((res)=>{
                        if(res.isConfirmed){
                          props.logout();
                        }
                      });
                }}>
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

export default MenuToolTipAdmin