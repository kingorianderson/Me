import React from "react";
import CV from "../../assets/Kingori-Cv.pdf";

const HeaderBtn = () => {
  return (
    <div className="header_btn">
      <a href={CV} download className="btn download-btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Hire Me
      </a>
    </div>
  );
};

export default HeaderBtn;
