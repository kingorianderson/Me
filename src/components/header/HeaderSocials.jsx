import React from 'react'
import { BsLinkedin, BsBehance } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://github.com/kingorianderson' target="_blank" className='header_social-link'><FaGithub/></a>
        <a href='https://linkedin.com/andersonkingori' target="_blank" className='header_social-link'><BsLinkedin/></a>
        <a href='https://behance.net/kingor' target="_blank" className='header_social-link'><BsBehance/></a>
    </div>
  )
}

export default HeaderSocials 