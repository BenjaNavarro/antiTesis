import React, { useEffect, useState } from 'react';
import AdminHeader from '../../AdminHeader';
import Auth from '../../../Utils/Auth';
import CrearTerapeutaAdmin from '../../CrearTerapeutaAdmin';
import TablaTerapeutasAdmin from '../../TablaTerapeutasAdmin';
import { FaSpinner } from 'react-icons/fa';
import Swal from 'sweetalert2';
import CambiarContrasenaTerapeuta from '../../modals/Admin/CambiarContrasenaTerapeuta';

export default function TerapistsAdmin() {

  const [terapists, setTerapists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [create, setCreate] = useState(false);
  const [changePassword,setChangePassword] = useState(false);
  const [CurrentTerapist,setCurrentTerapist] = useState(null);

  useEffect(()=>{
    async function loadData(){
      await LoadTerapists();
    }

    loadData();
  },[]);

  async function DeleteTerapist(id){
    const url = process.env.REACT_APP_API_HOST+'/api/terapists/'+id+'/deleteTerapist';
    await fetch(url,{
      method:'DELETE',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': Auth.getToken()
      }
    }).then((res)=>{
      Auth.updateToken(res.headers.get('x-auth-token'));
      return res.json();
    }).then((res)=>{
      console.log({res});
      if(res.status === 200){
        LoadTerapists();
        Swal.fire({
          title:'',
          text:'Terapeuta '+res.terapist.name+' '+res.terapist.lastName+' eliminado con éxito!',
          icon:'success',
          confirmButtonText:'Ok',
        });
      }else{
        Swal.fire({
          title:'',
          text:'No se pudo eliminar el terapeuta!',
          icon:'error',
          confirmButtonText:'Ok',
        });
      }
    }).catch((error)=>{console.error({error})})
  }

  async function LoadTerapists(){
    setLoading(true);
    const url = process.env.REACT_APP_API_HOST+'/api/terapists';
    await fetch(url,{
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': Auth.getToken()
      }
    }).then((res)=>{
      Auth.updateToken(res.headers.get('x-auth-token'));
      return res.json();
    }).then((res)=>{
      console.log({res});
      setLoading(false);
      if(res.status === 200){
        setTerapists(res.terapists);
      }else{
        setTerapists([]);
      }
    }).catch((error)=>{console.error({error})})
  }

  async function changeStateTerapist(id){
    const url = process.env.REACT_APP_API_HOST+"/api/terapists/"+id+"/changeState";
    let status;
    await fetch(url,{
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': Auth.getToken()
      }
    }).then((res)=>{
      status = res.status;
      Auth.updateToken(res.headers.get('x-auth-token'));
      return res.json();
    }).then((res)=>{
      console.log({res});
      if(status === 200){
        Swal.fire({
          title:'',
          text:'Terapeuta '+res.terapist.name+' '+res.terapist.lastName+' '+(res.message=='Terapist Activated'?'activado':'desactivado')+' con éxito!',
          icon:'success',
          confirmButtonText:'Ok',
        }).then(()=>{
          LoadTerapists();
        });
      }else{
        Swal.fire({
          title:'',
          text:'No se pudo cambiar el estado del terapeuta!',
          icon:'error',
          confirmButtonText:'Ok',
        });
      }
      // console.log({status});
    }).catch((error)=>{console.error({error})})
  }

  async function ChangePasswordTerapist(password,password_confirmation){
    const url = process.env.REACT_APP_API_HOST+"/api/terapists/"+CurrentTerapist._id+"/changePassword";
    const body = {
      password: password,
      password_confirmation:password_confirmation
    };
    let status;
    await fetch(url,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': Auth.getToken()
      },
      body:JSON.stringify(body)
    }).then((res)=>{
      status = res.status;
      Auth.updateToken(res.headers.get('x-auth-token'));
      return res.json();
    }).then((res)=>{
      if(status === 200){
        Swal.fire({
          title:'',
          text:'Se ha cambiado la contraseña del terapeuta '+res.terapist.name+' '+res.terapist.lastName+' con éxito!',
          icon:'success',
          confirmButtonText:'Ok',
        }).then(()=>{
          LoadTerapists();
          setChangePassword(false);
          setCurrentTerapist(null);
        });
      }else{
        Swal.fire({
          title:'',
          text:'No se pudo cambiar la contraseña del terapeuta!',
          icon:'error',
          confirmButtonText:'Ok',
        });
      }
    })
  }

  return (
    <div className='flex flex-col w-full min-h-screen bg-gray-900 text-gray-50 text-center'>
      <AdminHeader/>
      <div className='flex flex-col justify-center sm:flex-row flex-wrap self-center p-8 py-12 w-[800px] md:w-[90%] top-[15%] rounded-xl border-slate-300 border
      shadow-2xl shadow-slate-600 bg-gray-900 mt-32'>
        {
          loading?
            <div className='w-full text-center flex justify-center my-10'>
              <FaSpinner className='animate-spin text-4xl self-center text-center'/>
            </div>
          :
            create?
              <CrearTerapeutaAdmin setCreate={setCreate}/>
            :
            changePassword?
              <CambiarContrasenaTerapeuta ChangePasswordTerapist={ChangePasswordTerapist} setChangePassword={setChangePassword}
              CurrentTerapist={CurrentTerapist} setCurrentTerapist={setCurrentTerapist}/>
              :
              <TablaTerapeutasAdmin setCreate={setCreate} terapists={terapists} DeleteTerapist={DeleteTerapist}
              changeStateTerapist={changeStateTerapist} CurrentTerapist={CurrentTerapist} setCurrentTerapist={setCurrentTerapist}
              setChangePassword={setChangePassword}/>
        }
      </div>
    </div>
  )
}