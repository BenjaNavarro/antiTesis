import React, { useEffect, useState } from 'react';
import Auth from '../../Utils/Auth';
import { FaEye, FaEyeSlash, FaExclamation } from 'react-icons/fa';
import Swal from 'sweetalert2';
import Header from '../Header';

export default function CambiarContrasena(props) {

    const [Password,setPassword] = useState("");
    const [PasswordConfirmation,setPasswordConfirmation] = useState("");
    const [CheckPassword,setCheckPassword] = useState(false);
    const [CheckPasswordConfirmation,setCheckPasswordConfirmation] = useState(false);
    const [InvalidPassword,setInvalidPassword] = useState(false);
    const [InvalidPasswordConfirmation,setInvalidPasswordConfirmation] = useState(false);

    useEffect(()=>{
        console.log({props});
    },[]);

    async function SendNewPassword(){
        const url = process.env.REACT_APP_API_HOST+"/api/pacients/";
        const body = {
            password:Password,
            password_confirmation:PasswordConfirmation
        };
        await fetch(url,{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
                'Authorization': Auth.getToken()
            },
            body:JSON.stringify(body)
        }).then((res)=>{
            console.log({res});
        }).catch((error)=>{console.error({error})})
    }

    return (
        <div className='min-h-screen h-full w-full flex flex-col justify-center bg-gray-900'>
            <Header selected=""/>
            <div className='flex flex-col self-center p-8 absolute w-[300px] sm:w-[90%] md:w-[90%] lg:w-[85%] xl:w-[75%] top-[25%] rounded-xl border-slate-300 border
            shadow-2xl shadow-slate-600 bg-gray-900'>
                <label className='text-left font-bold text-slate-300 text-xl'>
                    Cambiar Contraseña
                </label>
                <div className='flex flex-col w-full lg:w-3/4 justify-center self-center mt-8'>
                    <label htmlFor='password' className='text-left font-bold text-slate-300'>
                        Ingrese una contraseña
                    </label>
                    <input className={'bg-gray-900 focus:bg-slate-800 text-slate-300 focus:outline-none rounded-xl border focus:border-slate-200 w-full p-2 self-center text-center '
                    +(InvalidPassword?" border-red-500":" border-slate-300")} value={Password} onChange={(e)=>{setPassword(e.target.value)}}
                    type={CheckPassword?"text":"password"} placeholder={CheckPassword?"Contraseña":"**********"} id="password" 
                    onBlur={(e)=>{
                        if(e.target.value.length < 7){
                            setInvalidPassword(true);
                        }else{
                            setInvalidPassword(false);
                        }
                    }}/>
                    <div className='relative left-[97%] bottom-8 flex items-center'>
                        <button className='text-slate-100 text-xl self-center focus:outline-slate-100' title='Visualizar Contraseña' onClick={()=>{setCheckPassword(!CheckPassword)}}>
                            {!CheckPassword?<FaEye/>:<FaEyeSlash/>}
                        </button>
                    </div>
                    {
                        !InvalidPassword ? null :
                        <label className='text-red-500 w-full text-center flex justify-center mt-4'>
                            <FaExclamation className='text-xl'/> La contraseña debe tener un largo de mínimo 7!
                        </label>
                    }
                </div>
                <div className='flex flex-col w-full lg:w-3/4 justify-center self-center mt-2'>
                    <label htmlFor='passwordConfirmation' className='text-left font-bold text-slate-300'>
                        Confirme la contraseña
                    </label>
                    <input className={'bg-gray-900 focus:bg-slate-800 text-slate-300 focus:outline-none rounded-xl border focus:border-slate-200 w-full p-2 self-center text-center '
                    +(InvalidPasswordConfirmation?" border-red-500":" border-slate-300")} value={PasswordConfirmation} onChange={(e)=>{setPasswordConfirmation(e.target.value)}}
                    type={CheckPasswordConfirmation?"text":"password"} placeholder={CheckPasswordConfirmation?"Contraseña":"**********"} id="passwordConfirmation" 
                    onBlur={(e)=>{
                        if(e.target.value !== Password){
                            setInvalidPasswordConfirmation(true);
                        }else{
                            setInvalidPasswordConfirmation(false);
                        }
                    }}/>
                    <div className='relative left-[97%] bottom-8 flex items-center'>
                        <button className='text-slate-100 text-xl self-center focus:outline-slate-100' title='Visualizar Contraseña' onClick={()=>{setCheckPasswordConfirmation(!CheckPasswordConfirmation)}}>
                            {!CheckPasswordConfirmation?<FaEye/>:<FaEyeSlash/>}
                        </button>
                    </div>
                    {
                        !InvalidPasswordConfirmation ? null :
                        <label className='text-red-500 w-full text-center flex justify-center mt-4'>
                            <FaExclamation className='text-xl'/> Ambas contraseñas deben ser iguales!
                        </label>
                    }
                </div>
                <div className='flex flex-row w-full lg:w-3/4 justify-between self-center mt-2'>
                    <button className='w-full self-center h-10 text-center hover:shadow-slate-600 shadow rounded m-8 border border-slate-300 hover:bg-slate-800 focus:outline-slate-100
                    disabled:cursor-not-allowed disabled:shadow-none disabled:bg-inherit text-slate-300 ' disabled={!Password || !PasswordConfirmation || Password.length < 7 || PasswordConfirmation !== Password}
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
                                SendNewPassword();
                            //   RecuperarContrasena();
                            }
                        });
                    }}>
                        Cambiar Contraseña
                    </button>
                </div>
            </div>
        </div>
    )
}