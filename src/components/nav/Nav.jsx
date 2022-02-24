import React from 'react'
import './nav.css'
import { BiBook, BiHomeAlt, BiMessageSquareDetail } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'
import { RiServiceLine } from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className= {activeNav === '#' ? 'active' : ''}><BiHomeAlt/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className= {activeNav === '#about' ? 'active' : ''}><AiOutlineUser/> </a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className= {activeNav === '#skills' ? 'active' : ''}><BiBook/> </a>
      <a href="#services" onClick={() => setActiveNav('#services')} className= {activeNav === '#services' ? 'active' : ''}><RiServiceLine/> </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className= {activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/> </a>
    </nav>
  )
}

export default Nav