import React from 'react'
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className='backdrop-blur-md w-full h-12 px-16 flex flex-row justify-between fixed top-0
    hover:shadow hover:shadow-slate-600'>
      <div className='w-1/4 self-center'>        
        <label className='text-slate-100 text-left font-bold italic text-xl'>        
          Proyecto de Título
        </label>
      </div>
      <div className='w-1/2 flex justify-between mr-40 items-center'>        
        <Link to={'/'}>
          <label className='text-slate-100 cursor-pointer'>
            Home
          </label>
        </Link>
        <Link to={'/login'}>
          <label className='text-slate-100 cursor-pointer'>
            Login
          </label>
        </Link>
        <Link to={'/call'}>
          <label className='text-slate-100 cursor-pointer'>
            Video Llamada
          </label>
        </Link>
      </div>
    </div>
  )
}

export default Header;