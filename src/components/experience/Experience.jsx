import React from 'react'
import ReactDOM from "react-dom";
import './experience.css'




const Experience = () => {


  const skillsContent = document.getElementsByClassName('skills__content'),
  skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills__content skills__close';
  }
  if (itemClass === 'skills__content skills__close') {
    this.parentNode.className = 'skills__content skills__open';
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills);
}); 



  return ( 
    
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical Level </span>

        <div className="skills__container container grid">
          <div>
           
            <div className="skills__content skills__open">
              <div className="skills__header">
                <i className="uil uil-brackets-curly skills__icon"></i>

             
                <div>
                  <h1 className="skills__titles">Frontend developer</h1>
                  <span className="skills__subtitle">More than 2 years</span>
                </div>
                <i className="uil uil-angle-down skills__icon skills__arrow"></i>
              </div>
             
              <div className="skills__list grid">
               
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">HTML</h3>
                    <span className="skills__number">90%</span>
                  </div>
                  <div className="skills__bar">
                    <div className="skills__percentage skills__html"></div>
                  </div>
                </div>
             
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">CSS</h3>
                    <span className="skills__number">80%</span>
                  </div>
                  <div className="skills__bar">
                    <div className="skills__percentage skills__css"></div>
                  </div>
                </div>
               
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">JavaScript</h3>
                    <span className="skills__number">60%</span>
                  </div>
                  <div className="skills__bar">
                    <div className="skills__percentage skills__js"></div>
                  </div>
                </div>
               
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Sass</h3>
                    <span className="skills__number">50%</span>
                  </div>
                  <div className="skills__bar">
                    <div className="skills__percentage skills__sass"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
           
            <div className="skills__content skills__close">
              <div className="skills__header">
                <i className=" skills__icon"></i>

               
                <div>
                  <h1 className="skills__titles">Backend developer</h1>
                  <span className="skills__subtitle">More than 1 y ears</span>
                </div>
                <i className="uil uil-angle-down skills__icon skills__arrow"></i>
              </div>
             
              <div className="skills__list grid">
               
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">PHP</h3>
                    <span className="skills__number">40%</span>
                  </div>
                  <div className="skills__bar">
                    <div className="skills__percentage skills__php"></div>
                  </div>
                </div>
              
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">MySQL</h3>
                    <span className="skills__number">50%</span>
                  </div>
                  <div className="skills__bar">
                    <div className="skills__percentage skills__mysql"></div>
                  </div>
                </div>
               
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Node Js</h3>
                    <span className="skills__number">55%</span>
                  </div>
                  <div className="skills__bar">
                    <div className="skills__percentage skills__node"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
           
            <div className="skills__content skills__close">
              <div className="skills__header">
                <i className="uil uil-crop-alt-rotate-right skills__icon"></i>

                <div>
                  <h1 className="skills__titles">Designer</h1>
                  <span className="skills__subtitle">More than 5 years</span>
                </div>
                <i className="uil uil-angle-down skills__icon skills__arrow"></i>
              </div>
            
              <div className="skills__list grid">
               
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Photoshop</h3>
                    <span className="skills__number">90%</span>
                  </div>
                  <div className="skills__bar">
                    <div className="skills__percentage skills__photoshop"></div>
                  </div>
                </div>
             
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Illustrator</h3>
                    <span className="skills__number">87%</span>
                  </div>
                  <div className="skills__bar">
                    <div className="skills__percentage skills__illustrator"></div>
                  </div>
                </div>
                
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">XD</h3>
                    <span className="skills__number">80%</span>
                  </div>
                  <div className="skills__bar">
                    <div className="skills__percentage skills__xd"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

           
           <div className="skills__content skills__close">
            <div className="skills__header">
              <i className="uil uil-wifi-router skills__icon"></i>

         
              <div>
                <h1 className="skills__titles">Network Admin</h1>
                <span className="skills__subtitle">More than 6 months</span>
              </div>
              <i className="uil uil-angle-down skills__icon skills__arrow"></i>
            </div>
       
            <div className="skills__list grid">
       
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Routing protocols configuration</h3>
                  <span className="skills__number">50%</span>
                </div>
                <div className="skills__bar">
                  <div className="skills__percentage skills__routing"></div>
                </div>
              </div>
  
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Cisco IOS Commands</h3>
                  <span className="skills__number">55%</span>
                </div>
                <div className="skills__bar">
                  <div className="skills__percentage skills__cisco"></div>
                </div>
              </div>
            
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Switching and VLAN configuration</h3>
                  <span className="skills__number">53%</span>
                </div>
                <div className="skills__bar">
                  <div className="skills__percentage skills__switching"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
          
        
      </section>
  )
}

export default Experience