import React from 'react';
import Header from '../Header';
import VideoPlayer from '../VideoPlayer';

const VideoLlamada = () => {
  return (
    <div className='min-h-screen h-full w-full flex flex-col justify-center bg-gray-900'>
      <Header/>
      <label className='text-4xl text-slate-300 text-center'>  
        VideoLlamada
      </label>
      <VideoPlayer/>
    </div>
  )
}

export default VideoLlamada;