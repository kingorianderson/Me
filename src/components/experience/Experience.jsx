import React from 'react'
import { useState } from "react";
import './experience.css'




function Experience() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };



  return ( 
    
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical Level </span>

        <div className="skills__container container grid">
          <div>
           
            <div className="skills__content ">
              <div className="skills__header">
                <i className="uil uil-brackets-curly skills__icon"></i>

             
                <div>
                  <h1 className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}>Frontend developer</h1>

          
                  <span className="skills__subtitle">More than 2 years</span>
                </div>
                <i className="uil uil-angle-down skills__icon skills__arrow"></i>
              </div>
             

              <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
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
</div> </div>


            </div>
          </div>

          <div>
           
            <div className="skills__content">
              <div className="skills__header">
                <i className=" skills__icon"></i>

               
                <div>
                  <h1 className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)} >Backend developer</h1>
                  <span className="skills__subtitle">More than 1 y ears</span>
                </div>
                <i className="uil uil-angle-down skills__icon skills__arrow"></i>
              </div>


              <div className="content-tabs">
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
             
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
</div></div>

            </div>
          </div>

          <div>
           
            <div className="skills__content">
              <div className="skills__header">
                <i className="uil uil-crop-alt-rotate-right skills__icon"></i>

                <div>
                  <h1 className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)} >Designer</h1>
                  <span className="skills__subtitle">More than 5 years</span>
                </div>
                <i className="uil uil-angle-down skills__icon skills__arrow"></i>
              </div>



              <div className="content-tabs">
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
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
</div> </div>


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