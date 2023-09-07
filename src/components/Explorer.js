import React from 'react'
import explorer from '../assets/explorer.png'

function Explorer(props) {
  return (
    <div className='relative bg-ui-purple h-[100%] w-[100%] rounded-3xl shadow-2xl'>

      <div className={`relative bg-ui-purple  h-[100%] w-[100%] rounded-3xl cursor-pointer `}>
        <img className={` h-[100%] w-[100%] object-cover  `}
          src={explorer}
          alt='destination' />


        <h1 className='absolute left-[30%] bottom-28 text-white text-lg font-medium cursor-pointer'>Lets Explore<br /> The Beauty.</h1>
      </div>
      <button className={`absolute bottom-7 left-7 px-16 py-4 bg-ui-green text-white rounded-2xl hover:hover:bg-ui-dark-green transition-all duration-300`}>Join Now</button>
    </div>
  )
}

export default Explorer
