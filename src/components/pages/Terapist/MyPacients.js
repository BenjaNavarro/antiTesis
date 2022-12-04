import React, { Fragment } from 'react'
import TerapistHeader from '../../TerapistHeader'
import capitalizeFirstLetter from '../../../Utils/CapitalizeFirstLetter';
import { FaPhone, FaEnvelope, FaUser, FaUsers, FaIdCard, FaBirthdayCake } from 'react-icons/fa';
import formatoRut from '../../../Utils/FormatoRut';
import emma from '../../img/testimonio-emma.png'
import CardPacientesTerapista from '../../CardPacientesTerapista';


const MyPacients = () => {

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

console.log(pacients);

  
  return (
    <div className='flex flex-col w-full min-h-screen bg-gray-900 text-gray-50 text-center'>
      <TerapistHeader/>
        {
          pacients.map(pacient => (
            <CardPacientesTerapista
              key={pacient.id}
              nombre={pacient.name}
              apellido={pacient.lastname}
              email={pacient.email}
            />
          ))
        }
      </div>
  )
}

export default MyPacients