import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';

import MagicButton from './MagicButton';

const Footer = () => {
  const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];

  return (
    <footer className="w-full pt-10 pb-5 sm:pt-20 sm:pb-10 bg-gradient-to-r from-gray-700 to-gray-900" id="contact">
    <div className="flex flex-col items-center text-center px-4">
      <h1 className="text-xl sm:text-3xl font-bold text-white">
        Ready to take <span className="text-yellow-300">your</span> digital presence to the next level?
      </h1>
      <p className="text-white mt-5 mb-5 sm:mt-10">
        Reach out to me today and let's discuss how I can help you achieve your goals.
      </p>
      <a href="mailto:parasraut2511@gmail.com" className="hover:underline">
        <MagicButton
          title="Let's get in touch"
          icon={<FaLocationArrow />}
          position="right"
        />
      </a>
    </div>
    <div className="flex mt-8 sm:mt-16 flex-col sm:flex-row justify-between items-center text-white px-4">
      <p className="text-sm sm:text-base">
        Copyright © 2024 Paras Raut
      </p>

      <div className="flex items-center gap-3 mt-4 sm:mt-0">
        {socialMedia.map((info) => (
          <div
            key={info.id}
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:scale-110 transition-transform duration-200"
          >
            <img src={info.img} alt="icons" width={20} height={20} />
          </div>
        ))}
      </div>
    </div>
  </footer>
  );
};

export default Footer;