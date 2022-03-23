import React from "react"
import "../../index.css"


const Nav = () => {
// const [darkMode, setDarkMode] = useState(false);

//  <i className="change-theme" id='theme-button'>OOO</i>
  return (
    <div className='head'>
      <div className='top_nav'>
        <a href="" className='navs_logo'>Kingori.</a>
        

        {/* <div className={darkMode ? "dark-mode" : "light-mode"}> */}
     
{/*       
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div> */}
        
    {/* </div> */}
        {/* <i className="" id="darkMode"><RiMoonClearLine/></i> */}
       
      </div>
    </div>
  )
} 

export default Nav