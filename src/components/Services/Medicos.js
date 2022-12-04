const doctores = [
    {
      id:1,
      nombre:'Leonardo',
      apellido:'Vasquez',
      edad:61,
      especialidad:'Niños'
    },
    {
      id:2,
      nombre:'Luis',
      apellido:'Aracena',
      edad:42,
      especialidad:'Adultos'
    },
    {
      id:3,
      nombre:'Oscar',
      apellido:'Lopez',
      edad:46,
      especialidad:'Adolecentes'
    },
    {
      id:1,
      nombre:'Leonardo',
      apellido:'Ponce',
      edad:38,
      especialidad:'Adultos'
    }
]

const doctoresEncontrados = [];

var nombre='';

const getMedicos = () => {
    console.log(doctores);
    return doctores;
}

const getMedicosPorNombreApellido = (palabra) => {
  console.log("En minusculas: "+palabra);
  const medicos = doctores.filter(doctor => doctor.nombre.toLocaleLowerCase() === palabra.toLocaleLowerCase() || doctor.apellido .toLocaleLowerCase() === palabra.toLocaleLowerCase())
  return medicos;
  /*
    doctores.map(medico => {
        if( medico.nombre.includes(nombre)){
          console.log(medico);
          doctoresEncontrados.push(medico)
        }
        console.log(doctoresEncontrados);
        return doctoresEncontrados;
    })
    */
}

const setNombreService =  (palabra) => {
  console.log(palabra);
  nombre=palabra;
  console.log(nombre+" desde el servicio");
}

const getNombreService = () => {
  console.log(nombre+" Desde el get");
  return nombre;
}

export { getMedicos, getMedicosPorNombreApellido, setNombreService, getNombreService };