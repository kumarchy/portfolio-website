import React from 'react';
import './ContactInfoCard.css';

const ContactInfoCard = ({ iconUrl, text, link }) => {
  return (
    <div className='contact-details-card'>
      <div className='icon'>
        <a href={link} target="_blank" rel="noopener noreferrer"><img src={iconUrl} alt={text}/></a>
      </div>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="contact-link">
          {text}
        </a>
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
}

export default ContactInfoCard;
