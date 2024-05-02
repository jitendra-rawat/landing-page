import React, { useState, useEffect } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';


const Header = () => {
  const [days, setDays] = useState(35);
  const [hours, setHours] = useState(23);
  const [minutes, setMinutes] = useState(28);
  const [seconds, setSeconds] = useState(8);

  useEffect(() => {
    const timer = setInterval(() => {
      // Update the timer
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          if (hours > 0) {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          } else {
            if (days > 0) {
              setDays(days - 1);
              setHours(23);
              setMinutes(59);
              setSeconds(59);
            } else {
              clearInterval(timer);
            }
          }
        }
      }
    }, 1000);

   
    return () => clearInterval(timer);
  }, [days, hours, minutes, seconds]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <header className="bg-center bg-cover bg-no-repeat  h-screen pt-40  " style={{backgroundImage: "url('https://img.freepik.com/free-vector/gradient-network-connection-background_23-2148872043.jpg?size=626&ext=jpg&ga=GA1.1.369241667.1712923266&semt=ais')"}}>

      <div className='max-w-sm lg:max-w-5xl mx-auto container  '>

        <h2 className="text-4xl lg:text-7xl text-white mb-4 font-ethnocentric font-bold">San Francisco</h2>
        <h2 className="text-4xl lg:text-7xl text-white mb-4 font-bold ">AI Conference!</h2>
        <p className='text-white text-lg lg:text-2xl mb-4 font-poppins'>Join us for an extraordinary event at the forefront of <br /> artificial intelligence innovation.</p>

        <div className="flex gap-3 items-center mb-8">
          <div className="flex">
            <img src={hero1} alt="" />
            <img src={hero2} className="-ml-2" alt="" />
            <img src={hero3} className="-ml-2"  alt="" />
          </div>

          <div className="flex items-center">
            <p className='text-white font-mazzard'>Skilled Speakers</p>
            <MdArrowOutward size={24} color="violet" />
          </div>
        </div>

        <div className="flex gap-1 lg:gap-4 mb-8">
  <div className=" font-mazzard bg-gradient-to-b from-[#CB00FF] to-t-[#5603B400] lg:text-2xl text-white py-4 px-2 lg:px-6 rounded-xl text-center ">{formatTime(days)} <br /> Days</div>
  <div className=" text-2xl text-white  my-auto font-bold">:</div>
  <div className="font-mazzard bg-gradient-to-b from-[#CB00FF] to-t-[#5603B400] lg:text-2xl text-white py-4 px-2 lg:px-6 rounded-xl text-center">{formatTime(hours)} <br />  Hours</div>
  <div className=" text-2xl text-white  my-auto font-bold">:</div>
  <div className="font-mazzard bg-gradient-to-b from-[#CB00FF] to-t-[#5603B400] lg:text-2xl text-white py-4 px-2 lg:px-6 rounded-xl text-center">{formatTime(minutes)} <br /> Minutes</div>
  <div className=" text-2xl text-white  my-auto font-bold">:</div>
  <div className="font-mazzard bg-gradient-to-b from-[#CB00FF] to-t-[#5603B400] lg:text-2xl text-white py-4 px-2 lg:px-6 rounded-xl text-center">{formatTime(seconds)} <br /> Seconds</div>
</div>


       <div className='flex gap-4 mb-8'>

        <button className='bg-gray-200 rounded-full text-sm px-8 py-4  font-mazzard flex gap-2 items-center'> <MdArrowOutward  size={24} color='purple'/>  Buy Tickets</button>

        <button className='bg-[#8D36DF]  text-white rounded-full text-sm px-8 py-4 font-mazzard flex gap-2 items-center'> <MdArrowOutward  size={24} color='white'/> Read More</button>

       </div>


       <div className='bg-gray-200 px-2 gap-2 rounded-2xl lg:px-8 py-4 lg:rounded-full flex flex-wrap items-center justify-between '>
        <p className='text-2xl font-mazzard font-bold'>Join us at 7th San Francisco AI Conference! July 5-9 2018.</p>
        <button className='bg-gradient-to-r from-[#5603B4] to-l-[#CB00FF] px-8 py-4 text-white rounded-full font-mazzard flex items-center gap-1'>      <MdArrowOutward size={24} color="white" /> Register Now</button>

       </div>

      </div>
    </header>
  );
};

export default Header;
