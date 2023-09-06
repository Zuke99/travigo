import React from 'react'
import mteverest from '../assets/mounteverest.jpg'
import { faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function PriceCard() {
  return (
    <div className='flex'>
      

      {/* Image  */}
      <div>
        <img src={mteverest} className='w-20 h-20 rounded-2xl' alt=''/>
      </div>



      {/* Name  */}
    <div className='flex-col ml-6 '>
        <h1 className='mt-3 text-lg font-medium'>Redwood Forest</h1>
        <div className='flex mt-1.5'>
        <h1 className='text-sm text-ui-grey'><FontAwesomeIcon icon={faLocationDot} /> California</h1>
        <h1 className='text-xs text-ui-grey ml-5'><FontAwesomeIcon icon={faStar} />4.9</h1>
        </div>
    </div>
    


    {/* Price */}
    <div className=' w-52 ml-20'>
        <h1 className='mt-6 ml-20 font-medium text-xl'>$150<span className='text-ui-grey text-xs'>/day</span></h1>
    </div>






    </div>
  )
}

export default PriceCard
