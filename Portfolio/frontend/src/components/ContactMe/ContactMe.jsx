import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "../ContactInfoCard/ContactInfoCard";
import ContactForm from "../ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl="./assets/images/email_icon.png"
            text="chaudharykumar228@gmail.com"
            link="https://mail.google.com/mail/?view=cm&fs=1&to=chaudharykumar228@gmail.com" 
          />
          <ContactInfoCard 
            iconUrl="./assets/images/linkedin_icon.png"
            text="Visit my LinkedIn"
            link="https://www.linkedin.com/in/kumar-chaudhary-434050252"
          />
        </div>
        <div style={{ flex: 1}}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
