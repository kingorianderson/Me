import React from 'react'
import './about.css'
import Img from '../../assets/about.jpg'
import { FaAward, FaUserFriends } from 'react-icons/fa'
import { BsFolderFill} from 'react-icons/bs'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={Img} alt='About Image'/>
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about_card'>
              <FaUserFriends className='about_icon'/>
              <h5>Clients</h5>
              <small>60+ Worldwide</small>
            </article>
            <article className='about_card'>
              <BsFolderFill className='about_icon'/>
              <h5>Projects</h5>
              <small>100+ Completed</small>
            </article>
          </div>

          <p>
          High level experience in UI/UX design and web development knowledge, producing quality work.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About