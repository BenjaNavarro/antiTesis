import React from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { Popover} from '@headlessui/react';
import { GiHamburgerMenu } from 'react-icons/gi';

const MenuToolTip = (props) => {

  return(
    <Popover className='relative'>
      <Popover.Button>
        <GiHamburgerMenu className='text-slate-100 cursor-pointer text-center'/>
      </Popover.Button>
        <Popover.Panel className='absolute right-[40%] z-10'>
          <div className='flex flex-col bg-gray-900 border border-slate-100 rounded-lg p-2'>
            <Link to='/'>
              <label className='text-slate-100 cursor-pointer'>Home</label>
            </Link>
            <Link to='/login'>
              <label className='text-slate-100 cursor-pointer'>Login</label>
            </Link>
            <Link to='/call'>
              <label className='text-slate-100 cursor-pointer'>Videollamada</label>
            </Link>
          </div>
        </Popover.Panel>
    </Popover>
  );

  // return (
  //   <Popup position='left bottom'
  //   closeOnDocumentClick
  //   contentStyle={{ width: "13%", borderRadius: "1rem", position: 'relative', zIndex: "2" }}
  //   on='click'
  //   nested
  //   trigger={
  //     <GiHamburgerMenu ref={innerRef} className='text-slate-100 cursor-pointer text-center'/>
  //   }>
  //     <span className='flex flex-col bg-gray-800'>
  //       <label className='text-slate-100'>Home</label>
  //       <label className='text-slate-100'>Login</label>
  //       <label className='text-slate-100'>Videollamada</label>
  //     </span>
  //   </Popup>
  // )
}

export default MenuToolTip