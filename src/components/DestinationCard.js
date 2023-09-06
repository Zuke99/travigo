import React from 'react'


function DestinationCard(props) {

    

   
  return (
    <div className='relative bg-black h-[340px] w-64 rounded-3xl shadow-2xl'>
        
    <div className={`relative bg-black h-[340px] w-64 rounded-3xl hover:opacity-80 cursor-pointer transition-all duration-300`}> 
  <img className={`h-[340px] w-64 rounded-3xl shadow-2xl object-cover opacity-95 group-hover:opacity-0 transition-all duration-300 `}
  src={props.image} 
  alt='destination'/>

  
 <label className='absolute left-6 bottom-8 text-white text-lg font-medium cursor-pointer'>{props.name}</label>
 </div>
 <button className={`absolute h-10 bg-ui-green hidden group-hover:block group-hover: visible`}>Book Tickets</button>
</div> 

  ) 
}

export default DestinationCard
