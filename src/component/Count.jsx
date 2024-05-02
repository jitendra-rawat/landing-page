import React, { useEffect, useState } from "react";

const Count = () => {
  const [days, setDays] = useState(35);
  const [hours, setHours] = useState(23);
  const [minutes, setMinutes] = useState(28);
  const [seconds, setSeconds] = useState(8);

  useEffect(() => {
    const timer = setInterval(() => {
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
    <section className="bg-black py-20">
      <div className="max-w-sm lg:max-w-5xl mx-auto container flex flex-wrap justify-between items-center">
        <div className="lg:w-1/2">
          <p className="text-[48px] text-white leading-[50px] font-mazzard">
            Count Every <br />{" "}
            <span className="text-[#8D36DF] font-bold">Second Until Event</span>{" "}
          </p>
        </div>

        <div className="lg:w-1/2 flex items-center gap-2 mt-4 lg:mt-0 ">
          <div className="flex flex-col text-3xl lg:text-[60px] font-bold text-white  px-6 lg:leading-[60px] text-center">
            {formatTime(days)}{" "}
            <span className="text-[11px] text-[#626F7E] font-mazzard -mt-4">
              Days
            </span>
          </div>
          <div className="text-xl  lg:text-6xl text-white  my-auto font-bold lg:-mt-1">
            :
          </div>

          <div className="flex flex-col text-3xl lg:text-[60px] font-bold text-white  px-6 lg:leading-[60px] text-center">
            {formatTime(hours)}{" "}
            <span className="text-[11px] text-[#626F7E]  font-mazzard -mt-4">
              Hours
            </span>
          </div>

          <div className=" text-xl lg:text-6xl text-white  my-auto font-bold lg:-mt-1">
            :
          </div>

          <div className="flex flex-col text-3xl lg:text-[60px] font-bold text-white  px-6 lg:leading-[60px] text-center">
            {formatTime(minutes)}{" "}
            <span className="text-[11px] text-[#626F7E] font-mazzard  -mt-4">
              Minutes
            </span>
          </div>
          <div className=" lg:text-6xl text-xl text-white  my-auto font-bold lg:-mt-1">
            :
          </div>
          <div className="flex flex-col text-3xl lg:text-[60px]    font-bold text-white  px-6 lg:leading-[60px] text-center">
            {formatTime(seconds)}{" "}
            <span className="text-[11px] text-[#626F7E] font-mazzard  -mt-4">
              Seconds
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Count;
