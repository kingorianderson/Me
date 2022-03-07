import React from 'react'
import './contact.css'
import { MdEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container container_container">
        <div className='contact_options'>
          <article className="contact_option">
            <MdEmail/>
            <h4>Email</h4>
            <h5>kingorianderson@gmail.com</h5>
            <a href="mailto:kingorianderson@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp/>
            <h4>Whatsapp</h4>
            <h5>kingorianderson@gmail.com</h5>
            <a href="https://api.whatsapp.com/send?phone=+254712333631" target="_blank">Send a message</a>
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
        </form>
      </div>
    </section>
  )
}

export default Contact