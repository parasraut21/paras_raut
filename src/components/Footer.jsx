import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { motion } from 'framer-motion';
import MagicButton from './MagicButton';

const Footer = () => {
  const socialMedia = [
    { id: 1, img: "/git.svg", link: "https://github.com/yourusername" },
    { id: 2, img: "/twit.svg", link: "https://twitter.com/yourusername" },
    { id: 3, img: "/link.svg", link: "https://linkedin.com/in/yourusername" },
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

  const movingSVGs = Array(20).fill().map((_, i) => (
    <motion.svg
      key={i}
      className="absolute"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${20 + Math.random() * 40}px`,
        height: `${20 + Math.random() * 40}px`,
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
      <g fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5">
        {generateRandomSVG()}
      </g>
    </motion.svg>
  ));

  const backgroundSVG = (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <defs>
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );

  return (
    <footer className="w-full pt-10 pb-5 sm:pt-20 sm:pb-10 bg-gray-900 relative overflow-hidden" id="contact">
      <div className="absolute inset-0">
        {backgroundSVG}
        {movingSVGs}
      </div>
      <div className="flex flex-col items-center text-center px-4 relative z-10">
        <motion.h1 
          className="text-xl sm:text-3xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ready to take <span className="text-yellow-300">your</span> digital presence to the next level?
        </motion.h1>
        <motion.p 
          className="text-white mt-5 mb-5 sm:mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Reach out to me today and let's discuss how I can help you achieve your goals.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="mailto:parasraut2511@gmail.com" className="hover:underline">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </motion.div>
      </div>
      <div className="flex mt-8 sm:mt-16 flex-col sm:flex-row justify-between items-center text-white px-4 relative z-10">
        <p className="text-sm sm:text-base">
          Copyright © 2024 Paras Raut
        </p>

        <div className="flex items-center gap-3 mt-4 sm:mt-0">
          {socialMedia.map((info) => (
            <motion.a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:scale-110 transition-transform duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={info.img} alt="social icon" width={20} height={20} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
