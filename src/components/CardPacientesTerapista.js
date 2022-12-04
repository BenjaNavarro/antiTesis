import React from "react"


const CardPacientesTerapistas = (props) => {

    return (
        <div className='flex flex-row justify-center sm:justify-start  flex-wrap self-center p-8 py-2 absolute w-[300px] h-[250px] sm:w-[90%] sm:h-[20%] top-[25%] rounded-xl border-slate-300 border
        shadow-2xl shadow-slate-600 bg-gray-900'>
            <img src={require(`./img/testimonio-emma.png`)} className='flex h-[120px] w-[100px] sm:w-1/5 rounded-md'></img>
            <div className='justify-start w-full sm:w-2/5'>
                <label className='flex text-center text-xl font-semibold mx-1 text-slate-300 my-1'>
                   {props.nombre +" "+ props.apellido}
                </label>
                <label className='flex text-center text-xl font-semibold mx-1 text-slate-300 my-1'>
                    {props.email}
                </label>
            </div>
            <div className='flex justify-end self-center w-full sm:w-2/5'>
                <button className='justify-self-end text-xl text-white shadow-green-400 border-gray-400 border rounded-lg bg-green-600	w-[100px] h-[40px]'>Conectar</button>
            </div>
        </div>
      
    )
}

export default CardPacientesTerapistas;
