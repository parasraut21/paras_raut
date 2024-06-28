
import React from 'react';
import "react-vertical-timeline-component/style.min.css";
import { motion } from 'framer-motion';


  const Skills = () => {


    const skills = [
        {
            imageUrl: "./css.svg",
            name: "CSS",
            type: "Frontend",
        },
        {
            imageUrl: "./express.svg",
            name: "Express",
            type: "Backend",
        },
        {
            imageUrl: "./git.svg",
            name: "Git",
            type: "Version Control",
        },
        {
            imageUrl: "./github.svg",
            name: "GitHub",
            type: "Version Control",
        },
        {
            imageUrl: "./html.svg",
            name: "HTML",
            type: "Frontend",
        },
        {
            imageUrl: "./javascript.svg",
            name: "JavaScript",
            type: "Frontend",
        },
        {
            imageUrl: "./mongodb.svg",
            name: "MongoDB",
            type: "Database",
        },
        {
            imageUrl: "./motion.svg",
            name: "Motion",
            type: "Animation",
        },
        {
            imageUrl: "./mui.svg",
            name: "Material-UI",
            type: "Frontend",
        },
        {
            imageUrl: "./nextjs.svg",
            name: "Next.js",
            type: "Frontend",
        },
        {
            imageUrl: "./nodejs.svg",
            name: "Node.js",
            type: "Backend",
        },
        {
            imageUrl: "./react.svg",
            name: "React",
            type: "Frontend",
        },
        {
            imageUrl: "./redux.svg",
            name: "Redux",
            type: "State Management",
        },
        {
            imageUrl: "./sass.svg",
            name: "Sass",
            type: "Frontend",
        },
        {
            imageUrl: "./tailwindcss.svg",
            name: "Tailwind CSS",
            type: "Frontend",
        },
        {
            imageUrl: "./typescript.svg",
            name: "TypeScript",
            type: "Frontend",
        }
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
  
    const movingSVGs = Array(40).fill().map((_, i) => (
      <motion.svg
        key={i}
        className="absolute"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${20 + Math.random() * 80}px`,
          height: `${20 + Math.random() * 80}px`,
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
  

  // Animation variants for the hover effect
  const hoverVariants = {
    hover: {
      scale: 1.1,
      rotate: [0, 5, -5, 5, -5, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  // Animation for the container when it comes into view
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.1 } },
  };
  return (
    <>
      <section className='min-h-screen bg-gray-900 flex justify-center items-center px-4 relative overflow-hidden'>
        <div className="absolute inset-0">
          {backgroundSVG}
          {movingSVGs}
        </div>
        <motion.div 
          className='py-10 flex flex-col items-center relative z-10 w-full'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 
            className='text-5xl sm:text-7xl font-bold text-center mb-16 relative z-10'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              My Skills
            </span>
          </motion.h3>

          <div className='mt-8 sm:mt-16 flex flex-wrap gap-4 sm:gap-12 justify-center'>
            {skills.map((skill) => (
              <motion.div 
                className='block-container w-16 h-16 sm:w-20 sm:h-20' 
                key={skill.name}
                whileHover="hover"
                variants={hoverVariants}
              >
                <div className='btn-back rounded-xl' />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      <hr className='border-gray-800' />
    </>
  );
};

export default Skills;