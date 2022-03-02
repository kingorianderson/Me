import { useState } from "react";
import "./tabs.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <ul className="tab-nav">
          <li>
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}                          
        ><h2> Skills</h2>
         
        </button> </li>  <li>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          <h2>Experience</h2>
        </button> </li> <li>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          <h2>Education</h2>
        </button> </li>
      </ul>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div class="one tab-content active">

<div className="content-card">

  <div className="card-head">
    <h4>Frenify llc</h4>
    <p>( 2018 — Today )</p>
  </div>

  <div className="card-body">
    <h3>Sr. Front-end Engineer</h3>
    <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>

</div>


<div className="content-card">

  <div className="card-head">
    <h4>Google llc</h4>
    <p>( 2016 — 2018 )</p>
  </div>

  <div className="card-body">
    <h3>Front-end Developer</h3>
    <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>

</div>


<div className="content-card">

  <div className="card-head">
    <h4>Twitter llc</h4>
    <p>( 2016 — 2011 )</p>
  </div>

  <div className="card-body">
    <h3>Graphic Designer</h3>
    <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>

</div>

</div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Content 2</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Content 3</h2>
          <hr />
          <div className="skill-box">
                <h4 className="skill-name">Adobe Photoshop</h4>

                <div className="progress-bar">
                  <div className="progress" ></div>
                  <div className="progress-rate" >92%</div>
                </div>
              </div>

              <div className="skill-box">
                <h4 className="skill-name">HTML5 / CSS3</h4>

                <div className="progress-bar">
                  <div className="progress" ></div>
                  <div className="progress-rate" >95%</div>
                </div>
              </div>

              <div className="skill-box">
                <h4 className="skill-name">WordPress</h4>

                <div className="progress-bar">
                  <div className="progress" ></div>
                  <div className="progress-rate" >80%</div>
                </div>
              </div>

              <div className="skill-box">
                <h4 className="skill-name">Adobe Illustrator</h4>

                <div className="progress-bar">
                  <div className="progress" ></div>
                  <div className="progress-rate" >85%</div>
                </div>
              </div>

              <p className="skill-text" id="skills">
                A freelance creative designer with a love for minimal design,
                clean typography and well-written code, located in San Francisco.
                Provide high quality and cost effective offshore web and software
                development services. Wide range of web and software development
                services across the world.
              </p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
