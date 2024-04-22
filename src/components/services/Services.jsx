import React from "react";
import "./services.css";

const Services = () => {
  return (
    <section className="services section" id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-window services__icon"></i>
            <h3 className="services__title">
              Ui/Ux <br />
              Designer
            </h3>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Frontend <br />
              Developer
            </h3>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-pen services__icon"></i>
            <h3 className="services__title">
              Graphic <br />
              Designer
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
