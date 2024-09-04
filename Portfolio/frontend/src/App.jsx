import React, { useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Resume from './components/Resume/Resume';
import WorkExperiences from './components/WorkExperiences/WorkExperiences';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import SkillsInfoCard from './components/SkillsInfoCard/SkillsInfoCard';
import About from './components/About/About';
import ProjectWorks from './components/ProjectWorks/ProjectWorks';

function App() {

  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const workRef = useRef(null);
  const projectRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    const yOffset = -100;
    const yPosition = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: yPosition, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar
        scrollToSection={scrollToSection}
        heroRef={heroRef}
        skillsRef={skillsRef}
        workRef={workRef}
        projectRef={projectRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />
      <div className='container'>
        <div ref={heroRef}>
          <Hero />
        </div>
        <div>
          <Resume />
        </div>
        <div ref={skillsRef}>
          <SkillsInfoCard />
        </div>
        <div ref={workRef}>
          <WorkExperiences />
        </div>
        <div ref={projectRef}>
          <ProjectWorks />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={contactRef}>
          <ContactMe />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
