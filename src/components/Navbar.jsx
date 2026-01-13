import React from 'react'
import logo from "../assets/github.svg"
const Navbar = () => {
  return (
    <nav className='bg-slate-700 w-full h-[40px] px-3 flex justify-between'>
      <div>
        <span className='text-green-600 text-3xl font-bold'>&lt;</span>
        <span className='text-white text-xl'>op</span>
        <span className='text-green-600 text-2xl font-semibold'>PASS</span>
        <span className='text-green-600 text-3xl font-bold'>&gt;</span>
      </div>
      <div>
        <a href="https://github.com/Bidhan012-ops?tab=repositories">
         <img width="30" height="30" alt="GitHub Logomark" className="height-auto mt-2 sm:mr-30 mr-3 cursor-pointer hover:bg-green-500 transition-all duration-100 text-green-600" src={logo}></img>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
