'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="shadow-md sticky top-0 z-10 bg-purple-100">
      <div className="flex justify-between items-center py-4 px-6 container mx-auto">
        <div className="flex items-center">
          <a href="/" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
            <Image src="/reallogo.jpg" alt="Website Logo" width={30} height={30} priority={true} />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center gap-8 ">
          <ul className="flex gap-8 list-none">
            <li>
              <a href="/" className="text-gray-700 hover:text-blue-500 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-700 hover:text-blue-500 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="text-gray-700 hover:text-blue-500 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-700 hover:text-blue-500 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            aria-label="Toggle navigation"
          >
            {isOpen ? <AiOutlineClose className="w-6 h-6 text-gray-700" /> : <HiMenuAlt3 className="w-6 h-6 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className= "md:hidden absolute top-full left-0 w-full shadow-md z-20 bg-purple-400">
          <ul className="flex flex-col items-center py-4">
            <li className="py-2">
              <a href="/" className="text-gray-700 hover:text-blue-500 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2" onClick={() => setIsOpen(false)}>
                Home
              </a>
            </li>
            <li className="py-2">
              <a href="" className="text-gray-700 hover:text-blue-500 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2" onClick={() => setIsOpen(false)}>
                About
              </a>
            </li>
            <li className="py-2">
              <a href="" className="text-gray-700 hover:text-blue-500 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2" onClick={() => setIsOpen(false)}>
                Services
              </a>
            </li>
            <li className="py-2">
              <a href="" className="text-gray-700 hover:text-blue-500 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2" onClick={() => setIsOpen(false)}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;