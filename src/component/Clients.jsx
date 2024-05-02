import React from 'react'
import client1 from '../assets/client1.png'
import client2 from '../assets/client2.png'
import client3 from '../assets/client3.png'
import client4 from '../assets/client4.png'
import client5 from '../assets/client5.png'
import client6 from '../assets/client6.png'
import client7 from '../assets/client7.png'

const Clients = () => {
  return (
    <section className='bg-black py-8 '>
        <div className='max-w-sm lg:max-w-5xl mx-auto container flex flex-wrap items-center justify-between  '>


        <img src={client7} alt="" />
            <img src={client1} alt="" />
            <img src={client2} alt="" />
            <img src={client3} alt="" />
            <img src={client4} alt="" />
            <img src={client5} alt="" />
            <img src={client6} alt="" />
           
         



        </div>
    </section>
  )
}

export default Clients