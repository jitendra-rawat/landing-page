import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import { MdArrowOutward, MdMenu, MdClose } from 'react-icons/md';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent absolute top-0 left-0 w-full z-50">
      <div className="max-w-full mx-auto px-4 sm:px-2 lg:px-16">
        <div className="flex justify-between items-center py-4">
          {/* Left section with logo */}
          <div className="">
            <h4 className="text-4xl text-white font-custom">SFAI</h4>
          </div>

          {/* Middle section with navbar links */}
          <div className="hidden md:flex flex-grow justify-center space-x-6">
            <a href="/" className="font-mazzard text-white text-lg hover:text-gray-200">
              HOME
            </a>
            <a href="#speakers" className="font-mazzard text-white text-lg hover:text-gray-200">
              SPEAKERS
            </a>
            <a href="#sponsorship" className="font-mazzard text-white text-lg hover:text-gray-200">
              SPONSORSHIP
            </a>
            <a href="#travel" className="font-mazzard text-white text-lg hover:text-gray-200">
              TRAVEL
            </a>
            <a href="#FAQ" className="font-mazzard text-white text-lg hover:text-gray-200">
              FAQ
            </a>
            <a href="/=#contact" className="font-mazzard text-white text-lg hover:text-gray-200">
              CONTACT US
            </a>
          </div>

          {/* Right section with button */}
          <div className="">
            <button className="flex gap-2 items-center bg-gray-100 font-mazzard text-black text-[18px] py-3 px-8 rounded-full ">
              <MdArrowOutward size={24} color="gray" /> BUY TICKETS
            </button>
          </div>

          {/* Hamburger menu icon for mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? (
                <MdClose className="text-white text-3xl" />
              ) : (
                <MdMenu className="text-white text-3xl" />
              )}
            </button>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 left-0 w-full bg-gray-900 z-50 md:hidden"
            >
              <div className="flex flex-col items-center py-4">
                <a href="/" className="font-mazzard text-white text-lg py-2 hover:text-gray-200">
                  HOME
                </a>
                <a href="#speakers" className="font-mazzard text-white text-lg py-2 hover:text-gray-200">
                  SPEAKERS
                </a>
                <a href="#sponsorship" className="font-mazzard text-white text-lg py-2 hover:text-gray-200">
                  SPONSORSHIP
                </a>
                <a href="#travel" className="font-mazzard text-white text-lg py-2 hover:text-gray-200">
                  TRAVEL
                </a>
                <a href="#FAQ" className="font-mazzard text-white text-lg py-2 hover:text-gray-200">
                  FAQ
                </a>
                <a href="/=#contact" className="font-mazzard text-white text-lg py-2 hover:text-gray-200">
                  CONTACT US
                </a>
                <button onClick={toggleMenu} className="text-white mt-4">
                  <MdClose className="text-white text-2xl" />
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
