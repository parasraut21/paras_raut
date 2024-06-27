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

  // Animation variants for the hover effect
  const hoverVariants = {
    hover: {
      scale: 1.1,
      rotate: [0, 5, -5, 5, -5, 0], // Vibrate effect
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
      <section className='h-screen bg-gradient-to-r from-gray-700 to-gray-900 flex justify-center items-center px-4'>
        <motion.div className='py-10 flex flex-col items-center'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className='text-5xl sm:text-7xl font-bold text-white text-center'>My Skills</h3>

          <div className='mt-8 sm:mt-16 flex flex-wrap gap-4 sm:gap-12 justify-center'>
            {skills.map((skill) => (
              <motion.div className='block-container w-16 h-16 sm:w-20 sm:h-20' key={skill.name}
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
      <hr className='border-slate-200' />
    </>
  );
};

export default Skills;