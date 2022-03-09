import { useState } from "react";
import "./tabs.css";
import Skills from "./skills/Skills";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section id='skills'>
    <div className="container">
      <ul className="tab-nav">

        
        <button
          className={toggleState === 1 ? "tabs active-tabs tab-1" : "tabs"}
          onClick={() => toggleTab(1)}                          
        ><h2> Skills</h2> 
        </button> 

        <li></li>  

        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        ><h2 className="tab-2">Experience</h2>
        </button> 

        <li></li> 
         <div className="tab-3">
        <button
          className={toggleState === 3 ? "tabs active-tabs tab-3" : "tabs"}
          onClick={() => toggleTab(3)}
        ><h2>Education</h2>
        </button>
        </div>
      </ul>



      <div className="content-tabs">
       {/*** Tab 1 ***/}
      <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        > 
        <Skills/>
        </div>
       {/*** Tab 2 ***/}
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
           <div class="qualification__content" data-content id="work">
             
              <div class="qualification__data">
                <div class="qualification_align">
                  <h3 class="qualification__title">UI/ UX Designer</h3>
                  <span class="qualification__subtitle">Graphic Designer</span>
                  <div class="qualification__calendar">
                    <i class="uil uil-calendar-alt">2020 - 2020</i>
                  </div>
                </div>
                <div>
                  <span class="qualification__rounder"></span>
                  <span class="qualification__line"></span>
                </div>
              </div>
             
              <div class="qualification__data">
                <div></div>
                <div>
                  <span class="qualification__rounder"></span>
                  <span class="qualification__line"></span>
                </div>

                <div>
                  <h3 class="qualification__title">Design Studio</h3>
                  <span class="qualification__subtitle">Graphic Designer</span>
                  <div class="qualification__calendar">
                    <i class="uil uil-calendar-alt">2020 - 2020</i>
                  </div>
                </div>
              </div>
              
              <div class="qualification__data">
                <div class="qualification_align">
                  <h3 class="qualification__title">ICT Intern</h3>
                  <span class="qualification__subtitle">NHIF</span>
                  <div class="qualification__calendar">
                    <i class="uil uil-calendar-alt">2020 - 2021</i>
                  </div>
                </div>
                <div>
                  <span class="qualification__rounder"></span>
                  
                </div>
              </div>
            </div>

        </div>

       {/*** Tab 3 ***/}
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
         
          <div class="qualification__sections">
            
            <div class="qualification__content qualification__active" data-content id="education">
            
              <div class="qualification__data">
                <div class="qualification_align">
                  <h3 class="qualification__title">Diploma in Technical Trainers Education</h3>
                  <span class="qualification__subtitle">KTTC - Nairobi</span>
                  <div class="qualification__calendar">
                    <i class="uil uil-calendar-alt">2021 - Present</i>
                  </div>
                </div>
                <div>
                  <span class="qualification__rounder"></span>
                  <span class="qualification__line"></span>
                </div>
              </div>
              
              <div class="qualification__data">
                <div>
                  <span class="qualification__rounder"></span>
                </div>

                <div>
                  <h3 class="qualification__title">BSc Computer Technology</h3>
                  <span class="qualification__subtitle" >Meru University of Sci. and Technology</span>
                  <div class="qualification__calendar">
                    <i class="uil uil-calendar-alt">2016 - 2020</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
              
        
   </div>
</div>
</section>
  );
}

export default Tabs;
