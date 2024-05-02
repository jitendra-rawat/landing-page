import React from 'react';

const Attend = () => {

    const cardData = [
        {
          title: 'Unparalleled Knowledge',
          description: `Gain a comprehensive understanding of AI's latest trends, advancements, and challenges. Our diverse sessions will cover cutting-edge topics beyond the conventional, ensuring you stay one step ahead in this rapidly evolving field.`,
          image: 'https://cdn.pixabay.com/photo/2015/01/08/18/11/laptops-593296_1280.jpg'
        },

        {
            title: 'Networking Opportunities',
            description: `Connect with industry leaders, influential professionals, and fellow AI enthusiasts. Forge meaningful connections that can shape your career and open doors to new collaborations and partnerships.
            `,
            image: 'https://cdn.pixabay.com/photo/2018/03/27/21/43/startup-3267505_640.jpg'
          },
          {
            title: 'Career Development',
            description: `Discover exciting career opportunities in the realm of AI. Whether you're a seasoned professional or just starting your journey, our conference offers valuable insights and guidance to navigate the AI landscape and accelerate your professional growth.`,
            image: 'https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_640.jpg'
          },
  
          {
              title: 'Engaging Discussions',
              description: `Engage in dynamic conversations and thought-provoking discussions with like-minded individuals who share your passion for AI. Explore new perspectives, exchange ideas, and contribute to shaping the future of this transformative technology.`,
              image: 'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849826_640.jpg'
            },
    ];

    return (
        <section className='bg-black py-20'>
            <div className='max-w-sm lg:max-w-5xl mx-auto container'>
                <div>
                    <p className='lg:text-center font-ethnocentric text-[#727271] text-[18px] mb-4 '>What we offer</p>
                    <p className='lg:text-center text-white lg:text-[60px] text-2xl font-mazzard lg:leading-10 mb-8' >Why Attend the San Francisco</p>
                    <p className='lg:text-center text-[#8D36DF] lg:text-[60px] text-2xl mb-16 font-mazzard lg:leading-10'>AI Conference?</p>
                </div>

                {/* Card  */}
                <div className='flex flex-wrap  justify-between items-center '>
                    {cardData.map((card, index) => (
                        <Card
                            key={index}
                            title={card.title}
                            description={card.description}
                            image={card.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

const Card = ({ title, description, image }) => {
    return (
        <div className="w-[500px]  h-[600px]   border-2 border-black overflow-hidden md:max-w-2xl">
         
                <img src={image} className='w-[400px] mb-8 '  alt="" />
                <div className=" text-white font-bold text-[32px] mb-4 font-mazzard">{title}</div>
                <p className=" text-gray-300 text-[18px] font-mazzard">{description}</p>
             
         
        </div>
    );
};

export default Attend;
