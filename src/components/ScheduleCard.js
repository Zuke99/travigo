import React from 'react'
import sahara from "../assets/sahara.jpg"
import b1 from "../assets/b1.png"
import b2 from "../assets/b2.png"
import b3 from '../assets/b3.png'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function ScheduleCard() {
  return (
    <div className='flex border rounded-3xl w-11/12 h-28'>
      <div className=' w-24 h-4/5 rounded-3xl ml-3 mt-2'>
        <img src={sahara} alt='' className='rounded-3xl object-cover h-full w-full'/>
      </div>
      <div className='relative w-48 h-5/6 mt-3'>
        <h1 className='flex ml-4 text-lg font-medium'>Sahara Desert</h1>
        <h1 className='flex ml-7 text-[13px] text-ui-grey '><FontAwesomeIcon icon={faCalendar} className='flex absolute top-[30px] left-[17px]'  /> &nbsp; 16-June - 20-June</h1>
        <div className='flex relative'>
            <button className='absolute bg-[#e74c3c] rounded-full h-[26px] w-[26px] border-white border-2 left-3'><img src={b1} alt='b1' className='rounded-full' /></button>
            <button className='absolute bg-[#2980b9] rounded-full h-[26px] w-[26px] border-white border-2 left-7'><img src={b2} alt='b1' className='rounded-full' /></button>
            <button className='absolute bg-[#f1c40f] rounded-full h-[26px] w-[26px] border-white border-2 left-11'><img src={b3} alt='b1' className='rounded-full' /></button>
            <h1 className='ml-[73px] text-md text-ui-green font-semibold'>+2</h1>
        </div>
      </div>
    </div>
  )
}

export default ScheduleCard
