import React from 'react';
import Popup from 'reactjs-popup';

const VideoPermisions = () => {
  return (
    <Popup
    trigger={
      <button className='focus:outline-none bg-gray-900 focus:bg-slate-800 text-slate-300 placeholder:text-slate-300
      rounded-xl border border-slate-300 focus:border-slate-200 w-1/2 my-8 p-2'>
        Permisos de Video
      </button>
    }
    contentStyle={{
      width: "90%",
      maxHeight: "90%", 
      height:'50%',
      maxWidth: "40%",
      borderRadius: "1rem",
      overflowX: "hidden",
      overflowY: "scroll"
    }}
    modal>
       {
        (close)=>(
          <div>
            
          </div>
        )
       } 
    </Popup>
  )
}

export default VideoPermisions