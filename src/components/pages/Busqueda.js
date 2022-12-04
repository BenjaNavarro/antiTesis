import React from "react";


const Busqueda = (props) => {

    <div className='mt-12'>
        <h1>Doctores</h1>
				<div>
          {
            medicos.length === 0 ? <NoEncontrado/> : 
            medicos.map((doctor,index) => 
            <Fragment>
                <h1 key={index}>Nombre: {doctor.nombre}</h1>
                <p key={index}>Apellido: {doctor.apellido}</p>
                <p key={index}>Edad: {doctor.edad}</p>
                <p key={index}>Especialidad: {doctor.especialidad}</p>
            </Fragment>
           //  nombre === '' ? <Medicos/> : <MedicosBuscados nombre={nombre} />
           /*
           medicos.map(doctor => 
            <Fragment>
                <h1 key={doctor.id}>Nombre: {doctor.nombre}</h1>
                <p key={doctor.id}>Apellido: {doctor.apellido}</p>
                <p key={doctor.id}>Edad: {doctor.edad}</p>
                <p key={doctor.id}>Especialidad: {doctor.especialidad}</p>
            </Fragment>
            */
            ) 
          }       
		</div>
	</div>
    

}


export default Busqueda;