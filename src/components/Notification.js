import React, { useContext } from 'react'
import { SocketContext } from '../SocketContext';
import { FaPhone } from 'react-icons/fa';

const Notification = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext); 
  return (
    <>
      { answerCall.isRecievedCall && !callAccepted && (
        <div className='flex justify-center text-center'>
          <label className='text-center text-slate-300'>
            {call.name} llamando!
          </label>
          <button onClick={answerCall} 
          className='p-1 m-1 border-b border-transparent hover:border-slate-200 text-slate-300 hover:text-slate-200'>
            <FaPhone />
          </button>
        </div>
      )}
    </>
  )
}

export default Notification