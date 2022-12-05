import React from 'react'
import Header from '../Header';
import AdminHeader from '../AdminHeader';
import TerapistHeader from '../TerapistHeader';
import PacientHeader from '../PacientHeader';

export default function NotFound() {

  const user = JSON.parse(localStorage.getItem('userLoged'));

  return (
    <div className='bg-gray-900 flex min-h-screen h-full'>
      {
        user?.type == 'admin'?
          <AdminHeader/>
        :
        user?.type == 'terapist'?
          <TerapistHeader/>
        :
        user?.type == 'pacient'?
          <PacientHeader/>
        :<Header/>
      }
      <label className='text-white mt-40 text-4xl text-center w-full'>
        Lo sentimos, no encontrado :/
      </label>
    </div>
  )
}