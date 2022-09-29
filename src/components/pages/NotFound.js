import React from 'react'
import Header from '../Header';

function NotFound() {
  return (
    <div className='bg-gray-900 flex min-h-screen h-full'>
      <Header active=''/>
      <label className='text-white mt-40 text-4xl text-center w-full'>
        Lo sentimos, no encontrado...
      </label>
    </div>
  )
}

export default NotFound;