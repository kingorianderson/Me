import React from 'react'
import './header.css'
import BTN from './HeaderBtn'
import PROFILE from '../../assets/profile.png'
import HeaderSocials from './HeaderSocials'
import Nav from './Nav'

const Header = () => {
  return (
    <header>
      
      <div className="container header_container">
        <Nav/>
        <h5>Hello I'am</h5>
        <h1>King'ori Anderson</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <BTN/>
        <HeaderSocials/>

        <div className='profile'>
          <img src={PROFILE} alt='profile'/>
        </div>
        
        <a href='#contact' className='scroll_down'>Scroll Dowm</a>

      </div>
    </header>
  )
}

export default Header