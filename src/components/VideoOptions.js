import React, { useContext, useState } from 'react';
import { SocketContext } from '../SocketContext';
import { FaMicrophone, FaPhone, FaPhoneSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const VideoOptions = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  // const [idToCall,setIdToCall] = useState('');

  return (
    <div className='flex flex-col justify-center items-center'>
      <input type='text' placeholder='Escriba su nombre de usuario...' 
      className='focus:outline-none bg-gray-900 focus:bg-slate-800 text-slate-300 placeholder:text-slate-300
      rounded-xl border border-slate-300 focus:border-slate-200 w-1/2 my-8 p-2'
      value={name}
      onChange={(e)=>{setName(e.target.value)}}/>
      {/* <input type='text' placeholder='ID de la llamada...' 
      className='focus:outline-none bg-gray-900 focus:bg-slate-800 text-slate-300 placeholder:text-slate-300
      rounded-xl border border-slate-300 focus:border-slate-200 w-1/2 my-8 p-2'
      value={idToCall}
      onChange={(e)=>{setIdToCall(e.target.value)}}/> */}
      {
        callAccepted && !callEnded ? (
          <button onClick={()=>leaveCall()}
          className='p-1 m-1 border-b border-transparent hover:border-slate-200 text-slate-300 hover:text-slate-200'>
            <FaPhoneSlash />
          </button>
        )
        :
          <button onClick={()=>{
            if(name && me){
              callUser(me);
            }else{
              Swal.fire({
                title:'Error',
                text: 'Debe escribir un nombre!',
                icon: 'error',
                showConfirmButton: true,
              });
            }
          }}
          className='p-1 m-1 border-b border-transparent hover:border-slate-200 text-slate-300 hover:text-slate-200'>
            <FaPhone />
          </button>
      }
    </div>
  )
}

export default VideoOptions
