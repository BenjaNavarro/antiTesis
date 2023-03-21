import React, { useEffect, useState } from 'react';
import AdminHeader from './../../AdminHeader';
import capitalizeFirstLetter from '../../../Utils/CapitalizeFirstLetter';
import { FaPhone, FaEnvelope, FaUser, FaIdCard, FaBirthdayCake } from 'react-icons/fa';
import { TbPencil, TbPencilOff } from "react-icons/tb";
import formatoRut from '../../../Utils/FormatoRut';
import Auth from '../../../Utils/Auth';
import jwtDecode from 'jwt-decode';
import Swal from 'sweetalert2';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
registerLocale("es", es);

export default function AdminProfile(props){

    const Original = JSON.parse(localStorage.getItem('userLoged'));
    const [User,setUser] = useState({
        name:Original.name||"",
        lastName:Original.lastName||"",
        RUT:Original.RUT||"",
        email:Original.email||"",
        birthDate:new Date(Original.birthDate)||"",
        phone:Original.phone||"",
    });
    const [Edit,setEdit] = useState(false);

    // useEffect(()=>{
    //     console.log({User});
    // },[]);

    async function UpdateUser(){
        const url = process.env.REACT_APP_API_HOST+"/api/admins/"+Original._id+"/update";
        const body = {
            User
        };
        let status;
        // console.log({User});
        await fetch(url,{
            method:'POST',
            headers:{
              'Content-Type': 'application/json',
              'Authorization': Auth.getToken()
            },
            body: JSON.stringify(body)
        }).then((res)=>{
            status = res.status;
            const token = res.headers.get('x-auth-token');
            Auth.updateToken(token);
            if(status === 200){
                localStorage.setItem('permisos', JSON.stringify(jwtDecode(token)));
            }
            return res.json();
        }).then((res)=>{
            // console.log({res});
            // console.log({status});
            if(status === 200){
                localStorage.setItem('userLoged',JSON.stringify(res.user));
                Swal.fire({
                    title:'Usuario Actualizado!',
                    text:'¡Se actualizó el usuario con éxito!',
                    icon:'success',
                    confirmButtonText:'Ok',
                }).then(()=>{
                    window.location.reload();
                });
            }else{
                Swal.fire({
                    title:'Ocurrió un error!',
                    text:'¡No se pudo actualizar el usuario!',
                    icon:'error',
                    confirmButtonText:'Ok',
                });
            }
        }).catch((error)=>{console.error({error})});
    }

    const HandleChange = (e) => {
        const { name, value } = e.target;
        setUser({...User,[name]:value});
    }

    return (
        <div className='flex flex-col w-full min-h-screen bg-gray-900 text-gray-50 text-center'>
            <AdminHeader selected="perfil"/>
            <div className='flex flex-col justify-start sm:flex-row flex-wrap self-center p-8 py-12 mt-32 w-[300px] sm:w-[90%] top-[25%] rounded-xl border-slate-300 border
            shadow-2xl shadow-slate-600 bg-gray-900'>
                <div className='flex flex-row w-full justify-end'>
                    <label className='text-center w-full text-3xl font-bold my-4'>
                        Datos Usuario
                    </label>
                    <button className='text-slate-100 text-2xl self-center focus:outline-slate-100' onClick={()=>{setEdit(!Edit)}}>
                        {
                            Edit?
                            <TbPencilOff className='hover:scale-110'/>
                            :
                            <TbPencil className='hover:scale-110'/>
                                
                        }
                    </button>
                </div>
                <div className='flex flex-row w-full mt-3' 
                onClick={()=>{
                    if(!Edit)setEdit(true);
                }}>
                    <FaUser className='mr-2 self-center'/>
                    <input className='bg-gray-900 focus:bg-slate-800 text-slate-300 focus:outline-none
                    rounded-l-xl border border-r-0 border-slate-300 focus:border-slate-200 w-1/2 p-2 self-center text-center'
                    disabled={!Edit} name="name" type={"text"}
                    placeholder="José"
                    value={capitalizeFirstLetter(User.name)}
                    onChange={(e)=>{HandleChange(e)}}/>
                    <input className='bg-gray-900 focus:bg-slate-800 text-slate-300 focus:outline-none
                    rounded-r-xl border border-l-0 border-slate-300 focus:border-slate-200 w-1/2 p-2 self-center text-center'
                    disabled={!Edit} name="lastName" type={"text"}
                    placeholder="González"
                    value={capitalizeFirstLetter(User.lastName)}
                    onChange={(e)=>{HandleChange(e)}}/>
                </div>
                <div className='flex flex-row w-full mt-3' 
                onClick={()=>{
                    if(!Edit)setEdit(true);
                }}>
                    <FaIdCard className='mr-2 self-center'/>
                    <input className='bg-gray-900 focus:bg-slate-800 text-slate-300 focus:outline-none
                    rounded-xl border border-slate-300 focus:border-slate-200 w-full p-2 self-center text-center'
                    disabled={!Edit} name="RUT" type={"text"}
                    placeholder="11.111.111-1"
                    value={formatoRut(User.RUT)} onChange={(e)=>{HandleChange(e)}}/>
                </div>
                <div className='flex flex-row w-full mt-3' 
                onClick={()=>{
                    if(!Edit)setEdit(true);
                }}>
                    <FaEnvelope className='mr-2 self-center'/>
                    <input className='bg-gray-900 focus:bg-slate-800 text-slate-300 focus:outline-none
                    rounded-xl border border-slate-300 focus:border-slate-200 w-full p-2 self-center text-center'
                    disabled={!Edit} name="email" type={"email"}
                    placeholder="correo@correo.com"
                    value={User.email} onChange={(e)=>{HandleChange(e)}}/>
                </div>
                <div className='flex flex-row w-full mt-3' 
                onClick={()=>{
                    if(!Edit)setEdit(true);
                }}>
                    <FaPhone className='mr-2 self-center'/>
                    <input className='bg-gray-900 focus:bg-slate-800 text-slate-300 focus:outline-none
                    rounded-xl border border-slate-300 focus:border-slate-200 w-full p-2 self-center text-center'
                    disabled={!Edit} name="phone" type={"tel"}
                    placeholder="912345678"
                    value={User.phone} onChange={(e)=>{HandleChange(e)}}/>
                </div>
                <div className='flex flex-row w-full mt-3' 
                onClick={()=>{
                    if(!Edit)setEdit(true);
                }}>
                    <FaBirthdayCake className='mr-2 self-center'/>
                    <ReactDatePicker
                    className='bg-gray-900 focus:bg-slate-800 text-slate-300 focus:outline-none
                    rounded-xl border border-slate-300 focus:border-slate-200 w-full p-2 self-center text-center'
                    wrapperClassName='w-full' peekNextMonth showMonthDropdown showYearDropdown
                    locale="es" dateFormat="dd/MM/yyyy" placeholderText="Fecha inicial" name='birthDate'
                    dropdownMode="select" selected={new Date(User.birthDate)} onChange={(date)=>{setUser({...User,birthDate: date})}}/>
                </div>
                <button className='w-40 h-10 text-center hover:shadow-slate-600 shadow rounded m-8 border border-slate-300 hover:bg-slate-800 focus:outline-slate-100'
                onClick={()=>{
                    Swal.fire({
                        title:'',
                        text:'¿Desea actualizar los datos del paciente?',
                        icon:'question',
                        confirmButtonText:'Sí',
                        showCancelButton:true,
                        cancelButtonText:'No'
                      }).then((res)=>{
                        if(res.isConfirmed){
                          UpdateUser();
                        }
                      });
                }}>
                    Continuar
                </button>
            </div>
        </div>
    )
}