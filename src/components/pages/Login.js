import React, { useState } from 'react'
import Header from '../Header'

function Login() {
  const [rut,setRut] = useState('');
  const [pass,setPass] = useState('');
  const [passCheck,setPassCheck] = useState(false);

  return (
    <div className='min-h-screen h-full w-full flex flex-col justify-center bg-gray-900'>
      <Header/>
      <div className='flex flex-col self-center p-8 absolute w-[50%] h-96 top-[25%] rounded-xl border-slate-300 border
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
          value={rut}
          placeholder='Rut'
          onChange={(e)=>{setRut(e.target.value)}}/>
        </div>
        <div className='flex flex-col w-1/2 justify-center self-center mt-4'>
          <label htmlFor='contrasena' className='text-left font-bold text-slate-300'>
            Contraseña
          </label>
          <input
          className='bg-gray-900 focus:bg-slate-800 text-slate-300 focus:outline-none
          rounded-xl border border-slate-300 focus:border-slate-200 w-full p-2 self-center text-center'
          id='contrasena'
          type={passCheck?'text':'password'}
          value={pass}
          placeholder={passCheck?'Escriba su contraseña...':'********'}
          onChange={(e)=>{setPass(e.target.value)}}/>
        </div>
        <div className='flex flex-col w-full justify-end self-center my-12'>
          <button className='bg-gray-900 hover:bg-slate-800 text-slate-300
          rounded-xl border border-slate-300 hover:border-slate-200 w-1/5 p-2 self-end text-center'>
            Iniciar Sesión
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login