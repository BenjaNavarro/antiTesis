import React from 'react';
import Swal from 'sweetalert2';
import formatoRut from '../Utils/FormatoRut';
import { FaTrash } from 'react-icons/fa';

const TablaPacientesAdmin = (props) => {
  return (
    <div className='flex flex-col w-full'>
      <div className='flex justify-start my-8 w-full border-slate-300 border
      shadow-lg shadow-slate-600 rounded-xl'>
        <button className='w-40 h-10 text-center hover:shadow-slate-600 shadow rounded m-8 border border-slate-300'>
          Crear Paciente
        </button>
      </div>
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
        <tbody className='table-row-group'>
          {
            props.pacients?.length > 0?
              props.pacients.map((pacient,i)=>{
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
                              props.deletePacient(pacient._id);
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
    </div>
  )
}

export default TablaPacientesAdmin