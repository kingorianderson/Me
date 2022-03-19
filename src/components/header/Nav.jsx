
import React from "react"
import "../../index.css"
import { RiMoonClearLine } from 'react-icons/ri'


const Nav = () => {
  
  let clickedClass = "clicked"
  const body = document.body
  const lightTheme = "light"
  const darkTheme = "dark"
  let theme

  if (localStorage) {
    theme = localStorage.getItem("theme")
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme)
  } else {
    body.classList.add(lightTheme)
  }

  const switchTheme = e => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme)
      e.target.classList.remove(clickedClass)
      localStorage.setItem("theme", "light")
      theme = lightTheme
    } else {
      body.classList.replace(lightTheme, darkTheme)
      e.target.classList.add(clickedClass)
      localStorage.setItem("theme", "dark")
      theme = darkTheme
    }
  }
//  <i className="change-theme" id='theme-button'>OOO</i>
  return (
    <div className='head'>
      <div className='top_nav container'>
        <a href="" className='navs_logo'>Kingori.</a>
        
        <i
      className={theme === "dark" ? clickedClass : ""}
      id="darkMode"
      onClick={e => switchTheme(e)}
    ><RiMoonClearLine/></i>
       
      </div>
    </div>
  )
} 

export default Nav