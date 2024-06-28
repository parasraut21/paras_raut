import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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

  return (
    <section className='bg-gradient-to-r from-gray-700 to-gray-900 px-4 sm:px-8 lg:px-16 py-12 lg:py-16'>
      <h3 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center'>Work Experience</h3>
      <div className='mt-5 flex flex-col text-center gap-3 text-white'>
        <p className='text-xs sm:text-sm lg:text-base'>
          I have worked with all sorts of companies, leveling up my skills and teaming up with smart people. Here's the rundown:
        </p>
      </div>

      <div className='mt-12 text-white'>
        <div className="overflow-x-auto">
          <VerticalTimeline layout="1-column">
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={`experience-${index}`}
                contentStyle={{ background: 'transparent', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid #fff' }}
                date={experience.date}
                iconStyle={{ background: experience.iconBg, color: '#fff' }}
                icon={<span className="rounded-full h-8 w-8 flex items-center justify-center">{index + 1}</span>}
              >
                <h3 className='text-lg sm:text-xl text-white font-bold'>{experience.title} at {experience.company_name}</h3>
                <ul className='my-5 list-disc ml-5 space-y-2 sm:ml-8 lg:ml-10'>
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className='text-white font-normal text-sm sm:text-base'>
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />
    </section>
  );
};

export default Work;
