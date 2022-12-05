import React from 'react';
import Swal from 'sweetalert2';
import formatoRut from '../Utils/FormatoRut';
import { FaTrash } from 'react-icons/fa';

const TablaTerapeutasAdmin = (props) => {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-start mb-4 w-full border-slate-300 border
      shadow-lg shadow-slate-600 rounded-xl'>
        <button onClick={()=>{props.setCreate(true)}} 
        className='w-40 h-10 text-center hover:shadow-slate-600 shadow rounded m-8 border border-slate-300'>
          Crear Terapeuta
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
            props.terapists?.length > 0 ?
              props.terapists.map((terapist,i)=>{
                return(
                  <tr className='table-row h-10' key={i}>
                    <td className='table-cell text-sm sm:text-base'>{terapist.name+' '+terapist.lastName}</td>
                    <td className='table-cell text-sm sm:text-base'>{formatoRut(terapist.RUT)}</td>
                    <td className='table-cell text-sm sm:text-base'>{terapist.email}</td>
                    <td className='table-cell text-sm sm:text-base'>{terapist.phone}</td>
                    <td className='table-cell text-sm sm:text-base'>
                      <div className='flex flex-wrap w-full justify-center'>
                        <button className='hover:shadow-md shadow-slate-600' 
                        title={'Eliminar terapeuta '+terapist.name+' '+terapist.lastName}
                        onClick={()=>{
                          Swal.fire({
                            title:'',
                            text:'¿Está seguro que desea eliminar el terapeuta '+terapist.name+' '+terapist.lastName+'?',
                            icon:'question',
                            showCancelButton:true,
                          }).then((res)=>{
                            if(res.isConfirmed){
                              props.DeleteTerapist(terapist._id);
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
                  <label className=''>No hay terapeutas asociados</label>
                </td>
              </tr>
          }
        </tbody>
      </table>
    </div>
  )
}

export default TablaTerapeutasAdmin