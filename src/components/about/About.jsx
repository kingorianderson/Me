import React from 'react'
import './about.css'
import About from '../../assets/about.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={About} alt='About Image'/>
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About