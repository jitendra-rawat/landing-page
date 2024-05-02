import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

const Location = () => {
  return (
    <section className='py-20 bg-center bg-cover bg-purple-700' style={{backgroundImage: "url('../src/assets/location.png')"}}>


        <div className='max-w-sm lg:max-w-5xl mx-auto container flex flex-wrap justify-between items-center'>

       

        {/* left section */}
        <div className='lg:w-1/2'> 
        <FaLocationDot color='black' size={60} className='bg-gray-200 p-4 rounded-full' />
        <p className='text-[60px] text-white font-mazzard'>San Francisco <br /> AI Conference!</p>
        </div>


         {/* right section */}
         <div className='lg:w-1/2 flex gap-8 flex-wrap'>

          <div className='bg-white p-4 w-[200px] '>
            <p className='text-[95px] text-center font-bold text-[#5603B4]'>30</p>
            <p className='text-[20px] text-center text-[#5603B4] font-mazzard'>Skilled Speaker</p>

          </div>

          
          <div className= 'relative lg:top-10 bg-[#5603B4] p-4 w-[200px] '>
            <p className='text-[95px] text-center font-bold text-white'>2x</p>
            <p className='text-[20px] text-center text-white font-mazzard'>Networking with Industry</p>

          </div>

          <div className='bg-[#5603B4] p-4 w-[200px] '>
            <p className='text-[95px] text-center font-bold text-white'>4</p>
            <p className='text-[20px] text-center text-white font-mazzard'>Days Full
of Inspiration</p>

          </div>

          <div className='bg-white p-4 w-[200px] relative top-10'>
            <p className='text-[95px] text-center font-bold text-[#5603B4]'>15</p>
            <p className='text-[20px] text-center text-[#5603B4] font-mazzard'>Unique Workshop</p>

          </div>
            
            </div>



            </div>

    </section>
  )
}

export default Location