import React, { useEffect, useRef, useState } from "react";
import "./ProjectWorks.css";
import Slider from "react-slick";
import { PROJECT_WORKS } from "../../utils/data";

const ProjectWorks = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    sliderRef.current.slickNext();
  };

  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className="project-container">
      <h5>Project Works</h5>
      <div className="slider-wrapper">
        <div className="arrow-right-project" onClick={slideRight}>
          <span className="material-symbols-outlined">chevron_right</span>
        </div>

        <div className="arrow-left-project" onClick={slideLeft}>
          <span className="material-symbols-outlined">chevron_left</span>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {PROJECT_WORKS.map((item, index) => (
            <div key={index} className="projects-container">
              <div className="projects">
                <div className="project-description">
                  <h1>{item.project_no}</h1>
                  <h2>{item.project_type}</h2>
                  <p>{item.project_description}</p>
                  <h4>{item.languages_used}</h4>
                  <div className="github">
                    <a
                      href={item.github_src}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="./assets/images/github_icon.png"
                        alt="GitHub Link"
                      />
                    </a>
                  </div>
                </div>
                <div className="project-image">
                  <img src={item.project_image_url} alt="Project Image" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProjectWorks;
