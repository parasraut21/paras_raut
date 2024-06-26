import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  
  
  import "react-vertical-timeline-component/style.min.css";
  
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
      <section className='bg-gradient-to-r from-gray-700 to-gray-900 px-4 sm:px-8 lg:px-16'>
      <div className='py-12 lg:py-16'>
        <h3 className='text-4xl sm:text-5xl lg:text-7xl font-bold text-white text-center'>Work Experience</h3>
        <div className='mt-5 flex flex-col text-center gap-3 text-white'>
          <p className='text-sm sm:text-base lg:text-lg'>
            I've worked with all sorts of companies, leveling up my skills and teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className='mt-12 text-white'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg, boxShadow: "0 3px 0 0 #000" }}
                contentStyle={{
                  borderTop: `4px solid ${experience.iconBg}`,
                  boxShadow: "0 3px 15px rgba(0,0,0,0.2)",
                  margin: "0 1rem",
                  marginBottom: "20px",
                }}
                contentArrowStyle={{ borderRight: `7px solid  ${experience.iconBg}` }}
              >
                <div>
                  <h3 className='text-xl font-semibold text-black'>
                    {experience.title}
                  </h3>
                  <p className='font-medium text-base text-black-500'>
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className='text-black-500/50 font-normal text-sm'>
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
  