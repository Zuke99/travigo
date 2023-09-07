import React from 'react'
import style from '../styling/landing.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faBell, faFilter, faGear, faHouse, faMagnifyingGlass, faPaperPlane, faTicketSimple } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faHeart, faMoneyBill1 } from '@fortawesome/free-regular-svg-icons'
import DestinationCard from './DestinationCard'
import mteverest from "../assets/mteverest.jpg"
import dubai from "../assets/dubai.jpg"
import paris from "../assets/paris.jpg"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateCalendar } from '@mui/x-date-pickers'
import PriceCard from './PriceCard'
import Explorer from './Explorer'




function Landing() {





  return (
    <div className={`${style.container}`}>
      <h1 className='pt-48 text-7xl font-bold leading-snug text-ui-black'>It's a Big World Out <br />There, Go Explore.</h1>
      <br />
      <p className='text-2xl text-ui-grey mt-2'>We always make our customers happy by providing many choices.</p>

      <div className='mt-11'>
        <button className='px-7 pb-3 pt-3 h-20 w-56 mx-4 rounded-full font-medium text-2xl drop-shadow-xl bg-ui-green text-white hover:bg-ui-dark-green transition-all duration-300'>Get Started</button>
        <button className='px-7 pb-3 pt-3 h-20 w-56 mx-4 rounded-full font-medium text-2xl drop-shadow-xl bg-white text-ui-black hover:bg-slate-100 group-hover:text-black transition-all duration-300"'>Get a Demo</button>
      </div>


      <div className='flex justify-center'>
        <div className='flex w-11/12 h-screen mt-20 bg-white rounded-[45px] drop-shadow-xl '>

          <div className='flex-col w-[250px] '>

            {/* Heading Div */}
            <div className='flex w-full'>
              {/* <FontAwesomeIcon icon={faPaperPlane} /> */}
              <h1 className=' ml-16 mt-16 h-auto w-3 text-[30px] font-semibold text-ui-black' >Travigo </h1>
              <span className=' absolute left-[180px] top-[62px] text-ui-green'> <FontAwesomeIcon icon={faPaperPlane} /></span>
            </div>
            {/* Side Menu*/}

            <div className="flex-col mt-20">
              {/* "Dashboard" divs positioned inside the parent */}
              <div className='flex-col justify-items-center'>
                <div className="bg-white text-ui-grey px-2 w-max py-1 my-0.5"><button className='hover:bg-ui-green ml-8 w-44 py-4  rounded-xl hover:text-white hover:drop-shadow-xl transition-all duration-300 flex'><div><FontAwesomeIcon icon={faHouse} className='pl-4' /> &nbsp;Dashboard</div></button></div>
                <div className="bg-white text-ui-grey px-2 w-max py-1 my-0.5"><button className='hover:bg-ui-green ml-8 w-44 py-4  rounded-xl hover:text-white hover:drop-shadow-xl transition-all duration-300 flex'><div><FontAwesomeIcon icon={faTicketSimple} className='pl-4' /> &nbsp;My Tickets</div></button></div>
                <div className="bg-white text-ui-grey px-2 w-max py-1 my-0.5"><button className='hover:bg-ui-green ml-8 w-44 py-4  rounded-xl hover:text-white hover:drop-shadow-xl transition-all duration-300 flex'><div><FontAwesomeIcon icon={faHeart} className='pl-4' /> &nbsp;Favourite</div></button></div>
                <div className="bg-white text-ui-grey px-2 w-max py-1 my-0.5"><button className='hover:bg-ui-green ml-8 w-44 py-4  rounded-xl hover:text-white hover:drop-shadow-xl transition-all duration-300 flex'><div><FontAwesomeIcon icon={faEnvelope} className='pl-4' /> &nbsp;Message</div></button></div>
                <div className="bg-white text-ui-grey px-2 w-max py-1 my-0.5"><button className='hover:bg-ui-green ml-8 w-44 py-4  rounded-xl hover:text-white hover:drop-shadow-xl transition-all duration-300 flex'><div><FontAwesomeIcon icon={faMoneyBill1} className='pl-4' /> &nbsp;Transaction</div></button></div>
                <div className="bg-white text-ui-grey px-2 w-max py-1 my-0.5"><button className='hover:bg-ui-green ml-8 w-44 py-4  rounded-xl hover:text-white hover:drop-shadow-xl transition-all duration-300 flex'><div><FontAwesomeIcon icon={faGear} className='pl-4' /> &nbsp;Settings</div></button></div>
              </div>
            </div>

            <div className=' mt-40 h-20'>

              <div className="bg-white text-ui-grey px-2 w-max py-1 my-0.5"><button className='hover:bg-ui-green ml-8 w-44 py-4  rounded-xl hover:text-white hover:drop-shadow-xl transition-all duration-300 flex'><div><FontAwesomeIcon icon={faArrowRightFromBracket} className='pl-4' /> &nbsp;Log Out</div></button></div>
            </div>






          </div>


          <div className='absolute flex-col w-[62%] h-[95%] mt-6 ml-64 bg-ui-green-grey rounded-[45px] '>

            <div className='flex justify-between'>
              <div>
                <h1 className='ml-0 mt-14 text-[30px] font-medium text-ui-black'>Hello, Dheeraj! 👋 </h1>
                <h1 className='ml-11 mt-1 text-md font-light text-ui-grey'>Welcome back and explore the world. </h1>
              </div>


              <div className='flex  w-2/4 justify-between'>
                <div>
                  <input className='w-72 h-14 mt-12 ml-10 rounded-3xl pl-12 text-sm text-ui-black  focus:border-2 focus:border-ui-green' placeholder='Search Destination...' /><FontAwesomeIcon className="absolute right-[42%] top-[66px] text-ui-grey" icon={faMagnifyingGlass} />
                </div>
                <div>
                  <button className='px-[12px] py-2 mt-[50px] mr-24 bg-white rounded-full'><FontAwesomeIcon icon={faBell} className='w-7 h-7' /></button>
                </div>
              </div>

            </div>


            <div className='flex h-96  justify-evenly pt-5'>
              <div >
                <DestinationCard image={mteverest} name="Mount Everest" />
              </div>
              <div>
                <DestinationCard image={dubai} name="Burj Khalifa" />
              </div>
              <div>
                <DestinationCard image={paris} name="World Tour" />
              </div>
            </div>

            {/* LOWER DIV  */}

            <div className='flex h-96  '>

              <div className=' ml-11 w-[59%] h-[85%] bg-white rounded-[45px]'>
                <div className='flex  h-20 w-full justify-between'>

                  <p className='text-2xl font-medium mt-5 ml-7'> Best Destination 🌈 <br /> <span className='text-ui-grey text-sm font-normal mr-16'>100 Destination Found</span></p>

                  <div className=' w-44'>
                    <button className='mt-8 ml-7 px-3 py-1 text-ui-black border-ui-grey border rounded-md hover:shadow-md transition-all duration-200'><FontAwesomeIcon icon={faFilter} /> Filters</button>
                  </div>
                </div>

                <div className='flex-col h-[75%]  justify-between'>
                  <div className='flex ml-5 mt-4'>
                    <PriceCard />
                  </div>
                  <div className='flex ml-5 mt-4'>
                    <PriceCard />
                  </div>

                </div>

              </div>

              <div className='flex  w-[35%]'>
                <div className='ml-12'>
                  <Explorer />
                </div>
              </div>


            </div>




          </div>



          {/* RIght SIde */}
          <div className='border w-full h-full ml-[64%]'>
            <div className='border h-[15%]'>
              Name and logo
            </div>

            <div className='h-[50%]'>

              <DateCalendar

              // sx={{
              // svg:{ color },
              // input: { color },
              // label: { color },
              // accentColor: {color},
              // background :{color},
              // bgcolor : {color},
              // backgroundColor : {"#000000"}
              // color:{color}
              //columnRuleColor : {color}
              //fill:{color}
              //floodColor:{color}
              //textDecorationColor : {color}
              //colorAdjust:{color}
              //borderColor:{color}
              //forcedColorAdjust : {color}


              // }}


              />
              {/* <DateCalendar className='' /> */}
            </div>




          </div>


        </div>
      </div>

      {/* Best Destination  */}

      <div className='mt-20 h-80 border bg-black'>
        Journeys
      </div>
    </div>

  )
}

export default Landing
