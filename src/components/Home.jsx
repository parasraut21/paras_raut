import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaArrowDown, FaDownload } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

function Home() {
  const handleScroll = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="home-container bg-gradient-to-r from-gray-700 to-gray-900 min-h-screen flex flex-col justify-center items-center animate-fade-in p-5 overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full flex flex-col md:flex-row justify-between items-center mb-8 px-10 space-y-8 md:space-y-0"
        >
          {/* Left Section */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="text-center md:text-left"
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-4"
              whileHover={{ scale: 1.1, rotate: 2 }}
            >
              Paras Raut
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-gray-200"
              whileHover={{ scale: 1.05 }}
            >
              📞 9356375273 | ✉️ parasraut2511@gmail.com
            </motion.p>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
            className="text-center md:text-right"
          >
            <motion.a
              href="https://linkedin.com/in/parasraut"
              className="text-lg md:text-xl lg:text-2xl underline text-gray-200 hover:text-white flex items-center mb-2 justify-center md:justify-start"
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedin className="mr-2" /> LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/parasraut"
              className="text-lg md:text-xl lg:text-2xl underline text-gray-200 hover:text-white flex items-center mb-2 justify-center md:justify-start"
              whileHover={{ scale: 1.2 }}
            >
              <FaGithub className="mr-2" /> GitHub
            </motion.a>
            <motion.a
              href={`./Paras_Raut_Resume.pdf`}
              className="text-lg md:text-xl lg:text-2xl underline text-gray-200 hover:text-white flex items-center justify-center md:justify-start"
              download
              whileHover={{ scale: 1.2 }}
            >
              <FaDownload className="mr-2" /> Download CV
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Typewriter Section */}
        <div className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mt-8 text-center">
          <Typewriter
            options={{
              strings: ['Web Designer', 'Web Developer', 'Blockchain Developer', 'Full Stack Developer', 'Mern Stack Developer'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        {/* Scroll Down Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="mt-5 mb-2 flex flex-col items-center justify-center cursor-pointer"
          onClick={handleScroll}
        >
          <FaArrowDown className="text-white text-2xl animate-bounce" />
          <p className="text-white">Scroll Down</p>
        </motion.div>
      </div>
      <hr className='border-slate-200' />
    </>
  );
}

export default Home;
