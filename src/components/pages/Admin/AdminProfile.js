import React from 'react';
import AdminHeader from './../../AdminHeader';
import capitalizeFirstLetter from '../../../Utils/CapitalizeFirstLetter';
import { FaPhone, FaEnvelope, FaUser, FaUsers, FaIdCard, FaBirthdayCake } from 'react-icons/fa';
import formatoRut from '../../../Utils/FormatoRut';

export default function AdminProfile(props){
  const user = new Object();
  //= JSON.parse(localStorage.getItem('userLoged'));
  user.name="Diego";
  user.lastName="Gonzalez";
  user.RUT="18.691.733-2";
  user.email="diego123@gmail.com";
  user.phone="945648413";
  user.birthDate="20-09-1995"

  return (
    <div className='flex flex-col w-full min-h-screen bg-gray-900 text-gray-50 text-center'>
      <AdminHeader/>
      <div className='flex flex-col justify-center sm:flex-row flex-wrap self-center p-8 py-12 absolute w-[300px] sm:w-[90%] top-[25%] rounded-xl border-slate-300 border
      shadow-2xl shadow-slate-600 bg-gray-900'>
        <label className='text-center w-full text-3xl font-bold my-4'>Datos Usuario</label>
        <label className='flex justify-center font-semibold text-slate-300 text-xl text-center w-full sm:w-1/2 my-4'>
          <FaUser className='mr-2 self-center'/>{capitalizeFirstLetter(user.name)}
        </label>
        <label className='flex justify-center font-semibold text-slate-300 text-xl text-center w-full sm:w-1/2 my-4'>
          <FaUsers className='mr-2 self-center'/>{capitalizeFirstLetter(user.lastName)}
        </label>
        <label className='flex justify-center font-semibold text-slate-300 text-xl text-center w-full sm:w-1/2 my-4'>
          <FaIdCard className='mr-2 self-center'/>{(formatoRut(user.RUT))}
        </label>
        <label className='flex justify-center font-semibold text-slate-300 text-xl text-center w-full sm:w-1/2 my-4'>
          <FaEnvelope className='mr-2 self-center'/>{user.email}
        </label>
        <label className='flex justify-center font-semibold text-slate-300 text-xl text-center w-full sm:w-1/2 my-4'>
          <FaPhone className='mr-2 self-center'/>{user.phone}
        </label>
        <label className='flex justify-center font-semibold text-slate-300 text-xl text-center w-full sm:w-1/2 my-4'>
          <FaBirthdayCake className='mr-2 self-center'/>{new Date(user.birthDate).toLocaleDateString()}
        </label>
      </div>
    </div>
  )
}