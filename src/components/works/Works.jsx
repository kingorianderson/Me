import React from 'react'
import { useState } from "react";
import './works.css'
import { skills } from "./../../Data"
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'




const Works = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };
  return ( 

    <section className="section" id='work'>
        <h5>My Skills</h5>
        <h2>Experience</h2>

        <div className=" container skills_container">
          <div>
        {skills.map((item, index) => (
            <div className="skills__content">
              <div className="skills__header">
                <i className="skills__icon">{item.icon}</i>

        
                <div className="tabskills active-tabskills" onClick={() => toggle(index)}>
                  <h3>{item.heading}</h3>
                  <span className="skills__subtitle">{item.subheading}</span>
                </div>
                <i className="skills__icon skills__arrow">{selected === index ? <IoIosArrowUp/> : <IoIosArrowDown/>}</i>
              </div>
             

              <div className="content-tabs">
            <div className={selected === index ? "content  show" : "content"}>
              <div className="skills__list grid">
               
                <div className="skills__data">
                  <div className="skills__titles">
                        <h3 className="skills__name">{item.skill_one}</h3>
                        <span className="skills__number">{item.percent_one}</span>
                  </div>
                  <div className="skills__bar">
                    {item.skillsbar_one}
                  </div>
                </div>
             
                <div className="skills__data">
                  <div className="skills__titles">
                        <h3 className="skills__name">{item.skill_two}</h3>
                        <span className="skills__number">{item.percent_two}</span>
                  </div>
                  <div className="skills__bar">
                        {item.skillsbar_two}
                  </div>
                </div>
               
                <div className="skills__data">
                  <div className="skills__titles">
                        <h3 className="skills__name">{item.skill_three}</h3>
                        <span className="skills__number">{item.percent_three}</span>
                  </div>
                  <div className="skills__bar">
                        {item.skillsbar_three}
                  </div>
                </div>
               
                <div className="skills__data">
                  <div className="skills__titles">
                        <h3 className="skills__name">{item.skill_four}</h3>
                        <span className="skills__number">{item.percent_four}</span>
                  </div>
                  <div className="skills__bar">
                        {item.skillsbar_four}
                  </div>
                </div>
              </div>
             </div>
           </div>  
          </div>
        ))}
    </div>  
    </div> 
    </section>
    
  )
}

export default Works