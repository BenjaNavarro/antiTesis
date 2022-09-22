import React, { useContext } from 'react'
import { SocketContext } from '../SocketContext';
import Notification from './Notification';
import VideoOptions from './VideoOptions';

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  return (
    <div className='w-full h-full bg-gray-900 flex flex-row justify-center mt-8 pb-12'> 
      {
        stream && (
          <div className='flex flex-col'>
            <label htmlFor='myVideo' className='text-slate-300'>Video 1 {name}</label>       
            <video playsInline muted ref={myVideo} id='myVideo' autoPlay className='h-[400px] w-[600px] mr-4'/>
            <VideoOptions/>
          </div>
        )
      }
      {
        callAccepted && !callEnded && (
          <div className='flex flex-col'>
            <label htmlFor='userVideo' className='text-slate-300'>Video 2 {call.name}</label>  
            <video playsInline ref={userVideo} id='userVideo' autoPlay className='h-[400px] w-[600px]ml-4'/>
            <VideoOptions/>
            <Notification/>
          </div>
        )
      }
    </div>
  );
}

export default VideoPlayer;