import React from 'react'

const TerapistHeader = () => {

  const user = JSON.parse(localStorage.getItem('userLoged'));

  return (
    <div className='backdrop-blur-md w-full h-12 px-16 flex flex-row justify-between fixed top-0 left-0
    hover:shadow hover:shadow-slate-600'>
      <div className='w-32 md:w-1/4 self-center'>
        <Link to={'/'}>
          <label className='text-slate-100 text-left font-bold italic text-sm md:text-lg xl:text-xl cursor-pointer'>        
            Proyecto de Título
          </label>
        </Link>
      </div>
      <div className='hidden md:hidden w-1/2 lg:flex justify-end mr-40 items-center'>
        <Link to={'/terapist_calls'}>
          <label className='text-slate-100 cursor-pointer'>
            Mis Llamadas
          </label>
        </Link>
        <Link to={'/terapist_pacients'}>
          <label className='text-slate-100 cursor-pointer mr-96'>
            Mis Pacientes
          </label>
        </Link>
        <Link to={'/new_call'}>
          <label className='text-slate-100 cursor-pointer'>
            Nuevo Test
          </label>
        </Link>
        <Link to={'/terapist_profile'}>
          <label className='text-slate-100 cursor-pointer'>
            {user.name.toUpperCase()+' '+user.lastName.toUpperCase()}
          </label>
        </Link>
        <Button>
          <label className='text-slate-100 cursor-pointer'>
            Cerrar Sesión
          </label>
        </Button>
      </div>
      {/* <div className='flex items-center sm:flex sm:items-end md:flex xl:hidden lg:hidden md:items-end sm:self-center md:self-center'>
        <MenuToolTip/>
      </div> */}
    </div>
  )
}

export default TerapistHeader