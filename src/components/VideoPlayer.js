import React from 'react'

const VideoPlayer = () => {
  return (
    <div className='w-full h-full bg-gray-900 flex flex-row justify-center mt-8 pb-12'>        
      <video playsInline muted ref={null} autoPlay className='h-64 w-64 bg-pink-300 mr-4'/>
      <video playsInline ref={null} autoPlay className='h-64 w-64 bg-cyan-300 ml-4'/>
    </div>
  );
}

export default VideoPlayer;