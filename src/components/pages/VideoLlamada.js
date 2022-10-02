import React, { useRef, useState } from 'react';
import Header from '../Header';
// import VideoPlayer from '../VideoPlayer';

const VideoLlamada = () => {

  const localVideoRef= useRef(null);
  const peerConnectionRef= useRef(new RTCPeerConnection(null));
  const [observaciones,setObservaciones] = useState('');

  const createOffer = () =>{
    peerConnectionRef.current.createOffer({
      offerToReceiveAudio: true,
      offerToReceiveVideo: true
    }).then((sdp)=>{
      console.log(sdp);
      peerConnectionRef.current.setLocalDescription(sdp);
      // setUserMedia(true);
    }).catch((err)=>{
      console.log(err);
    });
  };

  const createAnswer = () => {
    peerConnectionRef.current.createAnswer({
      offerToReceiveAudio: true,
      offerToReceiveVideo: true
    }).then((sdp)=>{
      console.log(sdp);
      peerConnectionRef.current.setLocalDescription(sdp);
      // setUserMedia(true);
    }).catch((err)=>{
      console.log(err);
    });
  };

  const setRemoteDescription = () => {
    const sdp = JSON.parse(observaciones);
    console.log(sdp);

    peerConnectionRef.current.setRemoteDescription(new RTCSessionDescription(sdp));
  }

  const addCandidate = () => {
    const candidate = JSON.parse(observaciones);
    console.log('Adding candidate...');

    peerConnectionRef.current.addIceCandidate(new RTCIceCandidate(candidate));
  }

  const getUserMedia = () => {
    const constraints = {
      video: true,
      audio: true
    };

    navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
      console.log(stream);
      localVideoRef.current.srcObject = stream;
      // setUserMedia(true);
    })
    .catch((error) => {
      // setUserMedia(false);
      console.log(error);
    })

    const peer = new RTCPeerConnection(null);
    peer.onicecandidate = (e) => {
      console.log(e.candidate);
    }
    peer.oniceconnectionstatechange = (e) => {
      console.log(e);
    }

    peer.ontrack = (e) => {

    }

    peerConnectionRef.current = peer;
  }

  return (
    <div className='min-h-screen h-full w-full flex flex-col justify-center bg-gray-900'>
      <Header/>
      <label className='text-4xl text-slate-300 text-center mb-12 mt-20 sm:mt-0'>  
        Videollamada
      </label>
      <div className='flex flex-col lg:flex-row w-full justify-center lg:justify-around'>
        <div className='flex flex-col w-full lg:w-1/2 px-2'>
          <video autoPlay ref={localVideoRef} playsInline 
          className='lg:w-[90%] md:w-[90%] w-[22rem] rounded-lg border border-white self-center'/>
          <button onClick={()=>{getUserMedia()}} className='bg-gray-900 hover:bg-slate-800 text-slate-300
          rounded-xl border border-slate-300 hover:border-slate-200 w-56 my-8 p-2 self-center text-center'>
            Iniciar Videollamada
          </button>
        </div>
        <div className='flex flex-col w-full lg:w-1/2 px-4'>
          <label htmlFor='observaciones' className='text-center font-bold text-slate-100'>Observaciones del Paciente</label>
          <textarea id='observaciones' name='observaciones'
          className='focus:outline-none bg-gray-900 focus:bg-slate-800 text-slate-300 placeholder:text-slate-300
          rounded-xl border border-slate-300 focus:border-slate-200 lg:w-[90%] w-[22rem] md:w-[90%] p-2 h-56 lg:h-96 self-center'
          value={observaciones} onChange={(e)=>{setObservaciones(e.target.value)}}
          placeholder='Escriba sus observaciones'/>
        </div>
      </div>
    </div>
  )
}

export default VideoLlamada;