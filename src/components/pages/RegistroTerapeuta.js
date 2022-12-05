import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import { FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import formatoRut from '../../Utils/FormatoRut';
import Rut from '../../Utils/Rut';
import limpiaRut from '../../Utils/LimpiaRut';
import { IoIosAlert } from 'react-icons/io';
import ValidateEmail from '../../Utils/EmailValidator';
import ReCAPTCHA from "react-google-recaptcha";

const RegistroTerapeuta = () => {
  const [step,setStep] = useState(1);
  const [name,setName] = useState('');
  const [validName,setValidName] = useState(true);
  const [lastName,setLastName] = useState('');
  const [rut,setRut] = useState('');
  const [invalidRut,setInvalidRut] = useState(false);
  const [email,setEmail] = useState('');
  const [invalidMail,setInvalidMail] = useState(false);
  const [phone,setPhone] = useState('');
  const [address,setAddress] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  // const [picture,setPicture] = useState(null);
  const [checkPassword,setCheckPassword] = useState(false);
  const [checkPasswordConfirmation,setCheckPasswordConfirmation] = useState(false);
  const [token, setToken] = useState(null);

  const captchaRef = useRef();

  useEffect(()=>{
    // console.log('Registro Terapeuta');
  },[]);

  const steps = () => {
    if(step === 1){
      return step1();
    }else if(step===2){
      return step2();
    }
  }

  async function crearTerapeuta(){
    const url = process.env.REACT_APP_API_HOST+'/api/terapists/new';
    const body = {
      names: name,
      lastName:lastName,
      RUT:rut,
      address:address,
      email:email,
      phone:phone,
      password:password,
      password_confirmation:confirmPassword
    }
    await fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': Auth.getToken()
      },
      body: JSON.stringify(body)
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
    }).catch((error)=>{
      console.error({error});
      Swal.fire({
        title:'Error!',
        text:'¡No se pudo crear el paciente!',
        icon:'error',
        confirmButtonText:'Ok',
        // showCancelButton:true,
        // cancelButtonText:'No'
      });
    })
  }

  // const changePicture = (e) => {
  //   var file = e.target.files[0];
  //   file.url = URL.createObjectURL(file);
  //   var ext = file.name.split('.').pop();
  //   // console.log("EXTENSION ",file);

  //   if(ext !='jpeg' && ext !='png' && ext !='gif' && ext !='jpg' && ext !='TIFF')
  //   {
  //   }
  //   else
  //   {
  //     setPicture(file);
  //   }
  // }

  const invalidForm = () => {
    return (
      !name || !lastName || !email || !password || !confirmPassword || !phone || !address || (password != confirmPassword) || !token
    )
  }

  const step1 = () => {
    return(
      <div className='flex flex-col w-3/4 justify-center'>
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
      </div>
    )
  }

  

  const step2 = () => {
    return(
      <div className='flex flex-col w-3/4 justify-center'>
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
          <div className='relative left-[96%] bottom-8 flex items-center'>
            <button className='text-slate-100 text-xl self-center' title='Visualizar Contraseña'
            onClick={()=>{setCheckPassword(!checkPassword)}}>
              {!checkPassword?<FaEye/>:<FaEyeSlash/>}
            </button>
          </div>
        </div>
        <div className='flex flex-col w-full -mt-4'>
          <label className='text-slate-100 text-left'>
            Confirmar Contraseña
          </label>
          <input className='bg-gray-900 focus:bg-slate-800 text-slate-300 focus:outline-none
          rounded-xl border border-slate-300 focus:border-slate-200 w-full p-2 self-center text-center'
          value={confirmPassword} type={checkPasswordConfirmation?'text':'password'} onChange={(e)=>{setConfirmPassword(e.target.value)}} 
          placeholder={checkPasswordConfirmation?'confirmar contraseña':'********'}/>
          <div className='relative left-[96%] bottom-8 flex items-center'>
            <button className='text-slate-100 text-xl self-center' title='Visualizar Contraseña'
            onClick={()=>{setCheckPasswordConfirmation(!checkPasswordConfirmation)}}>
              {!checkPasswordConfirmation?<FaEye/>:<FaEyeSlash/>}
            </button>
          </div>
          {
            password != confirmPassword && (
              <label className='text-red-500 text-xs my-2 flex flex-row self-center'>
                ¡Ambas contraseñas deben ser iguales! 
                <IoIosAlert className='text-red-500 text-sm bg-white rounded-full self-center ml-1'/>
              </label>
            )
          }
        </div>
        {/* <div className='flex flex-col w-full'>
          <label className='text-slate-100 text-left'>
            Foto de Perfil
          </label>
          <div className="flex justify-center my-1">
            <label htmlFor='imagen' 
            className="bg-gray-900 hover:bg-slate-800 text-slate-300 hover:outline-none cursor-pointer
            rounded-xl border border-slate-300 hover:border-slate-200 w-full p-2 self-center text-center">
              Presione aquí para agregar una foto
            </label>
            <input className="hidden" id='imagen'
            type="file" accept='.jpeg,.png,.gif,.jpg,.TIFF' name="imagen" onChange={(e)=>{changePicture(e)}}/>
          </div>
        </div> */}
        <div className='flex flex-col justify-center w-full my-2'>
          <ReCAPTCHA ref={captchaRef} className='focus:outline-none self-center'
          sitekey={process.env.REACT_APP_WEB_KEY}
          onChange={(e)=>{e.preventDefault();setToken(captchaRef.current.getValue())}}/>
        </div>
        <button onClick={()=>{
          Swal.fire({
            title:'',
            text:'¿Está Seguro?',
            icon:'error',
            confirmButtonText:'Sí',
            showCancelButton:true,
            cancelButtonText:'No'
          }).then((res)=>{
            if(res.isConfirmed){
              captchaRef.current.execute();
              crearTerapeuta();
            }
          });
        }} disabled={invalidForm()}
        className='bg-blue-400 hover:bg-blue-500 mt-6 w-40 rounded hover:scale-110 disabled:hover:scale-100 disabled:cursor-not-allowed
        text-center text-gray-900 h-8 self-center disabled:bg-gray-300 disabled:text-black'>
          Continuar
        </button>
        {
          invalidForm && (
            <label className='text-red-500 text-xs mt-4 flex flex-row self-center'>
              ¡Debe Completar todos los datos del Formulario! 
              <IoIosAlert className='text-red-500 text-sm bg-white rounded-full self-center ml-1'/>
            </label>
          )
        }
      </div>
    )
  }

  return (
    <div className='min-h-screen h-full w-full flex flex-col justify-center bg-gray-900'>
      <Header/>
      <div className='flex flex-col self-center p-8 absolute w-[300px] sm:w-[90%] md:w-[90%] lg:w-[85%] xl:w-[75%] top-[20%] rounded-xl border-slate-300 border
      shadow-2xl shadow-slate-600 bg-gray-900'>
        {
          <Link to={step===1?'/login':''} 
          onClick={()=>{if(step > 1)setStep(step-1)}}>
            <label className='text-slate-100'>
              <FaArrowLeft className='hover:scale-125 cursor-pointer'/>
            </label>
          </Link>
        }
        <label className='text-left font-bold text-slate-100 text-xl mt-2'>
          Registro Terapeuta
        </label>
        <div className='flex w-full mt-4 justify-center'>
          {steps()}
        </div>
      </div>
    </div>
  )
}

export default RegistroTerapeuta;
