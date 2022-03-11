import React from 'react'
import './header.css'
import BTN from './HeaderBtn'
import PROFILE from '../../assets/profile.png'
import HeaderSocials from './HeaderSocials'
import Nav from './Nav'
import { BsMouseFill } from 'react-icons/bs'


const Header = () => {
  return (
    <header>
      
      <div className="container header_container">
        <Nav/>
        <h5>Hello I'am</h5>
        <h1>King'ori Anderson</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <BTN/>
        <div className="header-items">
        <HeaderSocials/>

        <div className='profile'>
          <img src={PROFILE} alt='profile' className='profile-pic'/>
        </div>

      
         <a href='#contact' className='scroll_down'>
           <div className='scroll_icon'><BsMouseFill/> </div>
           <div  className='scroll_name'>Scroll Down</div>
        </a>
        </div>
      </div>
    </header>
  ) 
}

export default Header