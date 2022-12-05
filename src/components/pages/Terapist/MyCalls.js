import React from 'react';
import AdminHeader from '../../AdminHeader';
import PacientHeader from '../../PacientHeader';
import TerapistHeader from '../../TerapistHeader';

export default function MyCalls() {

  const user = JSON.parse(localStorage.getItem('userLoged'));

  return (
    <div className='flex flex-col w-full min-h-screen bg-gray-900 text-gray-50 text-center'>
      {
        user?.type == 'admin'?
          <AdminHeader/>
        :
        user?.type == 'terapist'?
          <TerapistHeader/>
        :<PacientHeader/>
      }
      <label className='text-center font-bold w-full self-center text-xl mt-20'>
        No hay llamadas todavía {':('}
      </label>
    </div>
  )
}