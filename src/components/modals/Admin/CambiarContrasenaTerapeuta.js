import React, { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash, FaExclamation  } from 'react-icons/fa';
import Swal from 'sweetalert2';

const CambiarContrasenaTerapeuta = (props) => {

    const [Password,setPassword] = useState("");
    const [PasswordConfirmation,setPasswordConfirmation] = useState("");
    const [checkPass,setCheckPass] = useState(false);
    const [checkPassConfirmation,setCheckPassConfirmation] = useState(false);
    const [ValidPass,setValidPass] = useState(true);
    const [ValidationMessage,setValidationMessage] = useState("");

    useEffect(()=>{
        if(!Password || Password.length < 7){
            setValidPass(false);
            setValidationMessage(!Password?"Debe escribir una contraseña!":"La contraseña debe contener al menos 7 caracteres!");
        }else if(Password != PasswordConfirmation){
            setValidPass(false);
            setValidationMessage("Ámbos campos deben ser iguales!");
        }else{
            setValidPass(true);
        }
    },[Password,PasswordConfirmation]);

    const ComeBack = () => {
        props.setChangePassword(false);
        props.setCurrentTerapist(null);
    }

    return (
        <div className='flex flex-col w-full justify-center'>
            <div className='flex justify-start mb-4 w-full border-slate-300 border shadow-lg shadow-slate-600 rounded-xl'>
                <button className='w-40 h-10 text-center hover:shadow-slate-600 shadow rounded m-8 border border-slate-300 hover:bg-slate-800 focus:outline-slate-100' 
                onClick={()=>ComeBack()}>Cerrar</button>
            </div>
            <div className='flex flex-col w-full'>
                <label className='text-slate-100 text-left'>
                    Contraseña
                </label>
                <input className='bg-gray-900 focus:bg-slate-800 text-slate-300 focus:outline-none
                rounded-xl border border-slate-300 focus:border-slate-200 w-full p-2 self-center text-center'
                value={Password} type={checkPass?'text':'password'} onChange={(e)=>{setPassword(e.target.value)}} 
                placeholder={checkPass?'contraseña':'********'}
                name="Password"/>
                <div className='relative left-[97%] bottom-8 flex items-center'>
                    <button className='text-slate-100 text-xl self-center focus:outline-slate-100' title='Visualizar Contraseña'
                    onClick={()=>{setCheckPass(!checkPass)}}>
                    {!checkPass?<FaEye/>:<FaEyeSlash/>}
                    </button>
                </div>
            </div>
            <div className='flex flex-col w-full'>
                <label className='text-slate-100 text-left'>
                    Confirmar Contraseña
                </label>
                <input className='bg-gray-900 focus:bg-slate-800 text-slate-300 focus:outline-none
                rounded-xl border border-slate-300 focus:border-slate-200 w-full p-2 self-center text-center'
                value={PasswordConfirmation} type={checkPassConfirmation?'text':'password'} onChange={(e)=>{setPasswordConfirmation(e.target.value)}} 
                placeholder={checkPassConfirmation?'contraseña':'********'}
                name="PasswordConfirmation"/>
                <div className='relative left-[97%] bottom-8 flex items-center'>
                    <button className='text-slate-100 text-xl self-center focus:outline-slate-100' title='Visualizar Contraseña'
                    onClick={()=>{setCheckPassConfirmation(!checkPassConfirmation)}}>
                    {!checkPassConfirmation?<FaEye/>:<FaEyeSlash/>}
                    </button>
                </div>
            </div>
            <button className='w-full self-center h-10 text-center hover:shadow-slate-600 shadow rounded m-8 border border-slate-300 hover:bg-slate-800 focus:outline-slate-100
            disabled:cursor-not-allowed disabled:shadow-none disabled:bg-inherit'
            onClick={()=>{
                Swal.fire({
                    title:'',
                    text:'¿Está seguro que desea cambiar la contraseña al terapeuta '+props.CurrentTerapist.name+' '+props.CurrentTerapist.lastName+'?',
                    icon:'question',
                    showCancelButton:true,
                }).then(res=>{
                    if(res.isConfirmed){
                        props.ChangePasswordTerapist(Password,PasswordConfirmation);
                    }
                });
            }}
            disabled={!ValidPass}>
                Continuar
            </button>
            {
                ValidPass? null :
                    <label className='w-full text-red-500 font-bold text-center self-center flex justify-center'>
                        <FaExclamation className='text-xl self-center'/> {ValidationMessage} 
                    </label>
            }
        </div>
    )
}

export default CambiarContrasenaTerapeuta;