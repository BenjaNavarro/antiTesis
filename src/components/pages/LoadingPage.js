import React from 'react';
import { FaSpinner} from 'react-icons/fa';

function LoadingPage() {
  return (
    <div className='flex flex-col w-full min-h-screen bg-gray-900 text-gray-50 text-center'>
      <FaSpinner className='rotate text-7xl self-center mt-40'/>
    </div>
  )
}

export default LoadingPage;