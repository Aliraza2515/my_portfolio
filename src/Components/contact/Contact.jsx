import React from 'react'
import './Contact.css'
import { FiMail } from 'react-icons/fi'
import { BsMessenger } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sgwl54s', 'template_xa3gdrl', form.current, 'Hwf9pqJYeTJcetnV1')
    e.target.reset()
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Us</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='options'>
            <FiMail className='icon' />
            <h4>Email</h4>
            <h5>ar.developer2515@gmail.com</h5>
            <a href="mailto:ardeveloper777@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className='options'>
            <BsMessenger className='icon' />
            <h4>Messenger</h4>
            <h5>Get Tutorials</h5>
            <a href="https://m.me/ernest,achiever" target='_blank'>Send a message</a>
          </article>

          <article className='options'>
            <BsWhatsapp className='icon' />
            <h4>WhatsApp</h4>
            <h5>+92-311-4959238</h5>
            <a href="https://api.whatsapp.com/send?phone+543657346782" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Enter Your Name' required />
          <input type="mail" name='email' placeholder='Enter Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact