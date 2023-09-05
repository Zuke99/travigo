import React from 'react'

function Navbar() {
  return (
    <div className='fixed top-0 left-0 w-full bg-transparent p-4 z-10'>
      <ul className='flex justify-between py-12 items-center' >
        <div className='px-12 font-semibold text-3xl'>
            Travigo
        </div>
        
        <div className='flex text-xl font-normal items-center'>
  <li className='px-9 cursor-pointer relative group'>
    Home
    <span className="absolute left-12 right-12 top-5 h-1 rounded-lg bg-ui-green transform scale-x-0 transition-transform group-hover:scale-x-100 mt-2"></span>
  </li>

  <li className='px-9 cursor-pointer relative group'>
    About
    <span className="absolute left-12 right-12 top-5 h-1 rounded-lg bg-ui-green transform scale-x-0 transition-transform group-hover:scale-x-100 mt-2"></span>
  </li>

  <li className='px-9 cursor-pointer relative group'>
    Pricing
    <span className="absolute left-12 right-12 top-5 h-1 rounded-lg bg-ui-green transform scale-x-0 transition-transform group-hover:scale-x-100 mt-2"></span>
  </li>

  <li className='px-9 cursor-pointer relative group'>
    Contact
    <span className="absolute left-12 right-12   top-5 h-1 rounded-lg bg-ui-green transform scale-x-0 transition-transform group-hover:scale-x-100 mt-2"></span>
  </li>

  <li className='px-9 cursor-pointer relative group'>
    Blog
    <span className="absolute left-12 right-12  top-5 h-1 rounded-lg bg-ui-green transform scale-x-0 transition-transform group-hover:scale-x-100 mt-2"></span>
  </li>
</div>


<div className='flex px-12 text-xl font-normal items-center'>
  <li className='cursor-pointer relative group'>
    <button className='px-7 pb-3 pt-3 h-17 rounded-3xl bg-ui-green text-white group-hover:bg-ui-green group-hover:text-black transition-all duration-300'>Login</button>
  </li>
  <li className='cursor-pointer relative group'>
    <button className='px-7 pb-3 pt-3 h-17 rounded-3xl bg-transparent text-black group-hover:text-white transition-all duration-300'>Register</button>
  </li>
</div>

      </ul>
    </div>
  )
}

export default Navbar
