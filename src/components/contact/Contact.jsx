import React from 'react'
import './contact.css'
import { MdEmail } from 'react-icons/md'
import { BsWhatsapp, BsArrowRight } from 'react-icons/bs'
import { useRef } from 'react';
import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  // Email JS
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5inj44i', 'template_cu2q33a', form.current, 'QZnU7X_UBGaSDydDj')
      
    .then((result) => {
      console.log(result.text);
      setDone(true)
  }, (error) => {
      console.log(error.text);
  });

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className='contact_options'>
          <article className="contact_option">
            <i className='contact_option-icon'><MdEmail/></i>
            <h4>Email</h4>
            <h5>contact@kingori.co.ke</h5>
            <a href="mailto:kingorianderson@gmail.com" className='contact_button' target="_blank">
              Send a message
              <i className='contact_button-icon'><BsArrowRight/></i>
            </a>
          </article>
          <article className="contact_option">
          <i className='contact_option-icon'><BsWhatsapp/></i>
            <h4>Whatsapp</h4>
            <h5>0712333631</h5>
            <a href="https://api.whatsapp.com/send?phone=+254712333631" className='contact_button' target="_blank">
              Send a message
              <i className='contact_button-icon'><BsArrowRight/></i>
            </a>
          </article>
          
        </div>
        <div>
          <h3 className="contact_title">Write me a message</h3>
        <form ref={form} onSubmit={sendEmail}>
          <div className='contact_form-div'>
             <label className='contact_form-tag'>Names</label>
             <input type="text" name='name' placeholder='Insert your name' required/>
          </div>
          <div className='contact_form-div'>
             <label className='contact_form-tag'>Mail</label>
             <input type="email" name='email' placeholder='Insert your email' required/>
            </div>
            <div className='contact_form-div'>
             <label className='contact_form-tag'>Message</label>
             <textarea name='message'  rows='7' placeholder='Insert your email' required></textarea>
           </div>

           <button type='submit' className='btn btn-primary'>Send Message</button>
           {done && "Thanks, I'll reply ASAP :)"}
        </form>
        </div>
      </div>
    </section>
  )
}

export default Contact