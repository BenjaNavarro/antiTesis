import numberWithCommas from "./NumberWithCommas";

export default function formatoRut(rut){
  // XX.XXX.XXX-X
  if (rut===null || rut==='') return '';
  const nuevoRut = rut.replace(/\./g,'').replace(/-/g, '').trim().toLowerCase();
  const ultimoDigito = nuevoRut.substr(-1, 1);
  const rutDigito = nuevoRut.substr(0, nuevoRut.length-1)

  let format = numberWithCommas(rutDigito)
  if(rut==="afasiaadmi-n") return "AfasiaAdmin"
  if (rut.length!==0) return format.concat('-').concat(ultimoDigito);
  else return '';
}