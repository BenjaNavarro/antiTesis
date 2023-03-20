import React from 'react';
import Swal from 'sweetalert2';
import formatoRut from '../Utils/FormatoRut';
import { FaTrash, FaToggleOff, FaToggleOn, FaKey } from 'react-icons/fa';

const TablaPacientesAdmin = (props) => {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-start mb-4 w-full border-slate-300 border
      shadow-lg shadow-slate-600 rounded-xl'>
        <button onClick={()=>{props.setCreatePacient(true)}} 
        className='w-40 h-10 text-center hover:shadow-slate-600 shadow rounded m-8 border border-slate-300'>
          Crear Paciente
        </button>
      </div>
      <table className='w-full table table-fixed whitespace-nowrap'>
        <thead className='table-header-group'>
          <tr className='table-row h-12'>
            <th className='table-cell'>Nombre</th>
            <th className='table-cell'>RUT</th>
            <th className='table-cell'>E-Mail</th>
            <th className='table-cell'>Teléfono</th>
            <th className='table-cell'>Acciones</th>
          </tr>
        </thead>
        <tbody className='table-row-group'>
          {
            props.pacients?.length > 0?
              props.pacients.map((pacient,i)=>{
                return(
                  <tr className='table-row h-10' key={i}>
                    <td className='table-cell text-sm sm:text-base'>{pacient.name+' '+pacient.lastName}</td>
                    <td className='table-cell text-sm sm:text-base'>{formatoRut(pacient.RUT)}</td>
                    <td className='table-cell text-sm sm:text-base'>{pacient.email}</td>
                    <td className='table-cell text-sm sm:text-base'>{pacient.phone}</td>
                    <td className='table-cell text-sm sm:text-base'>
                      <div className='flex flex-wrap w-full justify-center'>
                        <button className='hover:shadow-md shadow-slate-600 p-1 m-1 focus:outline-none' 
                        title={'Eliminar paciente '+pacient.name+' '+pacient.lastName}
                        onClick={()=>{
                          Swal.fire({
                            title:'',
                            text:'¿Está seguro que desea eliminar el paciente '+pacient.name+' '+pacient.lastName+'?',
                            icon:'question',
                            showCancelButton:true,
                          }).then((res)=>{
                            if(res.isConfirmed){
                              props.deletePacient(pacient._id);
                            }
                          });
                        }}>
                          <FaTrash className='hover:scale-110'/>
                        </button>
                        <button className='hover:shadow-md shadow-slate-600 p-1 m-1 focus:outline-none'
                        title={(pacient.state?'Desactivar':'Activar')+" paciente "+pacient.name+" "+pacient.lastName+"?"}
                        onClick={()=>{
                          Swal.fire({
                            title:'',
                            text:'¿Está seguro que desea '+(pacient.state?"desactivar":"activar")+' al paciente '+pacient.name+' '+pacient.lastName+'?',
                            icon:'question',
                            showCancelButton:true,
                          }).then((res)=>{
                            if(res.isConfirmed){
                              props.changeStatePacient(pacient._id);
                            }
                          });
                        }}>
                          {pacient.state?<FaToggleOn className='hover:scale-110'/>:<FaToggleOff className='hover:scale-110'/>}
                        </button>
                        <button className='hover:shadow-md shadow-slate-600 p-1 m-1 focus:outline-none'
                        title={'Cambiar contraseña paciente '+pacient.name+" "+pacient.lastName+"?"}
                        onClick={()=>{
                          props.setCurrentPacient(pacient);
                          props.setChangePassword(true);
                        }}>
                          <FaKey className='hover:scale-110'/>
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
    </div>
  )
}

export default TablaPacientesAdmin