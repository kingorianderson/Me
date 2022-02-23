import React from 'react'
import './nav.css'
import { BiHomeAlt } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'
const Nav = () => {
  return (
    <div>
      <a href="#"><BiHomeAlt/></a>
      <a href="#about"><AiOutlineUser/> </a>
      <a href="#skills"><BiHomeAlt/> </a>
      <a href="#services"><BiHomeAlt/> </a>
      <a href="#contact"><BiHomeAlt/> </a>
    </div>
  )
}

export default Nav