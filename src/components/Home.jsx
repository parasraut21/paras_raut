import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaArrowDown, FaDownload } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

function Home() {
  return (
    <>
      <div className="home-container bg-gradient-to-r from-gray-700 to-gray-900 h-screen flex flex-col justify-center items-center animate-fade-in p-5 overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center"
        >
    
          <motion.h1
            className="text-7xl text-white font-bold mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            whileHover={{ scale: 1.1 }}
          >
            Paras Raut
          </motion.h1>
          <motion.p
            className="text-2xl text-gray-200 mb-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            whileHover={{ scale: 1.1 }}
          >
            📞 9356375273 | ✉️ parasraut2511@gmail.com
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
            className="flex flex-row items-center space-x-4 justify-center"
          >
            <a href="https://linkedin.com/in/parasraut" className="text-xl underline text-gray-200 hover:text-white flex items-center">
              <FaLinkedin className="mr-2" />LinkedIn
            </a>
            <a href="https://github.com/parasraut" className="text-xl underline text-gray-200 hover:text-white flex items-center">
              <FaGithub className="mr-2" />GitHub
            </a>
            <a href={`./Paras_Raut_Resume.pdf`} className="text-xl underline text-gray-200 hover:text-white flex items-center" download>
              <FaDownload className="mr-2" />Download CV
            </a>
          </motion.div>
   
          <div className="text-5xl text-white font-bold mt-8">
            <Typewriter
              options={{
                strings: ['Web Designer', 'Web Developer', 'Blockchain Developer', 'Full Stack Developer', 'Mern Stack Developer'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
   
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            className="mt-8 flex flex-col items-center justify-center"
          >
            <FaArrowDown className="text-white text-3xl animate-bounce" />
            <p className="text-white">Scroll Down</p>
          </motion.div>
        </motion.div>
      </div>
      <hr className='border-slate-200' />
    </>
  );
}

export default Home;