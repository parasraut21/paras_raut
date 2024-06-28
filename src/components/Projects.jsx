import React from 'react';
import { FaLocationArrow } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { PinContainer } from "@/components/Pin";


const RecentProjects = () => {

    const projects = [
        {
          id: 1,
          title: "BlocksGaming - The Future of Online Gaming",
          des: "Powered by Next.js, Node.js, Express.js, Web3.js, Socket.io, TypeScript, Taquito, Tailwind CSS, Prisma, chess.js, & Context API,along with IPFS & NFTs",
          img: "/blo.png",
          iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
          link: "https://blocks-sand-kappa.vercel.app/",
        },
        {
          id: 2,
          title: "BlocksMeeT - Online Secured Meeting System over Blockchain",
          des: "Created a safe file-sharing system with integration for the Tezos blockchain & made real-time video conferencingpossible for improved teamwork.",
          img: "/bt.png",
          iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
          link: "https://blocksmeet-ui1.vercel.app/",
        },
        {
          id: 3,
          title: "Chat App",
          des: "Real Time Chat App with a powerful Authentication and Authorization.",
          img: "/chat.png",
          iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
          link: "https://chat-ui-phi-seven.vercel.app/",
        },
        {
          id: 4,
          title: "Decentralized Notes",
          des: "A decentralized notes application on Ethereum allows users to create, store, and manage notes securely on the blockchain, ensuring data immutability and resistance to censorship.",
          img: "/dn.png",
          iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
          link: "https://notes-decentralized.vercel.app/",
        },
      ];

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
        <div className="py-20 bg-gray-900 relative overflow-hidden">
          {backgroundSVG}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-center mb-16 relative z-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              Recent Projects
            </span>
          </motion.h1>
          
          <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10 relative z-10">
            {projects.map((item, index) => (
              <motion.div
                key={item.id}
                className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PinContainer title="Live" href={item.link}>
                  <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                    <motion.div
                      className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img src={item.img} alt="bgimg" className="w-full h-full object-cover" />
                    </motion.div>
                  </div>
    
                  <h1 className="font-bold text-white lg:text-2xl md:text-xl text-base line-clamp-1 mb-2">
                    {item.title}
                  </h1>
    
                  <p className="lg:text-lg text-gray-300 font-light text-sm line-clamp-2 mb-4">
                    {item.des}
                  </p>
    
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                      {item.iconLists.map((icon, index) => (
                        <motion.div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-gray-800 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                          whileHover={{ scale: 1.1, zIndex: 10 }}
                        >
                          <img src={icon} alt={`icon${index}`} className="p-2" />
                        </motion.div>
                      ))}
                    </div>
    
                    <motion.a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex justify-center items-center group"
                      whileHover={{ scale: 1.05 }}
                    >
                      <p className="flex lg:text-lg text-sm text-gray-300 group-hover:text-white transition-colors">
                        Check Live Site
                      </p>
                      <FaLocationArrow className="ms-3 text-purple-400 group-hover:text-white transition-colors" />
                    </motion.a>
                  </div>
                </PinContainer>
              </motion.div>
            ))}
          </div>
          <hr className='border-gray-800 mt-16 relative z-10' />
        </div>
      );
    };
    
    export default RecentProjects;