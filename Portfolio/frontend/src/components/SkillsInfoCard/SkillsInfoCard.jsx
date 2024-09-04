import React, { useEffect, useState } from 'react';
import './SkillsInfoCard.css';
import { SKILLS } from '../../utils/data';

const SkillsInfoCard = () => { 

  return (
    <>
    <p className='skill-tag'>Skills</p>
    <div className='skills-info-card'>
     <div className='main-container'>
     {SKILLS.map((item, index)=>(
      <div className='skill-container' key={index}>
        <div className='skill-text'>
        <span>{item.title}</span>
        <img src={item.img_url} alt="" />
        </div>
        <p className='description'>{item.description}</p>
      </div>
    ))}
    </div>
    </div>
    </>
  )
}

export default SkillsInfoCard;