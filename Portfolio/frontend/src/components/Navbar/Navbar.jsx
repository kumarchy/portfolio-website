import React, { useState } from 'react';
import './Navbar.css';
import MobileNav from '../MobileNav/MobileNav';

const Navbar = ({
  scrollToSection,
  heroRef,
  skillsRef,
  workRef,
  projectRef,
  aboutRef,
  contactRef,
}) => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav
        isOpen={openMenu}
        toggleMenu={toggleMenu}
        scrollToSection={scrollToSection}
        heroRef={heroRef}
        skillsRef={skillsRef}
        workRef={workRef}
        projectRef={projectRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <h1>Time To Program</h1>
          <ul>
            <li>
              <a className="menu-item" onClick={() => scrollToSection(heroRef)}>
                Home
              </a>
            </li>
            <li>
              <a className="menu-item" onClick={() => scrollToSection(skillsRef)}>
                Skills
              </a>
            </li>
            <li>
              <a className="menu-item" onClick={() => scrollToSection(workRef)}>
                Work Experience
              </a>
            </li>
            <li>
              <a className="menu-item" onClick={() => scrollToSection(projectRef)}>
                Projects
              </a>
            </li>
            <li>
              <a className="menu-item" onClick={() => scrollToSection(aboutRef)}>
                About
              </a>
            </li>
            <button className="contact-btn" onClick={() => scrollToSection(contactRef)}>Hire Me</button>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: '1.8rem' }}
            >
              {openMenu ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
