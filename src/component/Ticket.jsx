import React from 'react';
import { MdArrowOutward } from "react-icons/md";
import { FaStarOfLife } from "react-icons/fa";

const Ticket = () => {
    const cardData = [
        {
          type: 'Standard',
          price: '$850',
          title: 'Main Conference',
          description: 'Enjoy 2 days of inspiring talks, breakout sessions exploring challenging topics, great food.',
          buttonText: 'Buy Ticket Now'
        },
        {
            type: 'Premium',
            price: '$950',
            title: 'Conference & Workshop',
            description: 'Get everything a Conference pass offers & a chance to deep-dive with experts at a Workshops.',
            buttonText: 'Buy Ticket Now'
        },
        {
            type: 'Premium Ticket',
            price: '$1250',
            title: `Superpass
            Conference + 1`,
            description: 'Everything from General Admission and you get full, exclusive access for a year.',
            buttonText: 'Buy Ticket Now'
        },
    ];

    return (
        <section className='max-w-sm lg:max-w-5xl mx-auto container py-20'>
            <div className='flex flex-wrap justify-between items-center mb-2'>
                <div>
                    <h2 className='text-[60px] font-bold font-mazzard'>CHOOSE YOUR <span className='text-[#8D36DF]'>TICKET</span> </h2>
                </div>
                <div>
                    <button className='bg-gray-200 px-8 py-2 text-black font-mazzard flex items-center gap-1'> <MdArrowOutward size={24}/> VIEW ALL TICKETS</button>
                </div>
            </div>
            <div className='flex items-center  mb-4'>
                <p className='text-[14px] flex-1  text-[#8D36DF] font-mazzard '>PRICING PLANS</p>
                
      <div className="w-[900px]  mx-auto container   h-[0.5px] bg-gray-900"></div>
            </div>
            <div>
                <p className='text-[18px] mb-16 font-mazzard'>Attending such an event can expose you to different ways of thinking about economic issues <br /> and help you broaden your understanding of the field.</p>
            </div>



            <div className='flex flex-col lg:flex-row justify-between items-center gap-4'>
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        type={card.type}
                        price={card.price}
                        title={card.title}
                        description={card.description}
                        buttonText={card.buttonText}
                        isPurple={index === 1} 
                    />
                ))}
            </div>
        </section>
    )
}

export default Ticket

const Card = ({ type, price, title, description, buttonText, isPurple }) => {
    const cardColor = isPurple ? 'bg-gradient-to-t from-purple-900 to-purple-500'  : 'bg-white';
    const textColor = isPurple ? 'text-white' : 'text-purple-900';
    const titleColor = isPurple ? 'text-white' : 'text-black';
    const typeColor = isPurple ? 'text-white' : 'text-[#727271]';
    const iconColor = isPurple ? "text-white":"text-black"

    return (
        <div className={`w-[366px] h-[450px] border border-black overflow-hidden md:max-w-2xl ${cardColor}`}>
            <div className="p-8">
            <div className={`uppercase tracking-wide text-sm text-[#727271] font-semibold py-4 ${typeColor} flex gap-2 items-center`}><FaStarOfLife color='#8D36DF' /> {type}</div>

                <div className={`text-[60px] leading-8 font-semibold py-8 font-mazzard ${textColor}`}>{price}</div>
                <div className={`mb-4 text-[32px] leading-10 font-bold font-mazzard ${titleColor}`}>{title}</div>
                <p className={`font-mazzard ${textColor}`}>{description}</p>
                <div className="mt-8 flex gap-2 items-center">
                <MdArrowOutward size={24}  />    <a href="#" className={`font-mazzard ${textColor} font-semibold`}>{buttonText}</a> 
                </div>
            </div>
        </div>
    );
};
