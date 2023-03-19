import React, { useEffect, useState } from 'react';
import formatoRut from './../Utils/FormatoRut';
import limpiaRut from './../Utils/LimpiaRut';
import Rut from './../Utils/Rut';
import { IoIosAlert } from 'react-icons/io';
import { FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import Auth from './../Utils/Auth';
import ValidateEmail from '../Utils/EmailValidator';

const CrearPacienteAdmin = (props) => {

  const [step,setStep] = useState(1);
  const [name,setName] = useState('');
  const [lastName,setLastName] = useState('');
  const [rut,setRut] = useState('');
  const [invalidRut,setInvalidRut] = useState(false);
  const [email,setEmail] = useState('');
  const [invalidMail,setInvalidMail] = useState(false);
  const [phone,setPhone] = useState('');
  const [address,setAddress] = useState('');
  const [password,setPassword] = useState('');
  const [birthDate,setBirthDate] = useState(new Date());
  const [confirmPassword,setConfirmPassword] = useState('');
  const [checkPassword,setCheckPassword] = useState(false);
  const [checkPasswordConfirmation,setCheckPasswordConfirmation] = useState(false);

  useEffect(()=>{

  },[]);

  const steps = () => {
    if(step === 1){
      return step1();
    }else if(step===2){
      return step2();
    }
  }

  const invalidForm = () => {
    return (
      !name || !rut || !lastName || !email || !password || !confirmPassword || !phone || !address || !(password == confirmPassword)
    )
  }

  async function NuevoPaciente(){
    const url = process.env.REACT_APP_API_HOST+'/api/pacients/putPacient';
    const body = {
      name: name,
      lastName:lastName,
      // secondLastName:'Soto',
      RUT:rut,
      address:address,
      email:email,
      phone:phone,
      password:password,
      password_confirmation:confirmPassword
    }

    await fetch(url,{
      method:'PUT',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': Auth.getToken()
      },
      body: JSON.stringify(body)
    }).then((res)=>{
      Auth.updateToken(res.headers.get('x-auth-token'));
      return res.json();
    }).then((res)=>{
      // console.log({res});
      if(res.status === 200){
        Swal.fire({
          title:'Paciente Creado!',
          text:'¡Se creó el paciente con éxito!',
          icon:'success',
          confirmButtonText:'Ok',
          // showCancelButton:true,
          // cancelButtonText:'No'
        })
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      }else{
        Swal.fire({
          title:'Error!',
          text:'¡No se pudo crear el paciente!',
          icon:'error',
          confirmButtonText:'Ok',
          // showCancelButton:true,
          // cancelButtonText:'No'
        })
      }
    }).catch((error)=>{console.error({error})})
  }

  const step1 = () => {
    return(
      <>
        <div className='flex flex-col w-full'>
          <label className='text-slate-100 text-left'>
            Nombre(s)
          </label>
          <input type='text' placeholder='Pedro'
          className='bg-gray-900 focus:bg-slate-800 text-slate-300 focus:outline-none
          rounded-xl border border-slate-300 focus:border-slate-200 w-full p-2 self-center text-center'
          onChange={(e)=>{setName(e.target.value)}} value={name}/>
        </div>
        <div className='flex flex-col w-full'>
          <label className='text-slate-100 text-left'>
            Apellido(s)
          </label>
          <input type='text' placeholder='Pérez'
          className='bg-gray-900 focus:bg-slate-800 text-slate-300 focus:outline-none
          rounded-xl border border-slate-300 focus:border-slate-200 w-full p-2 self-center text-center'
          onChange={(e)=>{setLastName(e.target.value)}} value={lastName}/>
        </div>
        <div className='flex flex-col w-full'>
          <label className='text-slate-100 text-left'>
            RUT
          </label>
          <input type='text' placeholder='11.111.111-1'
          className='bg-gray-900 focus:bg-slate-800 text-slate-300 focus:outline-none
          rounded-xl border border-slate-300 focus:border-slate-200 w-full p-2 self-center text-center'
          onChange={(e)=>{setRut(limpiaRut(e.target.value))}} value={formatoRut(rut)}
          onBlur={()=>{
            if(!Rut.validaRut(rut)){
              setInvalidRut(true);
            }else{
              setInvalidRut(false);
            }
          }}/>
          {
            invalidRut && rut && (
              <label className='text-red-500 text-xs my-1 flex flex-row'>
                ¡Formato de Rut Incorrecto! 
                <IoIosAlert className='text-red-500 text-sm bg-white rounded-full self-center ml-1'/>
              </label>
            )
          }
        </div>
        <div className='flex flex-col w-full'>
          <label className='text-slate-100 text-left'>
            E-Mail
          </label>
          <input className='bg-gray-900 focus:bg-slate-800 text-slate-300 focus:outline-none
          rounded-xl border border-slate-300 focus:border-slate-200 w-full p-2 self-center text-center'
          value={email} type='email' onChange={(e)=>{setEmail(e.target.value)}} placeholder='correo@correo.cl'
          onBlur={()=>{
            if(ValidateEmail(email)===false){
              setInvalidMail(true);
            }else{
              setInvalidMail(false);
            }
          }}/>
          {
            invalidMail && email && (
              <label className='text-red-500 text-xs my-1 flex flex-row'>
                ¡Formato de E-Mail Incorrecto! 
                <IoIosAlert className='text-red-500 text-sm bg-white rounded-full self-center ml-1'/>
              </label>
            )
          }
        </div>
        <div className='flex flex-col w-full'>
          <label className='text-slate-100 text-left'>
            Teléfono
          </label>
          <input className='bg-gray-900 focus:bg-slate-800 text-slate-300 focus:outline-none
          rounded-xl border border-slate-300 focus:border-slate-200 w-full p-2 self-center text-center'
          value={phone} type='tel' onChange={(e)=>{setPhone(e.target.value)}} placeholder='912345678'/>
        </div>
        <button onClick={()=>{if(step<3)setStep(step+1)}}
        className='bg-blue-400 hover:bg-blue-500 mt-6 w-40 rounded hover:scale-110 
        text-center text-gray-900 h-8 self-center'>
          Continuar
        </button>
      </>
    )
  }

  const step2 = () => {
    return(
      <>
        <label className='text-slate-100 my-4 text-left flex' >
          <FaArrowLeft className='hover:scale-125 cursor-pointer self-center mr-2' 
          onClick={()=>{if(step > 1)setStep(step-1)}}/>Volver
        </label>
        <div className='flex flex-col w-full'>
          <label className='text-slate-100 text-left'>
            Fecha de Nacimiento
          </label>
          <input type={'date'} className='bg-gray-900 focus:bg-slate-800 text-slate-300 focus:outline-none
          rounded-xl border border-slate-300 focus:border-slate-200 w-full p-2 self-center text-center'
          value={birthDate} onChange={(e)=>{setBirthDate(e.target.value)}} placeholder='01-01-1900'/>
        </div>
        <div className='flex flex-col w-full'>
          <label className='text-slate-100 text-left'>
            Dirección
          </label>
          <input className='bg-gray-900 focus:bg-slate-800 text-slate-300 focus:outline-none
          rounded-xl border border-slate-300 focus:border-slate-200 w-full p-2 self-center text-center'
          value={address} type='text' onChange={(e)=>{setAddress(e.target.value)}} placeholder='Nombre #123'/>
        </div>
        <div className='flex flex-col w-full'>
          <label className='text-slate-100 text-left'>
            Contraseña
          </label>
          <input className='bg-gray-900 focus:bg-slate-800 text-slate-300 focus:outline-none
          rounded-xl border border-slate-300 focus:border-slate-200 w-full p-2 self-center text-center'
          value={password} type={checkPassword?'text':'password'} onChange={(e)=>{setPassword(e.target.value)}} 
          placeholder={checkPassword?'contraseña':'********'}/>
          <div className='relative left-[97%] bottom-8 flex items-center'>
            <button className='text-slate-100 text-xl self-center' title='Visualizar Contraseña'
            onClick={()=>{setCheckPassword(!checkPassword)}}>
              {!checkPassword?<FaEye/>:<FaEyeSlash/>}
            </button>
          </div>
        </div>
        <div className='flex flex-col w-full -my-4'>
          <label className='text-slate-100 text-left'>
            Confirmar Contraseña
          </label>
          <input className='bg-gray-900 focus:bg-slate-800 text-slate-300 focus:outline-none
          rounded-xl border border-slate-300 focus:border-slate-200 w-full p-2 self-center text-center'
          value={confirmPassword} type={checkPasswordConfirmation?'text':'password'} onChange={(e)=>{setConfirmPassword(e.target.value)}} 
          placeholder={checkPasswordConfirmation?'confirmar contraseña':'********'}/>
          <div className='relative left-[97%] bottom-8 flex items-center'>
            <button className='text-slate-100 text-xl self-center' title='Visualizar Contraseña'
            onClick={()=>{setCheckPasswordConfirmation(!checkPasswordConfirmation)}}>
              {!checkPasswordConfirmation?<FaEye/>:<FaEyeSlash/>}
            </button>
          </div>
          {
            password != confirmPassword ? 
              <label className='text-red-500 text-xs my-2 flex flex-row self-center'>
                ¡Ambas contraseñas deben ser iguales! 
                <IoIosAlert className='text-red-500 text-sm bg-white rounded-full self-center ml-1'/>
              </label>
            :null
          }
          <button 
          onClick={()=>{
            // console.log({captchaRef});
            Swal.fire({
              title:'',
              text:'¿Está Seguro?',
              icon:'question',
              confirmButtonText:'Sí',
              showCancelButton:true,
              cancelButtonText:'No'
            }).then((res)=>{
              if(res.isConfirmed){
                // captchaRef.current.execute();
                NuevoPaciente();
              }
            });
          }} disabled={invalidForm()}
          className='bg-blue-400 hover:bg-blue-500 mt-6 w-40 rounded hover:scale-110 disabled:hover:scale-100 disabled:cursor-not-allowed
          text-center text-gray-900 h-8 self-center disabled:bg-gray-300 disabled:text-black'>
            Continuar
          </button>
        </div>
      </>
    )
  }

  return (
    <div className='flex flex-col w-full justify-center'>
      <div className='flex justify-start mb-4 w-full border-slate-300 border
      shadow-lg shadow-slate-600 rounded-xl'>
        <button onClick={()=>{props.setCreatePacient(false)}} 
        className='w-40 h-10 text-center hover:shadow-slate-600 shadow rounded m-8 border border-slate-300 hover:bg-slate-800'>
          Volver
        </button>
      </div>
      {steps()}
    </div>
  )
}

export default CrearPacienteAdmin