import React from 'react'
import { FaFacebook, FaTwitter } from "react-icons/fa";
import team1 from '../assets/team1.png'
import team2 from '../assets/team2.png'
import team3 from '../assets/team3.png'
import team4 from '../assets/team4.png'
import team5 from '../assets/team5.png'
import team6 from '../assets/team6.png'

const Speakers = () => {
  return (
    <>
    
    <section className='bg-purple-700 py-20' >


    
        <div className='max-w-5xl mx-auto container'>
            <p className='mb-4 text-center text-white text-lg'>Leaders and experts</p>
            <h2 className='mb-4 text-center text-white text-4xl font-semibold font-mazzard'>FEATURED <span className='font-bold'>SPEAKERS</span> </h2>
            <p className='text-white max-w-2xl mx-auto container text-center text-lg font-mazzard'>Anticipate a dynamic assembly of visionary thinkers and seasoned specialists, who will generously impart their wisdom, perspectives, and prognostications in the field.</p>



        </div>

    </section>


<section className='py-20 flex flex-wrap gap-8 justify-between items-center max-w-5xl mx-auto container'>


    <div >
        <img className='w-[318px] h-[414px] object-cover rounded-t-full rounded-b-full bg-[#FDF6FF] p-4' src={team1} alt="" />
        <p className='text-center mt-4 text-[30px] text-[#8D36DF] font-mazzard'>Lorem Lipsum </p>
        <p className='text-center mb-4 text-[14px] text-[#626F7E] font-mazzard'>Creative Designer</p>

        <div className='bg-[#F1F1F1] px-4 py-2 w-[123px] mx-auto flex gap-8 justify-center'>

        <FaFacebook size={24} />
        <FaTwitter size={24}/>

        </div>
    </div>

    <div >
        <img className='w-[318px] h-[414px] object-cover rounded-t-full rounded-b-full bg-[#FDF6FF] p-4' src={team2} alt="" />
        <p className='text-center mt-4 text-[30px] text-[#8D36DF] font-mazzard'>Lorem Lipsum </p>
        <p className='text-center mb-4 text-[14px] text-[#626F7E] font-mazzard'>Creative Designer</p>

        <div className='bg-[#F1F1F1] px-4 py-2 w-[123px] mx-auto flex gap-8 justify-center'>

        <FaFacebook size={24} />
        <FaTwitter size={24}/>

        </div>
    </div>

    <div >
        <img className='w-[318px] h-[414px] object-cover rounded-t-full rounded-b-full bg-[#FDF6FF] p-4' src={team3} alt="" />
        <p className='text-center mt-4 text-[30px] text-[#8D36DF] font-mazzard'>Lorem Lipsum </p>
        <p className='text-center mb-4 text-[14px] text-[#626F7E] font-mazzard'>Creative Designer</p>
        <div className='bg-[#F1F1F1] px-4 py-2 w-[123px] mx-auto flex gap-8 justify-center'>

        <FaFacebook size={24} />
        <FaTwitter size={24}/>

        </div>
    </div>


    <div >
        <img className='w-[318px] h-[414px] object-cover rounded-t-full rounded-b-full bg-[#FDF6FF] p-4' src={team4} alt="" />
        <p className='text-center mt-4 text-[30px] text-[#8D36DF] font-mazzard'>Lorem Lipsum </p>
        <p className='text-center mb-4 text-[14px] text-[#626F7E] font-mazzard'>Creative Designer</p>

        <div className='bg-[#F1F1F1] px-4 py-2 w-[123px] mx-auto flex gap-8 justify-center'>

        <FaFacebook size={24} />
        <FaTwitter size={24}/>

        </div>
    </div>

    <div >
        <img className='w-[318px] h-[414px] object-cover rounded-t-full rounded-b-full bg-[#FDF6FF] p-4' src={team5} alt="" />
        <p className='text-center mt-4 text-[30px] text-[#8D36DF] font-mazzard'>Lorem Lipsum </p>
        <p className='text-center mb-4 text-[14px] text-[#626F7E] font-mazzard'>Creative Designer</p>

        <div className='bg-[#F1F1F1] px-4 py-2 w-[123px] mx-auto flex gap-8 justify-center'>

        <FaFacebook size={24} />
        <FaTwitter size={24}/>

        </div>
    </div>

    <div >
        <img className='w-[318px] h-[414px] object-cover rounded-t-full rounded-b-full bg-[#FDF6FF] p-4' src={team6} alt="" />
        <p className='text-center mt-4 text-[30px] text-[#8D36DF] font-mazzard'>Lorem Lipsum </p>
        <p className='text-center mb-4 text-[14px] text-[#626F7E] font-mazzard'>Creative Designer</p>

        <div className='bg-[#F1F1F1] px-4 py-2 w-[123px] mx-auto flex gap-8 justify-center'>

        <FaFacebook size={24} />
        <FaTwitter size={24}/>

        </div>
    </div>

</section>

    </>
  )
}

export default Speakers