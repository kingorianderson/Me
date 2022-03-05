import React from 'react'
import './services.css'

const Services = () => {
  return (
    

<section class="services section" id="services">
        <h2 class="section__title">Services</h2>
        <span class="section__subtitle">What I Offer</span>

        <div class="services__container container grid">


      
          <div class="services__content">
            <div>
              <i class="uil uil-window services__icon"></i>
              <h3 class="services__title">Ui/Ux <br/>Designer</h3>
            </div>
          </div>

         
          <div class="services__content">
            <div>
              <i class="uil uil-arrow services__icon"></i>
              <h3 class="services__title">Frontend <br/>Developer</h3>
            </div>
            </div>

          
          <div class="services__content">
            <div>
              <i class="uil uil-pen services__icon"></i>
              <h3 class="services__title">Graphic <br/>Designer</h3>
            </div>  
            </div>

            
        </div>
      </section>
      

  )
}

export default Services