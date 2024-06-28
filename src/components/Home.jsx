import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaArrowDown, FaDownload, FaCode, FaDatabase, FaServer, FaMobile } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

function Home() {
  const handleScroll = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  const blockchainSVG = (
    <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <g fill="none" stroke="#fff" strokeWidth="0.5">
        <path d="M20,50 L80,50 M50,20 L50,80 M20,20 L80,80 M20,80 L80,20" />
        <circle cx="50" cy="50" r="30" />
        <circle cx="50" cy="50" r="15" />
        <circle cx="20" cy="50" r="5" />
        <circle cx="80" cy="50" r="5" />
        <circle cx="50" cy="20" r="5" />
        <circle cx="50" cy="80" r="5" />
      </g>
    </svg>
  );

  const floatingIcons = [
    { Icon: FaCode, color: "text-blue-500" },
    { Icon: FaDatabase, color: "text-green-500" },
    { Icon: FaServer, color: "text-red-500" },
    { Icon: FaMobile, color: "text-yellow-500" }
  ];

  const generateRandomSVG = () => {
    const shapes = [
      <circle cx="50" cy="50" r="30" />,
      <rect x="20" y="20" width="60" height="60" />,
      <polygon points="50,20 80,80 20,80" />,
      <ellipse cx="50" cy="50" rx="40" ry="20" />,
      <path d="M20,50 Q50,20 80,50 T140,50" />,
    ];
    return shapes[Math.floor(Math.random() * shapes.length)];
  };

  const backgroundSVGs = Array(30).fill().map((_, i) => (
    <motion.svg
      key={i}
      className="absolute opacity-5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${20 + Math.random() * 60}px`,
        height: `${20 + Math.random() * 60}px`,
      }}
      animate={{
        y: [0, Math.random() * 100 - 50, 0],
        x: [0, Math.random() * 100 - 50, 0],
        rotate: 360,
        scale: [1, 1.5, 1],
      }}
      transition={{
        duration: 20 + Math.random() * 20,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <g fill="none" stroke="#fff" strokeWidth="0.5">
        {generateRandomSVG()}
      </g>
    </motion.svg>
  ));

  return (
    <div className="home-container bg-gray-900 min-h-screen flex flex-col justify-center items-center p-5 overflow-hidden relative">
      {blockchainSVG}
      {backgroundSVGs}
      
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.color} opacity-20`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50, 0],
            x: [0, Math.random() * 100 - 50, 0],
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <item.Icon size={30 + Math.random() * 20} />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full flex flex-col md:flex-row justify-between items-center mb-8 px-10 space-y-8 md:space-y-0 z-10"
      >
        {/* Left Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="text-center md:text-left"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            Paras Raut
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-400"
            whileHover={{ scale: 1.05 }}
          >
            📞 9356375273 | ✉️ parasraut2511@gmail.com
          </motion.p>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="text-center md:text-right"
        >
          {['LinkedIn', 'GitHub', 'Download CV'].map((item) => (
            <motion.a
              key={item}
              href={item === 'LinkedIn' ? "https://linkedin.com/in/parasraut" : 
                    item === 'GitHub' ? "https://github.com/parasraut" : 
                    "./Paras_Raut_Resume.pdf"}
              className="text-lg md:text-xl lg:text-2xl text-gray-400 hover:text-white flex items-center mb-4 justify-center md:justify-end group"
              whileHover={{ scale: 1.1, x: 10 }}
              whileTap={{ scale: 0.95 }}
              download={item === 'Download CV'}
            >
              <motion.span 
                className="mr-2 group-hover:rotate-12 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {item === 'LinkedIn' ? <FaLinkedin /> :
                 item === 'GitHub' ? <FaGithub /> :
                 <FaDownload />}
              </motion.span>
              <span className="relative">
                {item}
                <motion.span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-white"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
              </span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Typewriter Section */}
      <motion.div 
        className="text-4xl md:text-5xl lg:text-6xl font-bold mt-8 text-center z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <Typewriter
          options={{
            strings: ['Web Designer', 'Web Developer', 'Blockchain Developer', 'Full Stack Developer', 'Mern Stack Developer'],
            autoStart: true,
            loop: true,
            wrapperClassName: 'bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500',
          }}
        />
      </motion.div>

      {/* Scroll Down Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="mt-12 flex flex-col items-center justify-center cursor-pointer group"
        onClick={handleScroll}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FaArrowDown className="text-gray-400 text-3xl group-hover:text-white" />
        </motion.div>
        <p className="text-gray-400 mt-2 group-hover:text-white group-hover:underline">Scroll Down</p>
      </motion.div>
    </div>
  );
}

export default Home;
