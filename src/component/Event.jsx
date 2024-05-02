import React from 'react'
import { MdArrowOutward } from "react-icons/md";


const Event = () => {
  return (

  <div className='bg-gradient-to-r from-[#5603B4] to-[#CB00FF]'>

 
   <section className=' py-20 ' style={{backgroundImage: "url('../src/assets/event2.png')"}}>

    <div className='max-w-sm lg:max-w-5xl mx-auto container '>
    <h2 className='mb-8  text-center text-2xl lg:text-[60px] lg:leading-[60px]  text-white font-mazzard'>DON'T MISS OUT ON <br />
<span className='font-bold'> THIS EXTRAORDINARY EVENT!</span></h2>

<p className='text-[18px] text-center text-white font-mazzard max-w-3xl mx-auto'>Register now to secure your spot at the San Francisco AI Conference. Experience the thrill of being part of a groundbreaking conference that pushes the boundaries of AI exploration. Together, let's unlock the limitless possibilities of artificial intelligence.</p>
  
   <div className='flex justify-center mt-8'>
  <button className='px-8 py-3 bg-white text-[#5603B4] rounded-full font-mazzard flex gap-2 items-center'>  <MdArrowOutward size={24} color='#5603B4' /> Register Now</button>
   </div>
  
    </div>


   </section>


   </div>
  )
}

export default Event