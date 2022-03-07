import React from 'react'
import './contact.css'
import { MdEmail } from 'react-icons/md'
import { BsWhatsapp, BsArrowRight } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container container_container">
        <div className='contact_options'>
          <article className="contact_option">
            <i className='contact_option-icon'><MdEmail/></i>
            <h4>Email</h4>
            <h5>kingorianderson@gmail.com</h5>
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

        <form action="">
          <div className='contact_form-div'>
             <label for='' className='contact_form-tag'>Names</label>
             <input type="text" name='name' placeholder='Insert your name' required/>
          </div>
          <div className='contact_form-div'>
             <label for='' className='contact_form-tag'>Mail</label>
             <input type="email" name='email' placeholder='Insert your email' required/>
            </div>
            <div className='contact_form-div'>
             <label for='' className='contact_form-tag'>Message</label>
             <textarea name='message'  rows='7' placeholder='Insert your email' required></textarea>
           </div>

           <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact