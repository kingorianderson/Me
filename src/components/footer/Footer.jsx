import React from 'react'
import './footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className='footer_logo'>King'ori.</div>

      <ul className='permalinks'>
        <li><a href='#' className='footer_social'>Home</a></li>
        <li><a href='#skills' className='footer_social'>Skills</a></li>
        <li><a href='#services' className='footer_social'>Services</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com" className='footer_social'><FaLinkedin/></a>
        <a href="https://instagram.com" className='footer_social'><FaGithub/> </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; King'ori. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer