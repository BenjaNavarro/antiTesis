import React, { useRef, useState } from 'react';
import Header from '../Header';
// import VideoPlayer from '../VideoPlayer';

const VideoLlamada = () => {

  const localVideoRef= useRef(null);
  const remoteVideoRef= useRef(null);
  const peerConnectionRef= useRef(new RTCPeerConnection(null));
  const textRef = useRef('');
  const [userMedia,setUserMedia] = useState(false);

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
    const sdp = JSON.parse(textRef.current.valueOf);
    console.log(sdp);

    peerConnectionRef.current.setRemoteDescription(new RTCSessionDescription(sdp));
  }

  const addCandidate = () => {
    const candidate = JSON.parse(textRef.current.valueOf);
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
      <label className='text-4xl text-slate-300 text-center mb-12'>  
        Videollamada
      </label>
      <div className='w-1/2 flex flex-col justify-center self-center'>
        <div className='flex flex-row w-full justify-center'>
          <video autoPlay ref={localVideoRef} playsInline 
          className='w-2/3 rounded-lg border border-white mr-4 self-center'/>
          <video autoPlay ref={remoteVideoRef} playsInline
          className='w-2/3 rounded-lg border border-white ml-4 self-center'/>
        </div>
        <div className='flex w-full justify-center mt-4'>
          <button onClick={()=>{
            getUserMedia();
            // setUserMedia(true);
            // createOffer();
          }} className='bg-gray-900 hover:bg-slate-800 text-slate-300
          rounded-xl border border-slate-300 hover:border-slate-200 w-1/5 my-8 p-2 self-center text-center'>
            Iniciar Videollamada
          </button>
          <button onClick={createOffer}
          className='bg-gray-900 hover:bg-slate-800 text-slate-300
          rounded-xl border border-slate-300 hover:border-slate-200 w-1/5 my-8 p-2 self-center text-center ml-4'>
            Crear Oferta
          </button>
          <button onClick={createAnswer}
          className='bg-gray-900 hover:bg-slate-800 text-slate-300
          rounded-xl border border-slate-300 hover:border-slate-200 w-1/5 my-8 p-2 self-center text-center ml-4'>
            Crear Respuesta
          </button>
          <button className='bg-gray-900 hover:bg-slate-800 text-slate-300
          rounded-xl border border-slate-300 hover:border-slate-200 w-1/5 my-8 p-2 self-center text-center ml-4'>
            Responder
          </button>
          <div className='flex flex-col w-1/5 ml-4'>
            <textarea ref={textRef}
            className='focus:outline-none bg-gray-900 focus:bg-slate-800 text-slate-300 placeholder:text-slate-300
            rounded-xl border border-slate-300 focus:border-slate-200 w-full my-2 p-2'
            placeholder='Descripción Remota...'/>
            <button onClick={setRemoteDescription}
            className='bg-gray-900 hover:bg-slate-800 text-slate-300
            rounded-xl border border-slate-300 hover:border-slate-200 w-full my-2 p-2 self-center text-center'>
              Descripción Remota
            </button>
          </div>
          <button onClick={addCandidate}
          className='bg-gray-900 hover:bg-slate-800 text-slate-300
          rounded-xl border border-slate-300 hover:border-slate-200 w-1/5 my-8 p-2 self-center text-center ml-4'>
            Añadir Candidatos
          </button>
        </div>
      </div>
    </div>
  )
}

export default VideoLlamada;