import React from 'react';

const Navbar = ({ scrollToRef, refs }) => {
  return (
    <nav className="bg-gradient-to-r from-gray-700 to-gray-900 p-4 shadow-lg ">
      <div className="container mx-auto flex justify-between items-center">
        <button onClick={() => scrollToRef(refs.homeRef)} className="text-white text-2xl font-bold cursor-pointer">Home</button>
        <div className="hidden md:flex space-x-4">
          <button onClick={() => scrollToRef(refs.workRef)} className="text-white text-lg hover:text-gray-200 cursor-pointer">Work</button>
          <button onClick={() => scrollToRef(refs.projectsRef)} className="text-white text-lg hover:text-gray-200 cursor-pointer">Projects</button>
          <button onClick={() => scrollToRef(refs.skillsRef)} className="text-white text-lg hover:text-gray-200 cursor-pointer">Skills</button>
          <button onClick={() => scrollToRef(refs.contactRef)} className="text-white text-lg hover:text-gray-200 cursor-pointer">Contact</button>
        </div>
        <div className="md:hidden">
          {/* Mobile menu items here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;