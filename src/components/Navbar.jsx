import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/paste_logo.png';

const Navbar = () => {
  
  return (
    <div className="bg-[#121928] text-white py-4 shadow-lg">
      <div className="flex flex-row justify-between items-center px-[15vw]">
        <div className="flex flex-row items-center gap-8">
          <img src={logo} alt="logo" className="w-12 h-12" />
          <NavLink 
            to="/" 
            className="text-gray-300 hover:text-purple-500 font-medium text-lg transition duration-300"
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink 
            to="/pastes" 
            className="text-gray-300 hover:text-purple-500 font-medium text-lg transition duration-300"
          >
            My Pastes
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar