"use client"
import React from 'react'
import Navlinks from '..'
import NavbarItems from './NavbarItems'

const Navbar = () => {
  return (
    <div className='flex justify-between  items-center w-full h-[70px]'>
     <div>
      <h1 className='font-semibold text-md-sb'>Online S<span className='text-error-600'>tor</span>e</h1>
     </div>

     <div>
      <NavbarItems items={Navlinks}/>
     </div>

     <div>
      <button className='bg-base-black py-2 px-3 text-base-white text-sm rounded shadow'>Contact Us</button>
     </div>
    </div>
  )
}

export default Navbar