import React from 'react'
import './Hero.css';

const Hero = () => {
  return (
    <section className='hero-container'>
    <div className='hero-content'>
      <h2>Hello I'm</h2>
      <h2 style={{color:"#a993fe"}}>Kumar Chaudhary</h2>
      <p>
        Passionate FullStack Developer | Transforming Ideas into Seamless and Visually Stunning software Solutions
      </p>
    </div>

    <div className='hero-img'>
      <div className='myPic'>
      <img src="./assets/images/profile_img.jpg" alt="" />
      </div>
    </div>
    </section>
  )
}

export default Hero;