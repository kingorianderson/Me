import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>King'ori.</a>

      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#portfolio'></a></li>
        <li><a href='#services'>Home</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/> </a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
      </div>
    </footer>
  )
}

export default Footer