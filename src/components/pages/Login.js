import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IoIosAlert } from 'react-icons/io';
import Header from '../Header';
import formatoRut from '../../Utils/FormatoRut';
import Rut from '../../Utils/Rut';
import limpiaRut from '../../Utils/LimpiaRut';

export default function Login(props) {
  const [rut,setRut] = useState('');
  const [invalidRut,setInvalidRut] = useState(false);
  const [pass,setPass] = useState('');
  const [passCheck,setPassCheck] = useState(false);

  const login = () => {

  }

  return (
    <div className='min-h-screen h-full w-full flex flex-col justify-center bg-gray-900'>
      <Header/>
      <div className='flex flex-col self-center p-8 absolute w-[300px] sm:w-[90%] md:w-[90%] lg:w-[85%] xl:w-[75%] h-96 top-[25%] rounded-xl border-slate-300 border
      shadow-2xl shadow-slate-600 bg-gray-900'>
        <label className='text-left font-bold text-slate-300 text-xl'>
          Inicio de Sesión</label>
        <div className='flex flex-col w-1/2 justify-center self-center mt-8'>
          <label htmlFor='rut' className='text-left font-bold text-slate-300'>
            Rut
          </label>
          <input
          className='bg-gray-900 focus:bg-slate-800 text-slate-300 focus:outline-none
          rounded-xl border border-slate-300 focus:border-slate-200 w-full p-2 self-center text-center'
          id='rut'
          type='text'
          // onBlur={()=>{
          //   if(!Rut.validaRut(rut)){
          //     setInvalidRut(true);
          //   }else{
          //     setInvalidRut(false);
          //   }
          // }}
          value={formatoRut(rut)}
          placeholder='Rut'
          onChange={(e)=>{setRut(limpiaRut(e.target.value))}}/>
          {/* {
            invalidRut && (
              <IoIosAlert className='text-red-400 text-2xl absolute right-[23.5%] top-[33%] cursor-pointer bg-white rounded-full' 
              title='Formato de Rut Incorrecto!'/>
            )
          } */}
        </div>
        <div className='flex flex-col w-1/2 justify-center self-center mt-4'>
          <label htmlFor='contrasena' className='text-left font-bold text-slate-300'>
            Contraseña
          </label>
          <label className='w-full'>
            <input
            className='bg-gray-900 focus:bg-slate-800 text-slate-300 focus:outline-none
            rounded-xl border border-slate-100 focus:border-slate-200 w-full p-2 self-center text-center'
            id='contrasena'
            type={passCheck?'text':'password'}
            value={pass}
            placeholder={passCheck?'Escriba su contraseña...':'********'}
            onChange={(e)=>{setPass(e.target.value)}}/>
            <div className='relative bottom-[50%] left-[93%] flex items-center leading-5'>
              <button className='w-10 h-8 text-slate-100 text-xl self-center' title='Visualizar Contraseña'
              onClick={()=>{setPassCheck(!passCheck)}}>
                {!passCheck?<FaEye/>:<FaEyeSlash/>}
              </button>
            </div>
          </label>
        </div>
        <div className='flex flex-col w-full justify-end self-center'>
          <button className='bg-gray-900 hover:bg-slate-800 text-slate-300
          rounded-xl border border-slate-300 hover:border-slate-200 w-40 lg:w-1/4 xl:w-1/5 p-2 self-end text-center'>
            Iniciar Sesión
          </button>
          <div className='flex flex-row'>
            <label className='text-white mr-2'>¿No tiene cuenta?</label>
            <Link to='/register'>
              <label className='text-white font-bold cursor-pointer'>¡Regístrese!</label>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}