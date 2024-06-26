import React, { useRef, useState } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Home from '@/components/Home';
import RecentProjects from '@/components/Projects';
import Work from '@/components/Work';
import Skills from '@/components/Skills';
import Intro from '@/components/Intro'; // Assuming you have an Intro component

function App() {
  const [isIntroDone, setIsIntroDone] = useState(false); // State to control the visibility

  // Refs for each section you want to scroll to
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const workRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to a ref
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  // Function to be called when the Intro is done
  const handleIntroDone = () => {
    setIsIntroDone(true);
  };

  return (
    <div>
      {!isIntroDone ? (
        <Intro onDone={handleIntroDone} />
      ) : (
        <>
       <Navbar scrollToRef={scrollToRef} refs={{ homeRef, projectsRef, workRef, skillsRef, contactRef }} />
          <div ref={homeRef}><Home /></div>
          <div ref={projectsRef}><RecentProjects /></div>
          <div ref={workRef}><Work /></div>
          <div ref={skillsRef}><Skills /></div>
          <div ref={contactRef}><Footer /></div>
        </>
      )}
    </div>
  );
}

export default App;
