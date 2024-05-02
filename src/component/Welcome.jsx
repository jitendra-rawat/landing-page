import React from 'react'
import conf from '../assets/conf.png'

const Welcome = () => {
  return (
   <section className= 'py-20 max-w-sm lg:max-w-5xl mx-auto container flex flex-wrap  justify-between  items-center'>


    {/* left section */}

    <div className='lg:w-1/2'>
        <p className='text-[#C7C0B6] text-lg  font-bold mb-2'>Welcome to</p>
        <h4 className='text-[60px] font-bold text-2xl leading-[60px] mb-8 font-mazzard'>San Francisco <br /> <span className='text-[#8D36DF]'> AI Conference! </span></h4>
       
        <img className='object-cover w-[450px]' src={conf} alt="" />

    </div>


    {/* right section */}

    <div className='lg:w-1/2'>
        <p className='mb-4 text-left font-mazzard leading-[30px]' >Join us for an extraordinary event at the forefront of artificial intelligence innovation. Founded by a passionate group of technologists and engineers, the San Francisco AI Conference is the ultimate gathering for those eager to explore the limitless potential of AI. Prepare to be captivated by thought-provoking discussions, enlightening presentations, and unrivaled networking opportunities.</p>

 <p className='mb-4 text-left font-mazzard leading-[30px]'>At the San Francisco AI Conference, we go beyond the ordinary. Our mission is to delve into AI topics that have yet to be thoroughly explored. Join us as we uncover the groundbreaking impacts of AI across various industries and sectors. From technical innovation to the realms of art, music, criminal justice, immigration, and countless others, we'll shed light on the limitless possibilities that AI holds for the future</p>
   
   <p className='text-left font-mazzard leading-[30px] font-bold'>What sets us apart are the prestigious and world-renowned speakers who will grace our stage. These luminaries, experts in their respective fields, will share their insights, experiences, and visions for the future of AI. Be prepared to be inspired, challenged, and enlightened as they take you on an extraordinary journey.</p>
    
    </div>



   </section>
  )
}

export default Welcome