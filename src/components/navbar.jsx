
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const location = useLocation();
  const menuRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    // Close the mobile menu on page change
    useEffect(() => {
      setIsOpen(false);
    }, [location]);
  
    // Close the mobile menu when clicking outside of it
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      window.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        window.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

  return (
    <motion.nav className={`bg-[rgb(29,28,34)] p-2 w-full fixed top-0 z-[60] ${
        isScrolled ? 'bg-opacity-90 shadow-md' : 'bg-opacity-100'
      }`}
    initial={{y: -100, opacity: 0.32}}
    animate={{ y: 0, opacity: 1,}}
    transition={{ease: 'easeOut',type: 'string', stiffness: 500,duration:0.5}}>
      <div className="container mx-auto flex justify-between items-center">
      <Link to='/'>
        <div className="text-white text-xl font-bold"><h1 className='text-4xl dancing-script-topic inline'>WEB DEV</h1> <span className='text-3xl green'>.</span></div>
        </Link>
        
        {/* Hamburger Icon */}
        <button 
          className="block md:hidden text-white" 
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Links for Desktop */}
        <div className="hidden md:flex space-x-6">
        <li className='flex flex-col items-center justify-center gap-1 text-xl md:text-xl lg:text-[14px] mb-6 md:mb-5 lg:mb-0'>
            <Link
      to="/"
      className={`block py-2 px-4 links relative margarine-regular`}
    >
      Home
      <span
        className={`absolute bottom-0 left-0 h-1 bg-green-500 transition-all duration-300 ${location.pathname === '/' ? 'w-full' : 'hover:w-full w-0'}`}
      ></span>
    </Link>
            </li>
            <li className='flex flex-col items-center justify-center gap-1 text-xl md:text-xl lg:text-[14px] mb-6 md:mb-5 lg:mb-0'>
            <Link
      to="/about"
      className={`block py-2 px-4 links relative margarine-regular`}
    >
      About
      <span
        className={`absolute bottom-0 left-0 h-1 bg-green-500 transition-all duration-300 ${location.pathname === '/about' ? 'w-full' : 'hover:w-full w-0'}`}
      ></span>
    </Link>
            </li>
            <li className='flex flex-col items-center justify-center gap-1 text-xl md:text-xl lg:text-[14px]'>
              <Link to="/contact" className={`block py-2 px-4 links relative margarine-regular`}>Contact
                <span className={`absolute bottom-0 left-0 h-1 bg-green-500 transition-all duration-300 ${location.pathname === '/contact' ? 'w-full' : 'hover:w-full w-0'}`}></span>
              </Link>
            </li>
        </div>

        {/* Side panel for mobile */}
        <div
        ref={menuRef}
          className={`fixed top-0 left-0 w-64 h-full bg-[rgb(29,28,34)] text-white transform ${
            isOpen ? 'translate-x-0 absolute z-50' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <button
            className="absolute top-4 right-4"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <Link to='/'>
        <div className="text-white text-xl font-bold"><h1 className='text-xl dancing-script-topic inline'>Abdulhamid Abdulsalam</h1> <span className='text-3xl green'>.</span></div>
        </Link>

          <ul className="mt-0 space-y-4 p-3 absolute z-60 bg-[rgb(29,28,34)]">
          <li className='flex flex-col items-center justify-center gap-1 text-xl md:text-4xl lg:text-[14px] mb-6 md:mb-5 lg:mb-0'>
            <Link
      to="/"
      className={`block py-2 px-4 links relative margarine-regular`}
    >
      Home
      <span
        className={`absolute bottom-0 left-0 h-1 bg-green-500 transition-all duration-300 ${location.pathname === '/' ? 'w-full' : 'hover:w-full w-0'}`}
      ></span>
    </Link>
            </li>
            <li className='flex flex-col items-center justify-center gap-1 text-xl md:text-4xl lg:text-[14px] mb-6 md:mb-5 lg:mb-0'>
            <Link
      to="/about"
      className={`block py-2 px-4 links relative margarine-regular`}
    >
      About
      <span
        className={`absolute bottom-0 left-0 h-1 bg-green-500 transition-all duration-300 ${location.pathname === '/about' ? 'w-full' : 'hover:w-full w-0'}`}
      ></span>
    </Link>
            </li>

            <li className='flex flex-col items-center justify-center gap-1 text-xl md:text-4xl lg:text-[14px]'>
              <Link to="/contact" className={`block py-2 px-4 links relative margarine-regular`}>Contact
                <span className={`absolute bottom-0 left-0 h-1 bg-green-500 transition-all duration-300 ${location.pathname === '/contact' ? 'w-full' : 'hover:w-full w-0'}`}></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
