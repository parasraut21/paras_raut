import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCode, FaLaptopCode } from 'react-icons/fa';

const Work = () => {
  const experiences = [
    {
      title: "Rust Smart Contract Developer",
      company_name: "DApp World",
      iconBg: "#accbe1",
      date: "April 2024 - May 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Developed & put in place a decentralized application & smart contract utilizing Soroban, Dart, & Rust on Stellar Blockchain",
      ],
    },
    {
      title: "Full-Stack Developer",
      company_name: "Navodita Infotech",
      iconBg: "#fbc3bc",
      date: "Dec 2023 - Feb 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Created a data analysis dashboard using React.js for the responsive design, Node.js for the frontend & Express for the backend.",
      ],
    },
    {
      title: "Freelancing",
      company_name: "",
      iconBg: "#b7e4c7",
      date: "Present",
      points: [
        "Built eye-catching websites for customers",
        "Collaborating closely with them to ensure their satisfaction & project completion",
      ],
    },
  ];
  const backgroundSVG = (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <defs>
        <pattern id="hexagons" x="0" y="0" width="28" height="49" patternUnits="userSpaceOnUse" patternTransform="scale(0.5)">
          <path d="M14 1.5l12 21-12 21-12-21 12-21z M14 25.5l12 21-12 21-12-21 12-21z M2 13.5l12 21-12 21-12-21 12-21z M26 13.5l12 21-12 21-12-21 12-21z" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hexagons)" />
    </svg>
  );

  const floatingSVGs = (
    <>
      <motion.div
        className="absolute top-10 left-10 w-16 h-16 text-blue-500 opacity-20"
        animate={{ y: [0, 20, 0], rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <FaCode size="100%" />
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-10 w-16 h-16 text-purple-500 opacity-20"
        animate={{ y: [0, -20, 0], rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <FaLaptopCode size="100%" />
      </motion.div>
    </>
  );

  return (
    <section className='bg-gray-900 px-4 sm:px-8 lg:px-16 py-12 lg:py-16 relative overflow-hidden'>
      {backgroundSVG}
      {floatingSVGs}
      <motion.h3 
        className='text-4xl sm:text-5xl lg:text-6xl font-bold text-center relative z-10 mb-8'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          Work Experience
        </span>
      </motion.h3>
      <motion.div 
        className='mt-5 flex flex-col text-center gap-3 text-gray-300 relative z-10'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <p className='text-sm sm:text-base lg:text-lg max-w-2xl mx-auto'>
          Throughout my career, I've collaborated with diverse companies, continuously enhancing my skills and working alongside brilliant minds. Here's a glimpse into my professional journey:
        </p>
      </motion.div>

      <div className='mt-16 text-white relative z-10'>
        <div className="overflow-x-auto">
          <VerticalTimeline layout="1-column">
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={`experience-${index}`}
                contentStyle={{ background: 'rgba(30, 41, 59, 0.8)', color: '#fff', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '12px' }}
                contentArrowStyle={{ borderRight: '7px solid rgba(30, 41, 59, 0.8)' }}
                date={experience.date}
                iconStyle={{ background: experience.iconBg, color: '#fff' }}
                icon={<FaBriefcase />}
              >
                <motion.h3 
                  className='text-xl sm:text-2xl text-white font-bold mb-2'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {experience.title}
                </motion.h3>
                <motion.h4
                  className='text-lg text-gray-300 mb-4'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {experience.company_name}
                </motion.h4>
                <motion.ul 
                  className='list-disc ml-5 space-y-2 sm:ml-8 lg:ml-10'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className='text-gray-300 font-normal text-sm sm:text-base'>
                      {point}
                    </li>
                  ))}
                </motion.ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-gray-800 mt-16 relative z-10' />
    </section>
  );
};

export default Work;