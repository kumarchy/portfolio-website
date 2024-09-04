import React from 'react';
import './MobileNav.css';

const MobileNav = ({
  isOpen,
  toggleMenu,
  scrollToSection,
  heroRef,
  skillsRef,
  workRef,
  projectRef,
  aboutRef,
  contactRef,
}) => {
  const handleClick = (sectionRef) => {
    scrollToSection(sectionRef); 
    toggleMenu();
  };

  return (
    <>
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="mobile-menu-container">
        <h2>Time To Program</h2>
          <ul>
            <li>
              <a className="menu-item" onClick={() => handleClick(heroRef)}>Home</a>
            </li>
            <li>
              <a className="menu-item" onClick={() => handleClick(skillsRef)}>Skills</a>
            </li>
            <li>
              <a className="menu-item" onClick={() => handleClick(workRef)}>Work Experience</a>
            </li>
            <li>
              <a className="menu-item" onClick={() => handleClick(projectRef)}>Projects</a>
            </li>
            <li>
              <a className="menu-item" onClick={() => handleClick(aboutRef)}>About</a>
            </li>
            <button className="contact-btn" onClick={() => handleClick(contactRef)}>Hire Me</button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
