export default function limpiaRut(rut){
  const rutLimpio = rut.replace(/\./g,'').replace(/\-/g, '').trim().toLowerCase();
  const ultimoDigito = rutLimpio.substr(-1, 1);
  const rutDigito = rutLimpio.substr(0, rutLimpio.length-1)
  // console.log("login :", rut)
  // if(rut==='subcargoadmin' || rut==='subcargoadm-in') return "SubcargoAdmin"
  // else 
  if (rut.length!=0) return rutDigito.concat('-').concat(ultimoDigito);
  else return null
}