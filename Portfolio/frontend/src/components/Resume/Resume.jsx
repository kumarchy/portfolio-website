import React from 'react'
import './Resume.css';
import { FiDownload } from "react-icons/fi";

const Resume = () => {
  return (
    <div className='resume-container'>
    <a href="/Resume.pdf" download className='resume'>
      Download Resume <FiDownload />
    </a>
  </div>
  )
}

export default Resume;