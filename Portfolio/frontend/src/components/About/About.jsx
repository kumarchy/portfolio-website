import React from "react";
import "./About.css";
import { ABOUT_ME } from "../../utils/data";

const About = () => {

  return (
    <section className="about-container">
      <h5>About Me</h5>
      {ABOUT_ME.map((item,index)=>(
      <div key={index}>
      <div className="about-infoCard">
        <div className="profile-img">
          <img src="./assets/images/profile_img_copy.jpg" alt="" />
        </div>
        <div className="about-content">
          <p>
          {item.introduction_1}
          <br /><br />
          {item.introduction_2}
          </p>
        </div>
      </div>
      <div className="showExperience">
        <div className="showCase"><p className="number">{item.no_of_internships}</p> <p>
          <a href={`/internship document.pdf`} target="_blank" rel="noopener noreferrer">Completed Internships</a>
          </p></div>
        <div className="showCase"><p className="number">{item.no_of_projects}</p> <p>Projects Completed Successfully</p></div>
        <div className="showCase"> <p className="number">{item.no_of_certifications}</p> <p>Certifications Earned</p></div>
      </div>
      </div>
      ))}
    </section>
  );
};

export default About;
