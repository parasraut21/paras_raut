"use client";

import { FaLocationArrow } from "react-icons/fa6";


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

  return (
    <div className="py-20 bg-gradient-to-r from-gray-700 to-gray-900">
      <h1 className="text-7xl font-bold text-white text-center">
        <span className="text-purple">Recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
      {projects.map((item) => (
  <div
    className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
    key={item.id}
  >
    <PinContainer
      title="Paras"
      href="https://github.com/parasraut21"
    >
      <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
        <div
          className="relative w-full h-full overflow-hidden lg:rounded-3xl"
       
        >
          <img src={item.img} alt="bgimg" />
        </div>
    
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          <img
            src={item.img}
            alt="cover"
            className=" absolute bottom-0 cursor-pointer"
          />
        </a>
      </div>

      <h1 className="font-bold text-white lg:text-2xl md:text-xl text-base line-clamp-1">
        {item.title}
      </h1>

      <p
        className="lg:text-xl lg:font-normal text-white font-light text-sm line-clamp-2"
        style={{
          color: "#BEC1DD",
          margin: "1vh 0",
        }}
      >
        {item.des}
      </p>

      <div className="flex items-center justify-between mt-7 mb-3">
        <div className="flex items-center">
          {item.iconLists.map((icon, index) => (
            <div
              key={index}
              className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
              style={{
                transform: `translateX(-${5 * index + 2}px)`,
              }}
            >
              <img src={icon} alt="icon5" className="p-2" />
            </div>
          ))}
        </div>

 
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
          <p className="flex lg:text-xl md:text-xs text-sm text-white">
            Check Live Site
          </p>
          <FaLocationArrow className="ms-3" color="#CBACF9" />
        </a>
      </div>
    </PinContainer>
  </div>
))}
      </div>
      <hr className='border-slate-200' />
  
    </div>
  );
};

export default RecentProjects;