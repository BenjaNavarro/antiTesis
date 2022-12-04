import React, { useEffect, useState } from 'react';
import AdminHeader from '../../AdminHeader';
import Auth from '../../../Utils/Auth';
import { FaSpinner, FaTrash} from 'react-icons/fa';
import formatoRut from '../../../Utils/FormatoRut';
import Swal from 'sweetalert2';

export default function PacientsAdmin(){

  const [pacients, setPacients] = useState([]);
  const [loadingPacients, setLoadingPacients] = useState(false);

  useEffect(()=>{

    loadData();

    async function loadData(){
      await loadPacients();
    }
  },[]);

  async function loadPacients(){
    setLoadingPacients(true);
    const url = process.env.REACT_APP_API_HOST+'/api/pacients';
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
      // console.log({res});
      setLoadingPacients(false);
      if(res.status === 200){
        setPacients(res.pacients);
      }else{
        setPacients([]);
      }
    }).catch((error)=>{console.error({error})})
  }

  async function deletePacient(id){
    const url = process.env.REACT_APP_API_HOST+'/api/pacients/'+id+'/deletePacient';
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
      // console.log({res});
      if(res.status === 200){
        loadPacients();
        Swal.fire({
          title:'',
          text:'Paciente '+res.pacient.name+' '+res.pacient.lastName+' eliminado con éxito!',
          icon:'success',
          confirmButtonText:'Ok',
        });
      }else{
        Swal.fire({
          title:'',
          text:'No se pudo eliminar el paciente '+res.pacient.name+' '+res.pacient.lastName+'!',
          icon:'error',
          confirmButtonText:'Ok',
        });
      }
    }).catch((error)=>{console.error({error})})
  }

  return (
    <div className='flex flex-col w-full min-h-screen bg-gray-900 text-gray-50 text-center'>
      <AdminHeader/>
      <div className='flex flex-col justify-center sm:flex-row flex-wrap self-center p-8 py-12 absolute w-[300px] sm:w-[90%] top-[15%] rounded-xl border-slate-300 border
      shadow-2xl shadow-slate-600 bg-gray-900'>
        {
          loadingPacients?
            <div className='w-full text-center flex justify-center'>
              <FaSpinner className='animate-spin text-4xl self-center text-center'/>
            </div>
            :
            <table className='w-full table table-fixed'>
              <thead className='table-header-group'>
                <tr className='table-row h-12'>
                  <th className='table-cell'>Nombre</th>
                  <th className='table-cell'>RUT</th>
                  <th className='table-cell'>E-Mail</th>
                  <th className='table-cell'>Teléfono</th>
                  <th className='table-cell'>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {
                  pacients.length > 0?
                    pacients.map((pacient,i)=>{
                      return(
                        <tr className='table-row h-10' key={i}>
                          <td className='table-cell'>{pacient.name+' '+pacient.lastName}</td>
                          <td className='table-cell'>{formatoRut(pacient.RUT)}</td>
                          <td className='table-cell'>{pacient.email}</td>
                          <td className='table-cell'>{pacient.phone}</td>
                          <td className='table-cell'>
                            <div className='flex flex-wrap w-full justify-center'>
                              <button className='hover:shadow-md shadow-slate-600' 
                              title={'Eliminar paciente '+pacient.name+' '+pacient.lastName}
                              onClick={()=>{
                                Swal.fire({
                                  title:'',
                                  text:'¿Está seguro que desea eliminar el paciente '+pacient.name+' '+pacient.lastName+'?',
                                  icon:'question',
                                  showCancelButton:true,
                                }).then((res)=>{
                                  if(res.isConfirmed){
                                    deletePacient(pacient._id);
                                  }
                                })
                              }}>
                                <FaTrash className='hover:scale-110'/>
                              </button>
                            </div>
                          </td>
                        </tr>
                      )
                    })
                  :
                  <tr>
                    <td colSpan={5}>
                      <label className=''>No hay pacientes asociados</label>
                    </td>
                  </tr>
                }
              </tbody>
            </table>
        }
      </div>
    </div>
  );
}