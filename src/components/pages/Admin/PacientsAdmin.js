import React, { useEffect, useState } from 'react';
import AdminHeader from '../../AdminHeader';
import Auth from '../../../Utils/Auth';

export default function PacientsAdmin(){

  const [pacients, setPacients] = useState([]);

  useEffect(()=>{

    loadData();

    async function loadData(){
      await loadPacients();
    }
  },[]);

  async function loadPacients(){
    const url = process.env.REACT_APP_API_HOST+'/api/pacients';
    await fetch(url,{
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': Auth.getToken()
      }
    }).then((res)=>{
      Auth.updateToken(res.headers.get('x-auth-token'));
      return res.json();
    }).then((res)=>{
      console.log({res});
    }).catch((error)=>{console.error({error})})
  }

  return (
    <div className='flex flex-col w-full min-h-screen bg-gray-900 text-gray-50 text-center'>
      <AdminHeader/>
    </div>
  );
}