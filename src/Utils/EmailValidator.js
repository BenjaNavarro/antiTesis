export default function ValidateEmail(inputText){
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(inputText?.match(mailformat))
  {
  return true;
  }
  else if(inputText==""){
    return true
  }
  else
  {
  return false;
  }
}