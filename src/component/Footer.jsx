import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from '../assets/logo.png'
import at from '../assets/at.png'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 ">
      <div className="max-w-sm lg:max-w-5xl mx-auto container flex flex-wrap space-x-16 justify-between">
        {/* Quick Links */}
        <div className="lg:flex-1 mb-8">
          
          <h4 className='font-bold text-4xl mb-4 font-ethnocentric'>SFAI</h4>
          <p className='text-[14px] font-mazzard '>lorem ipsum  consectetur incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        {/* Address */}
        <div className="lg:flex-1 mb-8">
          <h3 className="text-[20px] text-[#8D36DF] font-mazzard  font-semibold mb-4">Quick Links</h3>
          <p className='text-[14px] font-mazzard mb-2'>Home</p>
          <p className='text-[14px] font-mazzard mb-2'>Speakers</p>
          <p className='text-[14px] font-mazzard mb-2'>Sponsorshhip</p>
          <p className='text-[14px] font-mazzard mb-2'>Travel</p>
          <p className='text-[14px] font-mazzard'>FAQ</p>
        </div>
        {/* Contact Us */}
        <div className="lg:flex-1 mb-8">
          <h3 className="text-[20px] text-[#8D36DF]  font-semibold mb-4 font-mazzard">Contact Us</h3>
          <p className='text-[14px] font-mazzard mb-8'>27 Division St, San Francisco <br />
          SF 94016, USA</p>
          <p className='text-[14px] font-mazzard mb-4'>+1 800 123 456 789</p>
          <div className='flex gap-4'>
            <FaFacebook size={24} />
            <FaInstagram size={24} />
            <FaTwitter size={24} />
          </div>
        </div>
        {/* Subscribe */}
        <div className="lg:flex-1 mb-8">
          <h3 className="text-[20px] font-mazzard text-[#8D36DF] font-semibold mb-4">Subscribe</h3>
         
          <div className='flex items-center justify-between'>
          <p className='text-[14px] font-mazzard mb-2'>Get news & updates</p>
          <img src={at} alt="" />
          </div>
       

          <div className="border-t border-gray-400 mb-4"></div>

          <p className='text-[14px] text-gray-500 font-mazzard'>Our expertise, as well as our passion for web design, sets us apart from other agencies.</p>
        </div>
      </div>

      <div className="max-w-sm lg:max-w-5xl mx-auto container   h-px bg-gray-300 "></div>


      <div className="max-w-sm lg:max-w-5xl mx-auto container flex flex-wrap space-x-4 justify-between py-2">

        <p className='text-[14px] text-gray-400 font-mazzard'>© 2023 San Francisco AI Conference LLC. All Rights Reserved.</p>
        <p className='text-[14px] text-gray-400 font-mazzard'>Made w/ love by  Savior</p>
        <p className='text-[14px] text-gray-400 font-mazzard'>Terms of Use  |   Proposal Terms</p>

      </div>
    </footer>
  );
};

export default Footer;
