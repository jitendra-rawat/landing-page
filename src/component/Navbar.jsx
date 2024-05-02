import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import { MdArrowOutward, MdMenu, MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent absolute top-0 left-0 w-full z-50">
      <div className="max-w-sm lg:max-w-7xl mx-auto container ">
        <div className="flex justify-between items-center py-4">
          {/* left section */}
          <div className="">
            <h4 className="text-5xl text-white font-bold ">SFAI</h4>
          </div>

          {/* middle section */}
          <div className="hidden md:flex flex-grow justify-center space-x-6">
            <Link to={'/'} className="font-mazzard text-white text-lg hover:text-gray-200">
              HOME
            </Link>
            <Link to={'/speakers'} className="font-mazzard text-white text-lg hover:text-gray-200">
 SPEAKERS
</Link>

            <Link to={'/sponsorship'} className="font-mazzard text-white text-lg hover:text-gray-200">
              SPONSORSHIP
            </Link>
            <Link to={'/travel'} className="font-mazzard text-white text-lg hover:text-gray-200">
              TRAVEL
            </Link>
            <Link to={'/faq'} className="font-mazzard text-white text-lg hover:text-gray-200">
              FAQ
            </Link>
            <Link to={'/contact'} className="font-mazzard text-white text-lg hover:text-gray-200">
              CONTACT US
            </Link>
          </div>

          {/* right section  */}
          <div className="">
            <button className="flex gap-2 items-center bg-gray-100 font-mazzard text-black text-[18px] py-3 px-8 rounded-full ">
              <MdArrowOutward size={24} color="gray" /> BUY TICKETS
            </button>
          </div>

          {/* hamburger menu */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? (
                <MdClose className="text-white text-3xl" />
              ) : (
                <MdMenu className="text-white text-3xl" />
              )}
            </button>
          </div>

          {/* mobile menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 left-0 w-full bg-gray-900 z-50 md:hidden"
            >
              <div className="flex flex-col items-center py-4">
                <Link to={'/'} className="font-mazzard text-white text-lg py-2 hover:text-gray-200">
                  HOME
                </Link>
                <Link to={'/speakers'} className="font-mazzard text-white text-lg py-2 hover:text-gray-200">
                  SPEAKERS
                </Link>
                <Link to={'/sponsorship'} className="font-mazzard text-white text-lg py-2 hover:text-gray-200">
                  SPONSORSHIP
                </Link>
                <Link to={'/travel'} className="font-mazzard text-white text-lg py-2 hover:text-gray-200">
                  TRAVEL
                </Link>
                <Link to={'/faq'} className="font-mazzard text-white text-lg py-2 hover:text-gray-200">
                  FAQ
                </Link>
                <Link to={'/contact'} className="font-mazzard text-white text-lg py-2 hover:text-gray-200">
                  CONTACT US
                </Link>
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
