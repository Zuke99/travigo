import React, { useState } from 'react'
import style from '../styling/landing.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faHouse, faTicketSimple } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faHeart, faMoneyBill1 } from '@fortawesome/free-regular-svg-icons'
import DestinationCard from './DestinationCard'
import mteverest from "../assets/mteverest.jpg"
import dubai from "../assets/dubai.jpg"
import paris from "../assets/paris.jpg"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Calendar from 'react-calendar'
import { DateRangePicker } from 'react-date-range'
import { addDays } from 'date-fns'
import { DatePicker, DateTimePicker } from '@mui/x-date-pickers'



function Landing() {

  function handleSelect(ranges){
    console.log(ranges); // native Date object
  }

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  }

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
      color:'#29B588'
    }
  ]);

  return (
    <div className={`${style.container}`}>
      <h1 className='pt-48 text-7xl font-bold leading-snug text-ui-black'>It's a Big World Out <br/>There, Go Explore.</h1>
      <br/>
      <p className='text-2xl text-ui-grey mt-2'>We always make our customers happy by providing many choices.</p>

      <div className='mt-11'>
        <button className='px-7 pb-3 pt-3 h-20 w-56 mx-4 rounded-full font-medium text-2xl drop-shadow-xl bg-ui-green text-white group-hover:bg-ui-green group-hover:text-black transition-all duration-300"'>Get Started</button>
        <button className='px-7 pb-3 pt-3 h-20 w-56 mx-4 rounded-full font-medium text-2xl drop-shadow-xl bg-white text-ui-black group-hover:bg-ui-green group-hover:text-black transition-all duration-300"'>Get a Demo</button>
      </div>

      
      <div className='flex justify-center'>
        <div className='flex w-11/12 h-screen mt-20 bg-white rounded-[45px] drop-shadow-xl '>

          <div className='flex-col w-[250px] '>

        {/* Heading Div */}
        <div className='flex w-full'>
        {/* <FontAwesomeIcon icon={faPaperPlane} /> */}
          <h1 className=' ml-16 mt-16 h-auto w-3 text-[30px] font-semibold text-ui-black' >Travigo </h1>
        </div>
        {/* Side Menu*/}
     
  <div className="flex-col mt-20">
    {/* "Dashboard" divs positioned inside the parent */}
    <div className='flex-col justify-items-center'>
    <div className="bg-white text-ui-grey px-2 w-max py-1 my-0.5"><button className='hover:bg-ui-green ml-8 w-44 py-4  rounded-xl hover:text-white hover:drop-shadow-xl transition-all duration-300 flex'><div><FontAwesomeIcon icon={faHouse} className='pl-4'/> &nbsp;Dashboard</div></button></div>
    <div className="bg-white text-ui-grey px-2 w-max py-1 my-0.5"><button className='hover:bg-ui-green ml-8 w-44 py-4  rounded-xl hover:text-white hover:drop-shadow-xl transition-all duration-300 flex'><div><FontAwesomeIcon icon={faTicketSimple} className='pl-4'/> &nbsp;My Tickets</div></button></div>
    <div className="bg-white text-ui-grey px-2 w-max py-1 my-0.5"><button className='hover:bg-ui-green ml-8 w-44 py-4  rounded-xl hover:text-white hover:drop-shadow-xl transition-all duration-300 flex'><div><FontAwesomeIcon icon={faHeart}  className='pl-4'/> &nbsp;Favourite</div></button></div>
    <div className="bg-white text-ui-grey px-2 w-max py-1 my-0.5"><button className='hover:bg-ui-green ml-8 w-44 py-4  rounded-xl hover:text-white hover:drop-shadow-xl transition-all duration-300 flex'><div><FontAwesomeIcon icon={faEnvelope} className='pl-4'/> &nbsp;Message</div></button></div>
    <div className="bg-white text-ui-grey px-2 w-max py-1 my-0.5"><button className='hover:bg-ui-green ml-8 w-44 py-4  rounded-xl hover:text-white hover:drop-shadow-xl transition-all duration-300 flex'><div><FontAwesomeIcon icon={faMoneyBill1}  className='pl-4'/> &nbsp;Transaction</div></button></div>
    <div className="bg-white text-ui-grey px-2 w-max py-1 my-0.5"><button className='hover:bg-ui-green ml-8 w-44 py-4  rounded-xl hover:text-white hover:drop-shadow-xl transition-all duration-300 flex'><div><FontAwesomeIcon icon={faGear}  className='pl-4'/> &nbsp;Settings</div></button></div>
    </div>
  </div>






          </div>


          <div className='absolute flex-col w-[62%] h-[95%] mt-6 ml-64 bg-ui-green-grey rounded-[45px] '>

            <div className='flex justify-between'>
              <div>
                <h1 className='ml-0 mt-14 text-[30px] font-medium text-ui-black'>Hello, Dheeraj! 👋 </h1>
                <h1 className='ml-11 mt-1 text-md font-light text-ui-grey'>Welcome back and explore the world. </h1>
              </div>
              <div className='border w-2/4 '>

              </div>

            </div>


            <div className='flex h-96  justify-evenly pt-5'>
              <div >
              <DestinationCard image={mteverest} name="Mount Everest"/>
              </div>
              <div>
              <DestinationCard image={dubai} name="Burj Khalifa"/>
              </div>
              <div>
                <DestinationCard image={paris} name="World Tour"/>
              </div>
            </div>

            <div className='bg-white h-96 border'>

            </div>




          </div>



          {/* RIght SIde */}
          <div className='border w-full h-full ml-[64%]'>
            <div className='border h-[15%]'>
              Name and logo
            </div>

            <div className='h-[50%] border'>
          
            </div>

          </div>


        </div>
      </div>



      <div className='mt-20 h-80 bg-white'>

      </div>
    </div>

  )
}

export default Landing
