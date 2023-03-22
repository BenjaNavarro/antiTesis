import React from 'react';
import { Link } from 'react-router-dom';
import MenuToolTip from './modals/MenuToolTip/MenuToolTip';


const Header = (props) => {

    const user = JSON.parse(localStorage.getItem('userLoged'));

    // useEffect(()=>{
    //   console.log('Header');
    //   console.log({user});
    // },[]);

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
        <div className='hidden md:hidden w-3/4 lg:flex justify-end items-center'>
            <Link to={'/login'}>
                <label className={'text-slate-100 cursor-pointer hover:border-b-[0.5px] border-slate-100 '+(props.selected === "login"?" border-b border-slate-100 font-bold":null)}>
                    Login
                </label>
            </Link>
        </div>
            <div className='flex items-center  sm:flex sm:items-end md:flex xl:hidden lg:hidden md:items-end sm:self-center md:self-center'>
                <MenuToolTip/>
            </div>
        </div>
    )
}

export default Header;