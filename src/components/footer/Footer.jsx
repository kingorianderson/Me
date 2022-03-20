import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

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
        <a href="https://facebook.com" className='footer_social'><FaFacebookF/></a>
        <a href="https://instagram.com" className='footer_social'><FiInstagram/> </a>
        <a href="https://twitter.com" className='footer_social'><IoLogoTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; King'ori. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer