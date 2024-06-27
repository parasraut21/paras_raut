import React from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ scrollToRef, refs }) => {

  const smoothScrollToRef = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 }
  };

  return (
    <nav className="bg-gradient-to-r from-gray-700 to-gray-900 p-4 shadow-lg ">
      <div className="container mx-auto flex justify-between items-center">
        <motion.button 
          whileHover="hover" 
          whileTap="tap" 
          variants={buttonVariants}
          onClick={() => smoothScrollToRef(refs.homeRef)} 
          className="text-white text-2xl font-bold cursor-pointer"
        >
          HOME
        </motion.button>
        <div className="hidden md:flex space-x-4">
        {['workRef', 'projectsRef', 'skillsRef', 'contactRef'].map((refKey) => (
  <motion.button 
    key={refKey}
    whileHover="hover" 
    whileTap="tap" 
    variants={buttonVariants}
    onClick={() => smoothScrollToRef(refs[refKey])} 
    className="text-white text-lg hover:text-gray-200 cursor-pointer"
  >
    {refKey.replace('Ref', '').toUpperCase()}
  </motion.button>
))}
        </div>
        <div className="md:hidden">
   
        </div>
      </div>
    </nav>
  );
};

export default Navbar;