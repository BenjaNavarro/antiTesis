import React from 'react'
import Header from '../Header'

function Home() {
  return (
    <div className='flex flex-col w-full min-h-screen bg-gray-900 text-gray-50 text-center'>
      <Header/>
			<div className='flex flex-col w-full h-full mt-96'>
        <label className='text-slate-100 text-6xl font-bold text-center w-full'>
				  AFASIA
        </label>
        <label className='text-slate-100 text-center text-xl mt-[60%]'>
          A veces unas palabras nos cuestan la vida...
        </label>
        <label className='text-slate-100 text-center text-lg mt-[60%] mb-[40%] px-96'>
          Queremos ayudar a quienes no se pueden expresar
        </label>
			</div>
		</div>
  )
}

export default Home