import React from 'react';
import emailIcon from '../assets/images/email.png';
import './ContactStyles.scss';

function Contact() {
  return (
    <section id="contact">
      <div className="section__text">
        <p className="section__text__p1">Entre em</p>
        <h1 className="title">Contato</h1>
      </div>
      
      <div className="contact-info">
        <div className="contact-item">
          <img src={emailIcon} alt="Email Icon" className="icon" />
          <p><a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTNHSFCxXLpTzCGdwDsQSgMdhhMMztphqDxRDnWdJNphRBCmfBXMWDLmfPsnzfMtcGSjqB
"
target="_blank"
rel="noopener noreferrer">victorportodev@gmail.com</a></p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
