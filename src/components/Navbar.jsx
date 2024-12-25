import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/paste_logo.png';

const Navbar = () => {
  
  return (
    <div className='flex flex-row justify-between items-center  mt-[-10px] shadow-lg'>
      <div className='flex flex-row gap-[7vw] items-center mr-6'>
      <img src={logo} alt="logo" className='w-[80px] h-[80px]' />
      <NavLink to="/">Home</NavLink>
      </div>
      <div className='mr-[7vw]'>
      <NavLink to="/pastes">My Pastes</NavLink>
      </div>
        

    </div>
  )
}

export default Navbar