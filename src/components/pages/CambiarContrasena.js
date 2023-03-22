import React, { useEffect, useState } from 'react'
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
    },[])

    return (
        <div className='min-h-screen h-full w-full flex flex-col justify-center bg-gray-900'>
            <Header selected=""/>
            <div className='flex flex-col self-center p-8 absolute w-[300px] sm:w-[90%] md:w-[90%] lg:w-[85%] xl:w-[75%] top-[25%] rounded-xl border-slate-300 border
            shadow-2xl shadow-slate-600 bg-gray-900'>
                <label className='text-left font-bold text-slate-300 text-xl'>
                    Cambiar Contraseña
                </label>
                <div className='flex flex-col w-full lg:w-3/4 justify-center self-center mt-8'>
                    <label htmlFor='correo' className='text-left font-bold text-slate-300'>
                        Ingrese una contraseña
                    </label>
                    <input className={'bg-gray-900 focus:bg-slate-800 text-slate-300 focus:outline-none rounded-xl border focus:border-slate-200 w-full p-2 self-center text-center '
                    +(InvalidPassword?" border-red-500":" border-slate-300")}/>
                </div>
                <div className='flex flex-col w-full lg:w-3/4 justify-center self-center mt-2'>

                </div>
            </div>
            CambiarContrasena
        </div>
    )
}