import React, { useState } from 'react'


function DestinationCard(props) {
    const [visibility, setVisibility] = useState("hidden");
    console.log(visibility);

    function setVisibilityHandle(){
        setVisibility("visible");
    }
  return (
    <div className='relative bg-black h-[360px] w-64 rounded-3xl'>
        
    <div className={`relative bg-black h-[360px] w-64 rounded-3xl hover:opacity-80 cursor-pointer hover:${setVisibilityHandle} `}> 
  <img className={`h-[360px] w-64 rounded-3xl shadow-2xl object-cover opacity-95 group-hover:opacity-0  `}
  src={props.image} 
  alt='destination'/>

  
 <label className='absolute left-6 bottom-8 text-white text-lg font-medium cursor-pointer'>{props.name}</label>
 </div>
 <button className={`absolute h-10 bg-ui-green hidden group-hover:block group-hover: visible`}>Book Tickets</button>
</div> 

  ) 
}

export default DestinationCard
