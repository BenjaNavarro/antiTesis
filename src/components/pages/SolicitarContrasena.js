import React, { useEffect, useState } from 'react';
import Header from './../Header';
import Auth from "./../../Utils/Auth";
import ValidateEmail from '../../Utils/EmailValidator';
import { FaExclamation } from 'react-icons/fa';
import Swal from 'sweetalert2';

export default function SolicitarContrasena(props) {

    const [Correo,setCorreo] = useState("");
    const [InvalidEmail,setInvalidEmail] = useState(false);

    useEffect(()=>{
        console.log({props});
    },[]);

    async function RecuperarContrasena(){
        const url = process.env.REACT_APP_API_HOST+"/api/pacients/"+Correo+"/recuperarContrasena";
        let status;
        await fetch(url,{
            method:"GET",
            headers:{
                'Content-Type': 'application/json',
                'Authorization': Auth.getToken()
            },
        }).then((res)=>{
            status = res.status;
            if(res.status === 200){
                Swal.fire({
                    title:'Correo Enviado!',
                    text:'¡Revise su bandeja de correos para cambiar la contraseña!',
                    icon:'success',
                    confirmButtonText:'Ok',
                }).then(()=>{
                    window.location.href = "/login";
                });
            }else{
                Swal.fire({
                    title:'Ocurrió un error!',
                    text:'¡No se pudo enviar el correo!\nContacte con el administrador',
                    icon:'error',
                    confirmButtonText:'Ok',
                });
            }
        }).catch((error)=>{console.error({error})})
    }

    return (
        <div className='min-h-screen h-full w-full flex flex-col justify-center bg-gray-900'>
            <Header selected=""/>
            <div className='flex flex-col self-center p-8 absolute w-[300px] sm:w-[90%] md:w-[90%] lg:w-[85%] xl:w-[75%] top-[25%] rounded-xl border-slate-300 border
            shadow-2xl shadow-slate-600 bg-gray-900'>
                <label className='text-left font-bold text-slate-300 text-xl'>
                    Solicitar Contraseña
                </label>
                <div className='flex flex-col w-full lg:w-3/4 justify-center self-center mt-8'>
                    <label htmlFor='correo' className='text-left font-bold text-slate-300'>
                        Ingrese su correo electrónico para recuperar su contraseña
                    </label>
                    <input
                    className={'bg-gray-900 focus:bg-slate-800 text-slate-300 focus:outline-none rounded-xl border focus:border-slate-200 w-full p-2 self-center text-center '
                    +(InvalidEmail?" border-red-500":" border-slate-300")}
                    id='correo' type='text' value={Correo}
                    placeholder='correo@correo.com' onChange={(e)=>{setCorreo(e.target.value)}}
                    onBlur={(e)=>{
                        if(!ValidateEmail(e.target.value)){
                            setInvalidEmail(true);
                        }else setInvalidEmail(false);
                    }}/>
                    {
                        !InvalidEmail ? null :
                        <label className='text-red-500 w-full text-center flex justify-center mt-4'>
                            <FaExclamation className='text-xl'/> ¡El correo debe tener un formato adecuado!
                        </label>
                    }
                </div>
                <button disabled={InvalidEmail || !ValidateEmail(Correo) || !Correo} 
                title={InvalidEmail || !ValidateEmail(Correo) || !Correo ? "Debe ingresar un correo válido!":"Recuperar contraseña"}
                onClick={()=>{
                    Swal.fire({
                        title:'',
                        text:'¿Está seguro de solicitar el cambio de la contraseña?',
                        icon:'question',
                        confirmButtonText:'Sí',
                        showCancelButton:true,
                        cancelButtonText:'No'
                      }).then((res)=>{
                        if(res.isConfirmed){
                          RecuperarContrasena();
                        }
                      });
                }}
                className='bg-gray-900 hover:bg-slate-800 text-slate-300 rounded-xl border border-slate-300 hover:border-slate-200 w-40 lg:w-1/4 xl:w-1/5 p-2 self-center text-center mt-4 disabled:border-slate-300 disabled:bg-gray-900 disabled:cursor-not-allowed'>
                    Recuperar Contraseña
                </button>
            </div>
        </div>
    )
}