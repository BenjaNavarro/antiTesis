import React, { Fragment, useEffect, useState } from 'react'
import TerapistHeader from '../../TerapistHeader'
import capitalizeFirstLetter from '../../../Utils/CapitalizeFirstLetter';
import { FaPhone, FaEnvelope, FaUser, FaUsers, FaIdCard, FaBirthdayCake } from 'react-icons/fa';
import formatoRut from '../../../Utils/FormatoRut';
import emma from '../../img/testimonio-emma.png'
import CardPacientesTerapista from '../../CardPacientesTerapista';
import Swal from 'sweetalert2';


const MyPacients = () => {

   /*
  const user = new Object();
  //= JSON.parse(localStorage.getItem('userLoged'));
  user.name="Felipe";
  user.lastName="Aravena";
  user.RUT="19728077-8";
  user.email="felipe123@gmail.com";
  user.phone="945648413";
  user.birthDate="30-11-1997"

 
  const pacients = [{
    "id": 1,
    "name":"Emma",
    "lastname":"Castro",
    "email":"emma123@gmail.com"
  },
  {
    "id": 2,
    "name":"Pedro",
    "lastname":"Perez",
    "email":"pedro123@gmail.com"
  } 
];
*/


    React.useEffect(() => {
      obtenerDatos()
      console.log("useEffect");
    },[])

    const [pacients, setPacients] = useState([])

    const obtenerDatos = async () => {

    const url = process.env.REACT_APP_API_HOST+'/api/pacients/getPacients';

    
    const user = JSON.parse(localStorage.getItem('userLoged'))
    
    const id=user._id;
    
    console.log("id: "+id);
    
    console.log(user);
    
    const body = {
      id:id
    }
    
    console.log("body "+body.id);
    

    await fetch(url,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        // 'Authorization': Auth.getToken()
      },
      body: JSON.stringify(body)
    }).then((res)=>{
      console.log('Header:',res.header);
      return res.json();
    }).then((res)=>{
      console.log("res"+{res});
      if(res.status === 200){
        console.log("res"+res);
        setPacients(res.pacients);
      }else if(res.status===400){
        Swal.fire({
          title:'Error!',
          text:'',
          icon:'error',
          confirmButtonText:'Ok',
          // showCancelButton:true,
          // cancelButtonText:'No'
        })
      }
    }).catch((error)=>{
      console.log({error});
    });
  }

  console.log(pacients);

  
  return (
    <div className='flex flex-col w-full min-h-screen bg-gray-900 text-gray-50 text-center'>
      <TerapistHeader/>
      {
        console.log(pacients)
      }
      {
        pacients?.map(pacient => (
          <CardPacientesTerapista
            key={pacient._id}
            nombre={pacient.name}
            apellido={pacient.lastName}
            email={pacient.email}
          />
        ))
      }
    </div>
  )
}

export default MyPacients