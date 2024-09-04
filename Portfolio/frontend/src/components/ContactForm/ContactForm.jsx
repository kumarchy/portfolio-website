import React, { useRef, useState } from 'react';
import './ContactForm.css';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [sentSuccessfully, setSentSuccessfully] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();

    // Set sending state
    setSending(true);
    setSentSuccessfully(false);
    setError(null);

    try {
      await emailjs.sendForm('service_pcdxb5a', 'template_2lpw5ce', form.current, {
        publicKey: '367fDDZuxPmZ1Hk4c',
      });
      
      console.log('SUCCESS!');
      setSentSuccessfully(true); 
      form.current.reset(); 

      setTimeout(() => {
        setSentSuccessfully(false);
      }, 1000);

    } catch (err) {
      console.log('FAILED...', err.text);
      setError('Failed to send email. Please try again later.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className='contact-form-content'>
      <form ref={form} onSubmit={sendEmail}>
        <div className='name-container'>
          <input type="text" name='first_name' placeholder='First Name' required />
          <input type="text" name='last_name' placeholder='Last Name' required />
        </div>
        <input type="email" name='from_email' placeholder='Email' required />
        <textarea name="message" placeholder='Message' rows={3} required></textarea>

        <button type='submit' disabled={sending}>SEND</button>

        {sending && <p className='textMessage'>Sending...</p>}

        {!sending && sentSuccessfully && <p className='textMessage'>Message sent successfully!</p>}

        {!sending && error && <p className='textMessage'>{error}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
