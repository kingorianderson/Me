import React from 'react'
import './nav.css'
import { BiBook, BiHomeAlt, BiMessageSquareDetail } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'
import { RiServiceLine } from 'react-icons/ri'

const Nav = () => {
  return (
    <nav>
      <a href="#"><BiHomeAlt/></a>
      <a href="#about"><AiOutlineUser/> </a>
      <a href="#skills"><BiBook/> </a>
      <a href="#services"><RiServiceLine/> </a>
      <a href="#contact"><BiMessageSquareDetail/> </a>
    </nav>
  )
}

export default Nav