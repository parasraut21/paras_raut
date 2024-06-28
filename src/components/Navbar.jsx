import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaBriefcase, FaProjectDiagram, FaCogs, FaEnvelope } from 'react-icons/fa';

const Navbar = ({ scrollToRef, refs }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScrollToRef = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const buttonVariants = {
    hover: { scale: 1.1, transition: { duration: 0.2 } },
    tap: { scale: 0.95 }
  };

  const navItems = [
    { name: 'HOME', ref: 'homeRef', icon: FaHome },
    { name: 'WORK', ref: 'workRef', icon: FaBriefcase },
    { name: 'PROJECTS', ref: 'projectsRef', icon: FaProjectDiagram },
    { name: 'SKILLS', ref: 'skillsRef', icon: FaCogs },
    { name: 'CONTACT', ref: 'contactRef', icon: FaEnvelope },
  ];

  return (
    <AnimatePresence>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'}`}
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <motion.button 
            whileHover="hover" 
            whileTap="tap" 
            variants={buttonVariants}
            onClick={() => smoothScrollToRef(refs.homeRef)} 
            className="text-white text-2xl font-bold cursor-pointer flex items-center"
          >
            <FaHome className="mr-2" />
            <span className="hidden sm:inline bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">PARAS RAUT</span>
          </motion.button>
          <div className="hidden md:flex space-x-6">
            {navItems.slice(1).map((item) => (
              <motion.button 
                key={item.ref}
                whileHover="hover" 
                whileTap="tap" 
                variants={buttonVariants}
                onClick={() => smoothScrollToRef(refs[item.ref])} 
                className="text-white text-lg hover:text-gray-200 cursor-pointer flex items-center group"
              >
                <item.icon className="mr-2 group-hover:text-blue-500 transition-colors duration-300" />
                <span className="relative">
                  {item.name}
                  <motion.span 
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  ></motion.span>
                </span>
              </motion.button>
            ))}
          </div>
          <div className="md:hidden flex space-x-4">
            {navItems.slice(1).map((item) => (
              <motion.button 
                key={item.ref}
                whileHover="hover" 
                whileTap="tap" 
                variants={buttonVariants}
                onClick={() => smoothScrollToRef(refs[item.ref])} 
                className="text-white text-lg hover:text-blue-500 cursor-pointer transition-colors duration-300"
              >
                <item.icon />
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;
