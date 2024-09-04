import React from 'react'

const ProjectsCard = ({item}) => {
  return (
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
              <img src="./assets/images/github_icon.png" alt="GitHub Link" />
            </a>
          </div>
        </div>
        <div className="project-image">
          <img src={item.project_image_url} alt="Project Image" />
        </div>     
      </div>
  )
}

export default ProjectsCard